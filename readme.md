# Research

## How to connect from react-native to xPortal

This is a research project and I'm trying to connect from react native to xPortal

[wallet connect Auth / Dapp Usage / example](https://docs.walletconnect.com/2.0/javascript/auth/dapp-usage)

## research log
[fix for missing TextEncoder](https://github.com/hapijs/joi/issues/2141#issuecomment-546440380)
```bash
npm install text-encoding-polyfill
npm install @hapi/joi
```
and then
```javascript
import 'text-encoding-polyfill'
import Joi from '@hapi/joi'
```

