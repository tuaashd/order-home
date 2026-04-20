import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accentSoft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
        gold: 'rgb(var(--color-gold) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
      },
      boxShadow: {
        halo: '0 30px 120px rgba(255, 123, 0, 0.24)',
      },
      backgroundImage: {
        aurora:
          'radial-gradient(circle at 20% 0%, rgba(255, 131, 44, 0.32), transparent 30%), radial-gradient(circle at 100% 10%, rgba(255, 213, 128, 0.16), transparent 28%), radial-gradient(circle at 50% 100%, rgba(255, 87, 34, 0.16), transparent 30%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
