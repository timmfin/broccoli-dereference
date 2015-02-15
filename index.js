var copyDereferenceSync = require('copy-dereference').sync;
var rimraf = require('rimraf');
var Writer = require("broccoli-writer");

module.exports = Dereference;

function Dereference(inputTree) {
  if (!(this instanceof Dereference)) {
    return new Dereference(inputTree);
  }
  this.inputTree = inputTree;
}

Dereference.prototype.constructor = Dereference;
Dereference.prototype = Object.create(Writer.prototype);

Dereference.prototype.write = function (readTree, destDir) {
  return readTree(this.inputTree)
      .then(function (srcDir) {
        // copyDereferenceSync wants to create the directory.
        rimraf.sync(destDir);
        copyDereferenceSync(srcDir, destDir);
      });
};
