import {defineConfig} from 'vite'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@landing': path.resolve(__dirname, 'src/'),
            '@public': path.resolve(__dirname, 'public/'),
        }
    },
})
