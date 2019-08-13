<h1 align="center">Zapify</h1>
<p align="center"><img src="https://i.ibb.co/X23NHw6/a.png" height="100px" alt="a" border="0"></p>
<h2 align="center">🚀 Blazing fast react Ui library with Hooks 🚀</h2>

<h3 align="center">Status Badges</h3>

[![Build Status](https://travis-ci.org/zapify-ui/zapify.svg?branch=Staging)](https://travis-ci.org/zapify-ui/zapify)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/zapify-ui/zapify/blob/Staging/LICENSE) 
[![npm version](https://badge.fury.io/js/zapify-ui.svg)](https://badge.fury.io/js/zapify-ui)
[![Netlify Status](https://api.netlify.com/api/v1/badges/71ceb923-c95d-413d-9519-30c7931fc134/deploy-status)](https://app.netlify.com/sites/zapify/deploys)

## Installation
``` npm install zapify-ui```

## Basic Usage
In the following example, you can see how to import ```ZapBar``` component
### With default Props

```html
<ZapBar />
```

### with custom Props

```html
    <ZapBar
      color="#f0f0f0"
      linkColor="#692478"
      links={[
        { name: "Link 1", url: "www.piyushmehta.com" },
        { name: "Link 2", url: "www.piyushmehta.com" }
      ]}
      logoColor="#be1e6b"
      title="Brand Name"
    />
```
