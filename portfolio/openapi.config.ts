import { GeneratorConfig } from 'ng-openapi';

const config: GeneratorConfig = {
  input: './src/app/api/schema/portfolio-schema.yaml',
  output: './src/app/api/openapi',
  options: {
    dateType: 'string',
    enumStyle: 'enum',
    generateEnumBasedOnDescription: true,
    generateServices: true,
  },
};

export default config;