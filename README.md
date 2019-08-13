<h1 align="center">Zapify</h1>
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
<p align="center"><img src="https://i.ibb.co/X23NHw6/a.png" height="100px" alt="a" border="0"></p>
<h2 align="center">🚀 Blazing fast react Ui library with Hooks 🚀</h2>

<h3 align="center">Status Badges</h3>

[![Build Status](https://travis-ci.org/zapify-ui/zapify.svg?branch=Staging)](https://travis-ci.org/zapify-ui/zapify)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/zapify-ui/zapify/blob/Staging/LICENSE) 
[![npm version](https://badge.fury.io/js/zapify-ui.svg)](https://badge.fury.io/js/zapify-ui)
[![Netlify Status](https://api.netlify.com/api/v1/badges/71ceb923-c95d-413d-9519-30c7931fc134/deploy-status)](https://app.netlify.com/sites/zapify/deploys)
![Dependencies](https://david-dm.org/zapify-ui/zapify.svg)
[![All Contributors](img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

## Installation
``` npm install zapify-ui```

## Basic Usage
In the following example, you can see how to import ```ZapBar``` component
### With default Props

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {ZapBar} from 'zapify-ui';

ReactDOM.render(
  <ZapBar />,
  document.getElementById('app')
);
```

### with custom Props

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {ZapBar} from 'zapify-ui';
ReactDOM.render(
    <ZapBar
      color="#f0f0f0"
      linkColor="#692478"
      links={[
        { name: "Link 1", url: "www.piyushmehta.com" },
        { name: "Link 2", url: "www.piyushmehta.com" }
      ]}
      logoColor="#be1e6b"
      title="Brand Name"
    />,
  document.getElementById('app')
);
```

## Contributing
You are more than welcome to make contributions to the project! See the  [CONTRIBUTING.md](https://github.com/zapify-ui/zapify/blob/master/CONTRIBUTING.md).

## License
[MIT](http://opensource.org/licenses/MIT)

### Made with ❤️ by @is124 @vinaybiradar1717 @piyush97 for React Community 👨🏻‍💻👩🏻‍💻
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/vinaybiradar1717"><img src="https://avatars2.githubusercontent.com/u/46494289?v=4" width="100px;" alt="Vinay Biradar"/><br /><sub><b>Vinay Biradar</b></sub></a><br /><a href="https://github.com/zapify-ui/zapify/commits?author=vinaybiradar1717" title="Code">💻</a> <a href="#design-vinaybiradar1717" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/is124"><img src="https://avatars2.githubusercontent.com/u/51227848?v=4" width="100px;" alt="Tilak"/><br /><sub><b>Tilak</b></sub></a><br /><a href="https://github.com/zapify-ui/zapify/commits?author=is124" title="Code">💻</a> <a href="#design-is124" title="Design">🎨</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
