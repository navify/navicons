import { Config } from '@rindo/core';

export const config: Config = {
  namespace: 'navicons',
  buildEs5: 'prod',
  outputTargets: [
    {
      type: 'dist',
      empty: false,
    },
    {
      type: 'dist-custom-elements',
      dir: './components',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [
        {
          src: './components/test/*.svg',
          dest: './assets/',
        },
        {
          src: './svg/*.svg',
          dest: './build/svg/',
        }
      ],
      empty: false,
      serviceWorker: false,
    },
  ],
};
