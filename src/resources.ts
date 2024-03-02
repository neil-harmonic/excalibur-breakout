import { ImageSource, Loader } from 'excalibur';

const Resources = {
  Sword: new ImageSource('/assets/sword.png')
} as const;

const loader = new Loader();

for (const res of Object.values(Resources)) {
  console.log(res);
  loader.addResource(res);
}

export { Resources, loader };
