const { dialog } = window.require('electron').remote;

const OpenFile = () => {
  const options = {
    title: 'Open CSV File',
    filters: [
      { name: 'csv', extensions: ['csv'] }
    ]
  };

  const files = dialog.showOpenDialog(null, options);
  if (!files) {
    return { type: 'DISPLAY_NOTIFICATION', message: 'File not found' };
  }

  return files;
};


export default OpenFile;
