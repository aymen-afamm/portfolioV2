import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Portfolio palette
        ink: '#101214',
        panel: '#181B1E',
        surface: '#202428',
        paper: '#F2F0EA',
        fog: '#A5A6A3',
        brass: {
          DEFAULT: '#B9A47C',
          soft: '#CDB98E',
          muted: '#8A7A5A',
        },
        // shadcn/ui tokens
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // DOMFIX identity
        domfix: {
          lime: '#CDF200',
          bg: '#121212',
          surface: '#1A1A1A',
          muted: '#2A2A2A',
        },
        // PowerTracker identity
        pt: {
          primary: '#2DA8C9',
          dark: '#1B4F72',
          light: '#4FC3E8',
          bg: '#F5F7FA',
          accent: '#E67E22',
          success: '#27AE60',
          gold: '#F7C948',
        },
        // EduTech kept for redirect pages only
        'edutech-blue': '#4A7DFF',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease both',
        'fade-in': 'fade-in 0.4s ease both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
