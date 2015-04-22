var path = Object.create(require('path-browserify'));
var originalNormalize = path.normalize;

path.normalize = function(p) {
  var protocol = p.match(/^(https?:\/\/)/);
  
  if (protocol) {
    p = p.substring(protocol[1].length - 1);
    p = originalNormalize.call(this, p);
    if (p.indexOf('/') === 0) {
      p = p.substring(1);
    }
    return protocol[1] + p;
  } 
  
  return originalNormalize.call(this, p);
};

module.exports = path;
