<p align="center">
  <a href="https://nextjs.org">
    <img src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png" height="128">
    <h1 align="center">Debug Next.js</h1>
  </a>
</p>

<p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/next">
    <img alt="" src="https://img.shields.io/npm/v/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://github.com/vercel/next.js/blob/canary/license.md">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="Join the community on GitHub" href="https://github.com/vercel/next.js/discussions">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=Next.js&labelColor=000000&logoWidth=20">
  </a>
</p>

## Preface

We all know Next.js is coding based on [Lerna](https://github.com/lerna/lerna). In order to facilitate debugging the source code, Recommend this tool

## Useage

```Makefile
# Start dev server with lerna run dev --stream --parallel
yarn dev
# Monitor the file changes under packages to notify the process to restart
yarn tw
# One touch start with yarn dev & yarn tw
yarn dn
```

## Setup

```Makefile
/* packages.json */
{
"workspaces": [
    "packages/*",
    "demos/*"
  ],
}
lerna bootstrap
npx create-next-app `project-name`
lerna add next --scope=`project-name`
```

## Expect

Extract into integration tool in `dn` ...
