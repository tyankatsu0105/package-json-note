<p align="center"><img width="300px" height="280px" src="https://raw.githubusercontent.com/tyankatsu0105/package-json-note/main/assets/logo.png" alt=""></p>

<h2 align="center">package-json-note</h2>
<p align="center">
Create/Edit note for package.json to all developers.
</p>

<p align="center">
  <a title="Current version" href="https://badge.fury.io/js/package-json-note" rel="nofollow">
    <img src="https://badge.fury.io/js/package-json-note.svg?style=flat">
  </a>
  <a title="deploy" href="https://github.com/algolia/shipjs" rel="nofollow">
    <img src="https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat">
  </a>
  <a title="MIT License" href="[LICENSE](https://opensource.org/licenses/MIT)" rel="nofollow">
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat">
  </a>
</p>

## Usage

```bash
npm install -D package-json-note
```

### CLI

#### init

```bash
package-json-note --init
```

After running, `package-json-note.js` is created.

```js
module.exports = {
  name: "",
  version: "",
  description: "",
  main: "",
  "scripts.test": "",
  keywords: "",
  author: "",
  license: "",
  "devDependencies.package-json-note": "",
};
```

#### check

```bash
package-json-note --check
```

If there is something wrong, `ERROR` and `WARN` is showed on console.

```json
{
  "name": "sample",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "devDependencies": {
    "package-json-note": "1.0.0",
    "eslint": "8.0.0"
  }
}
```

```js
module.exports = {
  name: "",
  version: "",
  description: "",
  main: "",
  "scripts.test": "",
  keywords: "",
  author: "",
  license: "",
  "devDependencies.package-json-note": "",
};
```

```bash
 ERROR  These keys does not exist at package.json

author
license

 WARN  You can add these keys to note

devDependencies.eslint
```

#### help

```bash
package-json-note --help
```

## License

See [LICENSE](./LICENSE)
