import Parser from '../../../utilities/parser';

const { dialog } = window.require('electron').remote;


const OpenFile = () => new Promise((response, reject) => {
  const options = {
    title: 'Open CSV File',
    filters: [
      { name: 'csv', extensions: ['csv'] }
    ]
  };

  const files = dialog.showOpenDialog(null, options);
  if (!files) {
    reject(new Error('File not found'));
  } else {
    const parser = new Parser();

    response(parser.doParseAsync(files[0]).then((data) => {
      const headers = Object.keys(data[0]).map(i => ({ name: i, value: i }));
      return { columns: headers, rows: data };
    }));
  }
});

export default OpenFile;
