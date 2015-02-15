# broccoli-dereference

The broccoli-dereference transforms a tree by turning any symlinks into files.

## Installation

```bash
npm install --save-dev broccoli-dereference
```

## Usage

```js
var dereference = require('broccoli-dereference');
var outputTree = dereference(inputTree);
```

* **`inputTree`**: A tree to copy, converting symlinks to files.
