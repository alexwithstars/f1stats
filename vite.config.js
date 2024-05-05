import { defineConfig } from 'vite'
import { BASE_URL } from './src/misc/constants'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: `${BASE_URL}/`
})
