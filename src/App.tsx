import { useEffect, useState, type ReactNode } from 'react';
import type { Category, Dish } from './domain';
import { seedCategories, seedDishes } from './domain';
import { clearData, loadData, saveData } from './lib/persist';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';

type RouteName = 'home' | 'admin';

function getRouteFromHash(hash: string): RouteName {
  const normalized = hash.replace(/^#/, '').trim();
  if (normalized === '/admin' || normalized === 'admin') return 'admin';
  return 'home';
}

function createId(prefix: string) {
  const now = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 10);
  return `${prefix}-${now}-${rand}`;
}

function normalizePrice(input: string) {
  const trimmed = input.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('¥')) return trimmed;
  if (/^\d+(\.\d{1,2})?$/.test(trimmed)) return `¥${trimmed}`;
  return trimmed;
}

function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-950 text-stone-50">
      <div className="pointer-events-none absolute inset-0 bg-aurora opacity-90" />
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />
      <main className="relative z-10">{children}</main>
    </div>
  );
}

function App() {
  const [route, setRoute] = useState<RouteName>(() => getRouteFromHash(window.location.hash));

  const [categories, setCategories] = useState<Category[]>(() => loadData()?.categories ?? seedCategories);
  const [dishes, setDishes] = useState<Dish[]>(() => loadData()?.dishes ?? seedDishes);

  useEffect(() => {
    function handleHashChange() {
      setRoute(getRouteFromHash(window.location.hash));
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    saveData({ categories, dishes });
  }, [categories, dishes]);

  function handleAddCategory(payload: { name: string; desc: string }) {
    const name = payload.name.trim();
    const desc = payload.desc.trim();

    if (!name) return { ok: false as const, message: '请填写分类名称' };
    if (!desc) return { ok: false as const, message: '请填写分类描述' };
    if (categories.some((c) => c.name.trim() === name)) {
      return { ok: false as const, message: '分类名称已存在' };
    }

    setCategories((prev) => [...prev, { id: createId('cat'), name, desc }]);
    return { ok: true as const };
  }

  function handleAddDish(payload: {
    name: string;
    price: string;
    tag: string;
    desc: string;
    categoryId?: string;
  }) {
    const name = payload.name.trim();
    const tag = payload.tag.trim();
    const desc = payload.desc.trim();
    const price = normalizePrice(payload.price);
    const categoryId = payload.categoryId?.trim();

    if (!name) return { ok: false as const, message: '请填写菜品名称' };
    if (!price) return { ok: false as const, message: '请填写菜品价格' };
    if (!tag) return { ok: false as const, message: '请填写菜品标签' };
    if (!desc) return { ok: false as const, message: '请填写菜品描述' };
    if (dishes.some((d) => d.name.trim() === name)) {
      return { ok: false as const, message: '菜品名称已存在' };
    }
    if (categoryId && !categories.some((c) => c.id === categoryId)) {
      return { ok: false as const, message: '所选分类不存在（可能已被重置）' };
    }

    setDishes((prev) => [
      ...prev,
      {
        id: createId('dish'),
        name,
        price,
        tag,
        desc,
        categoryId: categoryId || undefined,
      },
    ]);
    return { ok: true as const };
  }

  function handleResetData() {
    clearData();
    setCategories(seedCategories);
    setDishes(seedDishes);
    window.location.hash = '#/';
    setRoute('home');
  }

  return (
    <AppShell>
      {route === 'admin' ? (
        <AdminPage
          categories={categories}
          dishes={dishes}
          onAddCategory={handleAddCategory}
          onAddDish={handleAddDish}
          onResetData={handleResetData}
        />
      ) : (
        <HomePage categories={categories} dishes={dishes} />
      )}
    </AppShell>
  );
}

export default App;
