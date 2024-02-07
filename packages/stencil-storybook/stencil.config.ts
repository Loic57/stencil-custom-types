import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'ap-web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'assets', warn: true }
      ]
    },
    angularOutputTarget({
      componentCorePackage: 'ap-web-components', // The componentCorePackage should match the name field in your Stencil project's package.json.
      outputType: 'component', // outputType should be set to 'component' for Stencil projects using the dist output. Otherwise if using the custom elements output, outputType should be set to 'scam' or 'standalone'.
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/ap-web-components/components.ts', // The directivesProxyFile is the relative path to the file that will be generated with all of the Angular component wrappers. You will replace the file path to match your project's structure and respective names. You can generate any file name instead of components.ts.
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/ap-web-components/index.ts', // The directivesArrayFile is the relative path to the file that will be generated with a constant of all the Angular component wrappers. This constant can be used to easily declare and export all the wrappers.
    })
  ],
  // Tous ces fichiers permettent de créer le fichier css ap-web-components.css dans dist/ap-web-components
  globalStyle: 'src/styles/app.scss',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/variables.scss',
        'src/styles/functions/strip-unit.scss',
        'src/styles/functions/map-deep-get.scss',
        'src/styles/utils/texts.scss',
        'src/styles/utils/spacings.scss',
        'src/styles/utils/colors.scss'
      ],
    }),
  ],
  buildDist: true
};
