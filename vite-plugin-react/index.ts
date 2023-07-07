import type { Plugin, PluginOption } from 'vite';

export default function viteReact(): PluginOption[] {
  const viteBabel: Plugin = {
    name: 'vite:react-babel',
    enforce: 'pre',
    async transform(code, id) {
      await loadPlugin('react-refresh/babel');
      return { code };
    },
  };

  return [viteBabel];
}

const loadedPlugin = new Map<string, any>();
function loadPlugin(path: string): any {
  const cached = loadedPlugin.get(path);
  if (cached) return cached;
  const promise = import(path).then((module) => {
    const value = module.default || module;
    loadedPlugin.set(path, value);
    return value;
  });
  loadedPlugin.set(path, promise);
  return promise;
}
