import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/test-task-alfa/'
// });

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/'
  };

  if (command !== 'serve') {
    config.base = '/test-task-alfa/';
  }

  return config;
});
