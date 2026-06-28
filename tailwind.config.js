/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b0bac9',
          400: '#8593aa',
          500: '#677591',
          600: '#525d76',
          700: '#434c60',
          800: '#3a4151',
          900: '#0b1020',
          950: '#060912',
        },
        brand: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd3ff',
          300: '#8eb6ff',
          400: '#598dff',
          500: '#3366ff',
          600: '#1f47f5',
          700: '#1735e1',
          800: '#192db6',
          900: '#1a2c8f',
          950: '#141d57',
        },
        accent: {
          50: '#ecfdff',
          100: '#cff7fe',
          200: '#a3eefc',
          300: '#67e0f9',
          400: '#22c7ee',
          500: '#06a8d4',
          600: '#0886b3',
          700: '#0e6c91',
          800: '#155a78',
          900: '#164b65',
          950: '#083345',
        },
        mint: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(51,102,255,0.25), transparent 70%)',
        'brand-gradient': 'linear-gradient(135deg, #3366ff 0%, #06a8d4 100%)',
        'aurora':
          'radial-gradient(ellipse 60% 50% at 20% 10%, rgba(51,102,255,0.18), transparent 60%), radial-gradient(ellipse 50% 50% at 80% 20%, rgba(6,168,212,0.16), transparent 60%), radial-gradient(ellipse 60% 50% at 50% 90%, rgba(124,58,237,0.10), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(51,102,255,0.18), 0 20px 60px -15px rgba(51,102,255,0.35)',
        'glow-cyan': '0 0 0 1px rgba(6,168,212,0.18), 0 20px 60px -15px rgba(6,168,212,0.35)',
        card: '0 1px 2px rgba(16,24,40,0.06), 0 12px 32px -12px rgba(16,24,40,0.12)',
        'card-dark': '0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 50px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'bar-grow': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'dash-flow': {
          '0%': { strokeDashoffset: '40' },
          '100%': { strokeDashoffset: '0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'border-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'counter': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'typing': {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '100%' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(80px) rotate(-360deg)' },
        },
        'orbit-reverse': {
          '0%': { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(60px) rotate(360deg)' },
        },
        'wave': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        'number-roll': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        marquee: 'marquee 32s linear infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
        'bar-grow': 'bar-grow 1.2s cubic-bezier(0.22,1,0.36,1) both',
        'dash-flow': 'dash-flow 1.2s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'border-flow': 'border-flow 3s ease infinite',
        'counter': 'counter 0.5s ease-out both',
        'typing': 'typing 3s steps(40, end) infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'orbit': 'orbit 12s linear infinite',
        'orbit-reverse': 'orbit-reverse 10s linear infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'scan-line': 'scan-line 4s linear infinite',
        'number-roll': 'number-roll 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'draw-line': 'draw-line 2s ease-out both',
        'breathe': 'breathe 4s ease-in-out infinite',
        'shake': 'shake 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
