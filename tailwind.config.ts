import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: "media",
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero':
                    'url("/images/gradient.jpg")',
            },
            colors:{
                primary:"#545454",
                secondary:"#eeeeee",
                'primary-color': "#48BED4",
                'secondary-color':"#EC1C4E",
                purple:"#943fd7"
            },
        },
    },
    plugins: [],
}
export default config
