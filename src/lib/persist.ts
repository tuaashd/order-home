import type { Category, Dish } from '../domain';

const STORAGE_KEY = 'order-home:data:v1';

type PersistedData = {
  categories: Category[];
  dishes: Dish[];
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isCategory(value: unknown): value is Category {
  if (!isRecord(value)) return false;
  return typeof value.id === 'string' && typeof value.name === 'string' && typeof value.desc === 'string';
}

function isDish(value: unknown): value is Dish {
  if (!isRecord(value)) return false;
  const categoryOk = value.categoryId === undefined || typeof value.categoryId === 'string';
  return (
    typeof value.id === 'string' &&
    typeof value.name === 'string' &&
    typeof value.price === 'string' &&
    typeof value.tag === 'string' &&
    typeof value.desc === 'string' &&
    categoryOk
  );
}

export function loadData(): PersistedData | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (!isRecord(parsed)) return null;
    const categoriesRaw = parsed.categories;
    const dishesRaw = parsed.dishes;
    if (!Array.isArray(categoriesRaw) || !Array.isArray(dishesRaw)) return null;
    const categories = categoriesRaw.filter(isCategory);
    const dishes = dishesRaw.filter(isDish);
    return { categories, dishes };
  } catch {
    return null;
  }
}

export function saveData(data: PersistedData) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore quota / privacy mode errors
  }
}

export function clearData() {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

