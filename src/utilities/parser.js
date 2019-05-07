/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-prototype-builtins */
const fs = window.require('fs');
const parse = require('csv-parse');


export default class Parser {
  _parseCSV(file) {
    return new Promise(((resolve, reject) => {
      const parser = parse({ columns: true, skip_empty_lines: true },
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
          parser.end();
        });
      fs.createReadStream(file).pipe(parser);
    }));
  }

  doParseAsync(filename) {
    return this._parseCSV(filename).then(data => data).catch((error) => {
      throw error;
    });
  }

  async getHeaders(file) {
    return this.doParseAsync(file).then(data => Object.keys(data[0]));
  }

  async getDiffStructure(id, leftFile, rightFile) {
    const headers = await this.getHeaders(leftFile);

    const files = this.doParseAsync(leftFile).then(async (leftData) => {
      const rightData = await this.doParseAsync(rightFile);
      return { leftData, rightData };
    });

    return files.then((data) => {
      const retVal = {};

      data.leftData.forEach((leftData) => {
        retVal[leftData[id]] = {};
        retVal[leftData[id]].left = leftData;
      });

      data.rightData.forEach((rightData) => {
        if (!retVal[rightData[id]]) {
          retVal[rightData[id]] = {};
        }

        retVal[rightData[id]].right = rightData;
      });

      const blank = {};

      headers.forEach((column) => {
        blank[column] = '';
      });

      for (const property in retVal) {
        if (retVal.hasOwnProperty(property)) {
          if (retVal[property].left && !retVal[property].right) {
            retVal[property].change = { type: 'add' };
            retVal[property].right = blank;
          } else if (!retVal[property].left && retVal[property].right) {
            retVal[property].change = { type: 'remove' };
            retVal[property].left = blank;
          } else {
            const changes = [];

            for (const column in retVal[property]) {
              if (retVal[property].hasOwnProperty(column)) {
                if (retVal[property].left[column] !== retVal[property].right[column]) {
                  changes.push(column);
                }
              }
            }

            if (changes.length > 0) {
              retVal[property].change = { type: 'change', changes }
            }
          }
        }
      }

      return retVal;
    });
  }
}
