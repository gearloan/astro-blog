import { useEffect, useState } from 'preact/hooks';

export default function ThemeToggle({ defaultDark = false }) {
  const [isDark, setIsDark] = useState(() =>
    typeof window !== 'undefined'
      ? document.documentElement.classList.contains('dark') || defaultDark
      : defaultDark
  );
  useEffect(() => {
    const saved = localStorage.getItem('theme');

    if (saved === 'dark' || (!saved && defaultDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (saved === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, [defaultDark]);

  const toggle = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button onClick={toggle} class="self-center px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200">
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
