import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // @ts-ignore - babel option is supported but not in type definitions
      babel: {
        plugins: [
          [
            '@emotion/babel-plugin',
            {
              autoLabel: 'dev-only',
              labelFormat: '[local]',
              cssProp: true,
            },
          ],
        ],
      },
    }),
    tailwindcss(),
  ],
})
