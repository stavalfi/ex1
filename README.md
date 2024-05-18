exmaple for a typescript project such that each "typescript project (reference)" has different compilation options.

the main goal is to incrementally migrate to strict mode in big projects.

build: `npx tsc --build --watch`
run service: `npx ts-node -r tsconfig-paths/register service/src/index.ts`