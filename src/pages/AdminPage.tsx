import {
  useMemo,
  useState,
  type FormEvent,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from 'react';
import type { Category, Dish } from '../domain';

type AddResult = { ok: true } | { ok: false; message: string };

type Props = {
  categories: Category[];
  dishes: Dish[];
  onAddCategory: (payload: { name: string; desc: string }) => AddResult;
  onAddDish: (payload: {
    name: string;
    price: string;
    tag: string;
    desc: string;
    categoryId?: string;
  }) => AddResult;
  onResetData: () => void;
};

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label className="text-xs uppercase tracking-[0.28em] text-stone-400" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        'mt-3 w-full rounded-2xl border border-white/10 bg-stone-950/40 px-4 py-3 text-sm text-stone-50 outline-none',
        'placeholder:text-stone-500 focus:border-orange-300/40 focus:ring-2 focus:ring-orange-300/10',
        props.className ?? '',
      ].join(' ')}
    />
  );
}

function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        'mt-3 w-full resize-none rounded-2xl border border-white/10 bg-stone-950/40 px-4 py-3 text-sm text-stone-50 outline-none',
        'placeholder:text-stone-500 focus:border-orange-300/40 focus:ring-2 focus:ring-orange-300/10',
        props.className ?? '',
      ].join(' ')}
    />
  );
}

function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={[
        'mt-3 w-full rounded-2xl border border-white/10 bg-stone-950/40 px-4 py-3 text-sm text-stone-50 outline-none',
        'focus:border-orange-300/40 focus:ring-2 focus:ring-orange-300/10',
        props.className ?? '',
      ].join(' ')}
    />
  );
}

export default function AdminPage({ categories, dishes, onAddCategory, onAddDish, onResetData }: Props) {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDesc, setCategoryDesc] = useState('');
  const [categoryMessage, setCategoryMessage] = useState<string | null>(null);

  const [dishName, setDishName] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [dishTag, setDishTag] = useState('');
  const [dishDesc, setDishDesc] = useState('');
  const [dishCategoryId, setDishCategoryId] = useState<string>('');
  const [dishMessage, setDishMessage] = useState<string | null>(null);

  const categoryNameById = useMemo(() => {
    return new Map(categories.map((c) => [c.id, c.name]));
  }, [categories]);

  const sortedCategories = useMemo(() => [...categories].reverse(), [categories]);
  const sortedDishes = useMemo(() => [...dishes].reverse(), [dishes]);

  function handleCreateCategory(event: FormEvent) {
    event.preventDefault();
    setCategoryMessage(null);

    const result = onAddCategory({ name: categoryName, desc: categoryDesc });
    if (!result.ok) {
      setCategoryMessage(result.message);
      return;
    }

    setCategoryName('');
    setCategoryDesc('');
    setCategoryMessage('分类已添加');
  }

  function handleCreateDish(event: FormEvent) {
    event.preventDefault();
    setDishMessage(null);

    const categoryId = dishCategoryId.trim() ? dishCategoryId : undefined;
    const result = onAddDish({
      name: dishName,
      price: dishPrice,
      tag: dishTag,
      desc: dishDesc,
      categoryId,
    });
    if (!result.ok) {
      setDishMessage(result.message);
      return;
    }

    setDishName('');
    setDishPrice('');
    setDishTag('');
    setDishDesc('');
    setDishCategoryId('');
    setDishMessage('菜品已添加');
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-6 sm:px-8 lg:px-10">
      <header className="fade-up flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.45em] text-orange-200/80">SHIKE ADMIN</p>
          <h1 className="mt-4 font-display text-5xl text-white sm:text-6xl">管理页面</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300">
            这里用于维护「菜品分类」与「菜品」的基础数据（本地存储：刷新后仍保留）。
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            href="#/"
          >
            返回首页
          </a>
          <button
            className="inline-flex items-center justify-center rounded-full border border-orange-300/25 bg-orange-400/10 px-6 py-3 text-sm font-semibold text-orange-100 transition hover:border-orange-300/40 hover:bg-orange-400/15"
            type="button"
            onClick={() => {
              if (window.confirm('确定恢复默认数据吗？当前新增内容会被清空。')) {
                onResetData();
                setCategoryMessage(null);
                setDishMessage(null);
              }
            }}
          >
            恢复默认数据
          </button>
        </div>
      </header>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-7 sm:p-9">
          <p className="section-kicker">新增分类</p>
          <h2 className="mt-5 font-display text-4xl text-white">添加菜品分类</h2>

          <form className="mt-8 space-y-6" onSubmit={handleCreateCategory}>
            <div>
              <FieldLabel htmlFor="categoryName">分类名称</FieldLabel>
              <Input
                id="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="例如：现炒热菜"
                autoComplete="off"
              />
            </div>

            <div>
              <FieldLabel htmlFor="categoryDesc">分类描述</FieldLabel>
              <Textarea
                id="categoryDesc"
                value={categoryDesc}
                onChange={(e) => setCategoryDesc(e.target.value)}
                placeholder="一句话描述分类特点"
                rows={4}
              />
            </div>

            {categoryMessage ? <p className="text-sm text-orange-200">{categoryMessage}</p> : null}

            <button
              className="inline-flex w-full items-center justify-center rounded-full bg-orange-400 px-7 py-4 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:bg-orange-300"
              type="submit"
            >
              添加分类
            </button>
          </form>
        </article>

        <article className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-7 sm:p-9">
          <p className="section-kicker">新增菜品</p>
          <h2 className="mt-5 font-display text-4xl text-white">添加菜品</h2>

          <form className="mt-8 space-y-6" onSubmit={handleCreateDish}>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <FieldLabel htmlFor="dishName">菜品名称</FieldLabel>
                <Input
                  id="dishName"
                  value={dishName}
                  onChange={(e) => setDishName(e.target.value)}
                  placeholder="例如：香辣牛肉拌饭"
                  autoComplete="off"
                />
              </div>
              <div>
                <FieldLabel htmlFor="dishPrice">价格</FieldLabel>
                <Input
                  id="dishPrice"
                  value={dishPrice}
                  onChange={(e) => setDishPrice(e.target.value)}
                  placeholder="例如：36 或 ¥36"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <FieldLabel htmlFor="dishTag">标签</FieldLabel>
                <Input
                  id="dishTag"
                  value={dishTag}
                  onChange={(e) => setDishTag(e.target.value)}
                  placeholder="例如：主推 / 热销 / 加购"
                  autoComplete="off"
                />
              </div>
              <div>
                <FieldLabel htmlFor="dishCategory">所属分类</FieldLabel>
                <Select
                  id="dishCategory"
                  value={dishCategoryId}
                  onChange={(e) => setDishCategoryId(e.target.value)}
                >
                  <option value="">不指定</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <FieldLabel htmlFor="dishDesc">描述</FieldLabel>
              <Textarea
                id="dishDesc"
                value={dishDesc}
                onChange={(e) => setDishDesc(e.target.value)}
                placeholder="一句话描述菜品亮点"
                rows={4}
              />
            </div>

            {dishMessage ? <p className="text-sm text-orange-200">{dishMessage}</p> : null}

            <button
              className="inline-flex w-full items-center justify-center rounded-full bg-orange-400 px-7 py-4 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:bg-orange-300"
              type="submit"
            >
              添加菜品
            </button>
          </form>
        </article>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2.5rem] border border-white/10 bg-stone-950/40 p-7 sm:p-9">
          <p className="section-kicker">当前分类</p>
          <h2 className="mt-5 font-display text-3xl text-white">
            分类列表 <span className="text-orange-300/90">({categories.length})</span>
          </h2>
          <div className="mt-8 space-y-4">
            {sortedCategories.map((cat) => (
              <div
                key={cat.id}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">ID · {cat.id}</p>
                <p className="mt-4 font-display text-2xl text-white">{cat.name}</p>
                <p className="mt-3 text-sm leading-7 text-stone-300">{cat.desc}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2.5rem] border border-white/10 bg-stone-950/40 p-7 sm:p-9">
          <p className="section-kicker">当前菜品</p>
          <h2 className="mt-5 font-display text-3xl text-white">
            菜品列表 <span className="text-orange-300/90">({dishes.length})</span>
          </h2>
          <div className="mt-8 space-y-4">
            {sortedDishes.map((dish) => (
              <div
                key={dish.id}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">ID · {dish.id}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <p className="font-display text-2xl text-white">{dish.name}</p>
                  <p className="text-sm font-semibold text-orange-300">{dish.price}</p>
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-orange-200">{dish.tag}</p>
                {dish.categoryId ? (
                  <p className="mt-3 text-sm text-stone-300">
                    分类：{categoryNameById.get(dish.categoryId) ?? dish.categoryId}
                  </p>
                ) : (
                  <p className="mt-3 text-sm text-stone-500">分类：未指定</p>
                )}
                <p className="mt-3 text-sm leading-7 text-stone-300">{dish.desc}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
