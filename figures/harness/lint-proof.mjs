// lint-proof.mjs — print the figure-lint warnings for one proof (or --all),
// per stage, against the same per-stage camera the deliverables use. The
// fast feedback loop for burning down label warnings with "auto"/labelAuto.
//
//   node scripts/lint-proof.mjs <proof> [...]  |  --all

import { readFileSync, existsSync } from 'node:fs';
import { Sketch } from '../src/sketch.js';
import { interpret } from '../src/interpret.js';
import { Camera } from '../src/camera.js';
import { frameStage } from '../src/stage-framing.js';
import { lintFigure } from '../src/figure-lint.js';

const W = 1100, H = 850;
const args = process.argv.slice(2);
let names;
if (args.includes('--all')) {
  const manifest = JSON.parse(readFileSync('proofs/project.json', 'utf8'));
  names = manifest.sketches.filter((s) => s.file.endsWith('.sketch.js')).map((s) => s.file.replace(/\.sketch\.js$/, ''));
} else {
  names = args.map((a) => a.replace(/\.sketch\.js$|\.js$/, '').replace(/^proofs[\\/]/, ''));
}
if (!names.length) {
  console.error('usage: node scripts/lint-proof.mjs <proof> [...] | --all');
  process.exit(2);
}

let total = 0;
for (const name of names) {
  const file = ['proofs/' + name + '.sketch.js', 'proofs/' + name + '.js'].find(existsSync);
  if (!file) {
    console.error(`${name}: no sketch file`);
    continue;
  }
  const r = interpret(new Sketch(readFileSync(file, 'utf8')), {});
  const scene = r.scene || r;
  if (!scene || !scene.primitives) {
    console.error(`${name}: interpret failed — ${r.error ? r.error.message : 'no scene'}`);
    total++;
    continue;
  }
  const stages = scene.steps?.names?.length ? scene.steps.names : [null];
  const vp = (scene.viewpoints || []).find((v) => v && v.position);
  for (const stage of stages) {
    const cam = new Camera();
    cam.setLocked(scene.dim === '2D');
    cam.setYUp(!!scene.yUp);
    cam.setAspect(W / H);
    frameStage(cam, scene, stage, { viewpoint: vp, size: { width: W, height: H } });
    for (const w of lintFigure(scene, { step: stage, camera: cam, size: { width: W, height: H } })) {
      total++;
      console.log(`${name}/${stage || 'figure'}  [${w.code}]  ${w.message}`);
    }
  }
}
console.log(total ? `${total} warning${total === 1 ? '' : 's'}` : 'clean');
