const categories = [
  { name: '现炒热菜', desc: '锅气足、出餐快。' },
  { name: '轻食沙拉', desc: '高蛋白低负担。' },
  { name: '招牌小吃', desc: '适合加购和分享。' },
  { name: '风味饮品', desc: '清爽解腻。' },
] as const;

const dishes = [
  {
    name: '炙烤鸡腿能量碗',
    price: '¥36',
    tag: '推荐',
    desc: '鸡腿排 + 温泉蛋 + 时蔬。',
  },
  {
    name: '香辣牛肉拌饭',
    price: '¥29',
    tag: '热销',
    desc: '辣度可调，口味更大众。',
  },
  {
    name: '海盐柠檬气泡饮',
    price: '¥12',
    tag: '加购',
    desc: '低糖清爽，适合配主食。',
  },
] as const;

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="font-semibold tracking-wide">食刻 ORDERING</div>
          <nav className="hidden gap-6 text-sm text-zinc-300 sm:flex">
            <a className="hover:text-white" href="#menu">
              菜单
            </a>
            <a className="hover:text-white" href="#cta">
              下单
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <section className="py-10">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">今天想吃点什么？</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300">
            这是一个更简洁的点餐首页：给你几个分类入口 + 少量招牌推荐，直接开始下单。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-orange-400"
              href="#cta"
            >
              立即下单
            </a>
            <a
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              href="#menu"
            >
              先看菜单
            </a>
          </div>
        </section>

        <section id="menu" className="border-t border-white/10 py-10">
          <h2 className="text-xl font-semibold">菜单分类</h2>
          <p className="mt-2 text-sm text-zinc-300">先选一个方向，再选具体菜品。</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {categories.map((item) => (
              <article key={item.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="text-base font-semibold">{item.name}</div>
                <div className="mt-2 text-sm text-zinc-300">{item.desc}</div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">招牌推荐</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {dishes.map((dish) => (
                <article key={dish.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs text-orange-300">{dish.tag}</div>
                  <div className="mt-2 text-base font-semibold">{dish.name}</div>
                  <div className="mt-2 text-sm text-zinc-300">{dish.desc}</div>
                  <div className="mt-4 text-sm font-semibold text-white">{dish.price}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="border-t border-white/10 py-10">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">准备好了就下单</h2>
              <p className="mt-2 text-sm text-zinc-300">下一步可以接入菜单页、购物车、下单表单。</p>
            </div>
            <a
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-orange-400 sm:mt-0"
              href="#"
            >
              开始点餐
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-6 text-xs text-zinc-400">
          Demo Home · React + TS + Vite + Tailwind
        </div>
      </footer>
    </div>
  );
}

export default App;
