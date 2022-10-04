const fs = require('fs');
const path = require('path');
const typescript = require('typescript');

module.exports = {
  input: [
    '{pages,components}/**/*.{js,jsx,ts,tsx}',
    '../../libs/shared/ui/src/lib/**/*.{js,jsx,ts,tsx}',
    // Use ! to filter out files or directories
    '!**/*.spec.{js,jsx,ts,tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
    '!locales/**',
    '!**/node_modules/**',
  ],
  output: './',
  options: {
    debug: true,
    sort: true,
    removeUnusedKeys: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx'],
      fallbackKey: function (ns, value) {
        return value;
      },

      // https://react.i18next.com/latest/trans-component#usage-with-simple-html-elements-like-less-than-br-greater-than-and-others-v10.4.0
      supportBasicHtmlNodes: true, // Enables keeping the name of simple nodes (e.g. <br/>) in translations instead of indexed keys.
      keepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'], // Which nodes are allowed to be kept in translations during defaultValue generation of <Trans>.
    },
    lngs: ['en', 'ja'],
    defaultLng: 'en',
    defaultNs: 'common',
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'public/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false, // namespace separator
    keySeparator: '.', // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
    metadata: {},
    allowDynamicKeys: false,
  },
  transform: function customTransform(file, enc, done) {
    ('use strict');
    const parser = this.parser;

    // REF: https://github.com/nucleartux/i18next-scanner-typescript
    const options = {
      tsOptions: {
        target: 'es2015',
      },
      extensions: ['.ts', '.tsx'],
    };

    const { base, ext } = path.parse(file.path);

    if (options.extensions.includes(ext) && !base.includes('.d.ts')) {
      const content = fs.readFileSync(file.path, enc);

      const { outputText } = typescript.transpileModule(content, {
        compilerOptions: options.tsOptions,
        fileName: path.basename(file.path),
      });

      // https://github.com/i18next/i18next-scanner#api
      parser.parseFuncFromString(outputText, function (key, _opts) {
        _opts.defaultValue = key.split('.').at(-1);
        parser.set(key, _opts);
      });
      parser.parseTransFromString(outputText);
      //   content,
      //   { list: ['i18next._', 'i18next.__'] },
      //   (key, opts) => {
      //     parser.set(
      //       key,
      //       Object.assign({}, opts, {
      //         nsSeparator: false,
      //         keySeparator: false,
      //       })
      //     );
      //   }
      // );
    }

    done();
  },
};
