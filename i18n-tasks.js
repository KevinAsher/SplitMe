import {
  extractFromFiles,
  findMissing,
  findUnused,
  findDuplicated,
  flatten,
} from 'i18n-extract';
import frLocale from './src/locale/frLocale';

const frLocaleFlattened = flatten(frLocale);

const keys = extractFromFiles([
  'src/**/*.js',
], {
  marker: 'polyglot.t',
});

let reports = [];
reports = reports.concat(findMissing(frLocaleFlattened, keys));
reports = reports.concat(findUnused(frLocaleFlattened, keys));
reports = reports.concat(findDuplicated(frLocaleFlattened, keys));

if (reports.length > 0) {
  console.log(reports);
  process.exit(1);
} else {
  process.exit(0);
}
