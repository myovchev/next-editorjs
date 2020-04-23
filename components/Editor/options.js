// Editor options
export const options = {
  placeholder: 'Enter for new paragraph',
  autofocus: true,

  /**
   * onReady callback
   */
  onReady: () => { console.count('READY callback') },

  /**
   * onChange callback
   */
  onChange: () => { console.count('CHANGE callback') },
};
