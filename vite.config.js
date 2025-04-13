import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  root: 'src', // 💡 Указываем, что src — корень
  build: {
    outDir: '../dist', // 💡 Выходной каталог на уровень выше
  },
  server: {
    port: 3000,
    open: true,
  },
  plugins: [injectHTML()],
});
