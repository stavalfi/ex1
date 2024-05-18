Exmaple for a typescript project such that each "typescript project (reference)" has different compilation options.

The main goal is to incrementally migrate to strict mode in big projects.

* build: `npx tsc --build --watch`
* run service: `npx ts-node -r tsconfig-paths/register service/src/index.ts`

### POC

libs/lib2 does not have strict mode so it won't fail to compile: `const z2:string = null` :)
service have strict mode enabled so it will fail to compile: `const y2:string = null` :)