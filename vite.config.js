import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'




export default defineConfig({
    plugins: [
        tailwindcss({
            
            theme: {
                extend: {
                    
                    keyframes: {
                        'fade-in': {
                            '0%': { opacity: 0 },
                            '100%': { opacity: 1 }
                        }
                    },
                    animation: {
                        'fade-in': 'fade-in 1s ease-in forwards'
                    }
                }
            }
        }),react()
    ]
});