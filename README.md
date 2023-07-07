# Vite 4.0.0 bug

See https://github.com/vitejs/vite/issues/13730

- Use pnpm 8 and latest Node.js 20.
- `pnpm install`
- `ui/start.tsx`
- Open `http://localhost:5173` and see "Invalid URL" in the console.
- Upgrade to vite 4.0.1 in `package.json` and see the error go away.
- Opening `http://localhost:5173` should print `It works` to the browser devtools.
