# Subdomain

Middleware for Dylan which enables distinct subdomain subapps.

## Install

`npm install @dylan/subdomain`

## Usage

``` js
const dylan = require('dylan');
const subdomain = require('@dylan/subdomain');
const app = dylan();

app.use(subdomain({
  name: 'docs',
  subApp: require('./subdomains/docs/app'),
  app
}));
```
