<p align="center"><img src="https://lh3.googleusercontent.com/jq_CHT41OENz4e7SMdLSdgHavhD5JKpJHYagvJyx4uqMgq24o63Fatt_iJViaBfjHzFTuMtlEq1fD_LMVhVMR9HV1LheXYgqADZMgLVSLybSFjB9q1o2m5Ei6RGFMJLeF5mE9nlrfMA6mXxpn0ExZYF0XeC5EsgVfeNC6QErCWEOFwmGEilfY8QAUR2-eHWgyLA0vKteHf6a0bpfk5VKem_tbdjSQ1iV5qlh98518iZ6P3Exghkb-OyJP4b0YX_LmAF5loOSSImVLvIjF-0R0jY2By070sC1xyr2RrFdu9g4cLDpfQCsqkTO_oV3-lX-zZbUqO1mobqs9Xr0R7NhXI-_JBBV5vYe_Ct8bfdQKMEsUpbjnDAAZIrlFULyffAnO7gm3FyZeLzdikTQLFaQItKpvlN4k6NHFa3_aZen9G-_jLvrAxzV9aKOjEdjMJ_rnPeTcvuOUTLgh_VkXDsfVjfl77E9if7Wc6gqrGrLgJZJHjai5IfzlVJ8td8d_wEawyIToedsKIB0RfAwLpC1--Nx71ejf_kaszzFVT49pzEyyqnDvOI-GDiALc3ca77VZV5DDy5wVpHjwPmYZ0EEJb3JdCfHjBvRr9E-HkZGUwY24FAzPrr3L3-smkY-tw=w2560-h978" height="100px" alt="a" border="0"></p>
<h2 align="center">🚀 Blazing fast react Ui library with Hooks 🚀</h2>

<h3 align="center">Status Badges</h3>

[![Build Status](https://travis-ci.org/zapify-ui/zapify.svg?branch=Staging)](https://travis-ci.org/zapify-ui/zapify)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/zapify-ui/zapify/blob/Staging/LICENSE) 
[![npm version](https://badge.fury.io/js/zapify-ui.svg)](https://badge.fury.io/js/zapify-ui)
[![Netlify Status](https://api.netlify.com/api/v1/badges/71ceb923-c95d-413d-9519-30c7931fc134/deploy-status)](https://app.netlify.com/sites/zapify/deploys)
![Dependencies](https://david-dm.org/zapify-ui/zapify.svg)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)
[![GitHub stars](https://img.shields.io/github/stars/zapify-ui/zapify)](https://github.com/zapify-ui/zapify/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/zapify-ui/zapify)](https://github.com/zapify-ui/zapify/network)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://zapify-ui.github.io/zapify)
[![Maintainability](https://api.codeclimate.com/v1/badges/c42c480d78c0db5ca8e2/maintainability)](https://codeclimate.com/github/zapify-ui/zapify/maintainability)

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/is124"><img src="https://avatars2.githubusercontent.com/u/51227848?v=4" width="100px;" alt="Tilak"/><br /><sub><b>Tilak</b></sub></a><br /><a href="https://github.com/zapify-ui/zapify/commits?author=is124" title="Code">💻</a> <a href="#design-is124" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/vinaybiradar1717"><img src="https://avatars2.githubusercontent.com/u/46494289?v=4" width="100px;" alt="Vinay Biradar"/><br /><sub><b>Vinay Biradar</b></sub></a><br /><a href="https://github.com/zapify-ui/zapify/commits?author=vinaybiradar1717" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sawood14012"><img src="https://avatars1.githubusercontent.com/u/18240985?v=4" width="100px;" alt="Meer Sawood"/><br /><sub><b>Meer Sawood</b></sub></a><br /><a href="#userTesting-sawood14012" title="User Testing">📓</a></td>
    <td align="center"><a href="https://github.com/harshraj24"><img src="https://avatars0.githubusercontent.com/u/54536823?v=4" width="100px;" alt="harshraj24"/><br /><sub><b>harshraj24</b></sub></a><br /><a href="#design-harshraj24" title="Design">🎨</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License
[MIT](http://opensource.org/licenses/MIT)
