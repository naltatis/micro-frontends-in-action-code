# Shared Vendor Library

## Generate static vendor bundle

Install dependencies

```
npm install
```

Build static vendor bundle

```
npm run build
```

The name of the generated file is determined by the installed React major version (`static/react_16.js`).

## Change React version

Install React in another version

```
npm install react@15 react-dom@15
```

Build again

```
npm run build
```

It will create a bundle with the React v15 code as `static/react_15.js`.
