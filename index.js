var copyDereferenceSync = require('copy-dereference').sync;
var rimraf = require('rimraf');
var Plugin = require("broccoli-plugin");

module.exports = Dereference;

function Dereference(inputNode, options) {
  if (!(this instanceof Dereference)) {
    return new Dereference(inputNode, options);
  }

  options = options || {};
  Plugin.call(this, [inputNode], {
    annotation: options.annotation
  })
  this.options = options;
}

Dereference.prototype.constructor = Dereference;
Dereference.prototype = Object.create(Plugin.prototype);

Dereference.prototype.build = function () {
  // copyDereferenceSync wants to create the directory.
  rimraf.sync(this.outputPath);
  copyDereferenceSync(this.inputPaths[0], this.outputPath);
};
