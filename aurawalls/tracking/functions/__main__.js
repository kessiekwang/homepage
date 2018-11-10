/**
* A 'No specified function' function
* @param {string} info Some info
* @returns {string}
*/
module.exports = (info = 'No specified function', context, callback) => {

  callback(null, `${info}`);

};
