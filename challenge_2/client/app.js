

var generateCsv = (obj, keys = []) => {
  if (keys.length === 0) {
    for (var key in obj) {
      if (key !== 'children') {
        keys.push(key);
      }
    }
    var csv = keys.join() + '\n';
  }

  var array = [];
  for (var key of keys) {
    array.push(obj[key]);
  }

  if (csv === undefined) {
       csv = '';  
   }
  csv += array.join() + '\n';

  if (obj.children.length > 0) {
    for (var i = 0; i < obj.children.length; i++) {
      csv += generateCsv(obj.children[i], keys);
    }
  }
  return csv;
};

module.exports.generateCsv = generateCsv;