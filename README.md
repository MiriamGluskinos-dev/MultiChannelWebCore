# Multi-channel-core

This repository contains the **core logic and shared utilities** for the Multi-channel system.  
It is designed to be consumed by child applications (such as the Multi-channel App).

It can run **as a standalone app** for development and testing purposes.


## 🚀 Running locally

You can run this project directly to test your changes (see examples, in `src/playground/App.tsx`):

If you want to install in local env, run:

```bash
npm run install:local
npm run dev
```

If you want to install from remote run:

```bash
npm run install:remote
npm run dev
```

## Installation (in child projects)

To install this package from the remote registry, run:

```bash
npm install multi-channel-core --userconfig .npmrc.remote --force
```

If you’re working in an offline environment, use the local configuration instead:

```bash
npm install multi-channel-core --userconfig .npmrc.local --force
```


Enjoy :) 