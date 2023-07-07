#!/usr/bin/env node --no-warnings --experimental-specifier-resolution=node --loader ts-node/esm

import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

async function startServer() {
  const root = fileURLToPath(new URL('.', import.meta.url));
  const server = await createServer({
    configFile: join(root, './vite.config.ts'),
    root,
  });

  await server.listen();
  server.printUrls();
}

startServer();
