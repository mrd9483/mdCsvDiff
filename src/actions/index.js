// eslint-disable-next-line import/prefer-default-export
export const displayNotification = message => ({
  type: 'DISPLAY_NOTIFICATION',
  message
});

export const hideNotification = () => ({
  type: 'HIDE_NOTIFICATION'
});

export const setTimeoutId = id => ({
  type: 'SET_TIMEOUT_ID',
  id
});

export const setData = data => ({
  type: 'SET_DATA',
  rows: data.rows,
  columns: data.columns
});

export const clearData = () => ({
  type: 'CLEAR_DATA'
});
