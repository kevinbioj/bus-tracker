import { parse } from 'csv-parse';
import { createReadStream } from 'node:fs';

export function parseCsv<T = Record<string, string>>(path: string, onRecord: (item: T) => unknown) {
  const stream = createReadStream(path);
  let header: string[] = [];

  const csvStream = stream.pipe(parse({ bom: true, skipEmptyLines: true }));
  csvStream.once('data', (headerRow) => {
    header = headerRow;
    csvStream.on('data', (dataRow) => {
      let record: any = {};
      for (let i = 0; i < dataRow.length; i += 1) record[header[i]] = dataRow[i];
      onRecord(record);
    });
  });

  return new Promise((resolve, reject) => {
    csvStream.once('end', resolve);
    csvStream.once('error', reject);
  });
}
