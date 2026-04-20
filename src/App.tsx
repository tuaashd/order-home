const categories = [
  { name: '现炒热菜', desc: '锅气足、出餐快，适合午晚餐主食搭配。' },
  { name: '轻食沙拉', desc: '高蛋白低负担，办公室和健身餐优先。' },
  { name: '招牌小吃', desc: '炸物、卤味、甜辣口感，适合加购和分享。' },
  { name: '风味饮品', desc: '气泡、果茶、奶昔组合，提升客单价。' },
] as const;

const dishes = [
  {
    name: '炙烤鸡腿能量碗',
    price: '¥36',
    tag: '主推',
    desc: '黑椒鸡腿排、温泉蛋、藜麦饭与烤时蔬组合，兼顾饱腹感和层次。',
  },
  {
    name: '香辣牛肉拌饭',
    price: '¥29',
    tag: '热销',
    desc: '牛肉片与甜洋葱现场翻炒，辣度可调，适合大众口味。',
  },
  {
    name: '海盐柠檬气泡饮',
    price: '¥12',
    tag: '加购',
    desc: '低糖版本，搭配油脂型菜品更解腻，适合做套餐联动。',
  },
] as const;

const menuItems = [
  {
    name: '江西辣鸡翅',
    price: '¥26',
    spice: '重辣',
    intro: '先卤后炸再拌江西辣椒面，外皮焦香，越吃越上头。',
    tags: ['下饭', '招牌', '鸡翅爱好者'],
  },
  {
    name: '金针菇番茄肥牛',
    price: '¥32',
    spice: '微辣',
    intro: '番茄汤底酸甜开胃，肥牛和金针菇吸满汤汁，适合拌饭。',
    tags: ['汤汁浓', '酸香', '适合配米饭'],
  },
  {
    name: '泡椒藕带牛肉',
    price: '¥34',
    spice: '中辣',
    intro: '藕带清脆，牛肉嫩滑，泡椒带一点酸劲，口感很跳。',
    tags: ['脆爽', '现炒', '口味菜'],
  },
  {
    name: '小炒黄牛肉',
    price: '¥38',
    spice: '中辣',
    intro: '牛肉快炒保留嫩度，搭青椒和蒜香，锅气更足。',
    tags: ['热销', '锅气足', '经典湘味'],
  },
  {
    name: '青椒皮蛋擂茄子',
    price: '¥22',
    spice: '不辣',
    intro: '茄子绵软，皮蛋和青椒带出复合香气，适合搭配重口热菜。',
    tags: ['凉拌', '解腻', '家常'],
  },
  {
    name: '酸豆角肉末拌粉',
    price: '¥18',
    spice: '微辣',
    intro: '酸豆角开胃，肉末咸香，作为轻主食或加餐都合适。',
    tags: ['主食', '快出餐', '高复购'],
  },
] as const;

const steps = [
  { index: '01', title: '浏览菜单', desc: '首屏先给出招牌组合和分类入口，让用户 3 秒内找到想吃的方向。' },
  { index: '02', title: '加入购物车', desc: '规格、辣度、配菜信息保持短链路，减少反复跳转带来的流失。' },
  { index: '03', title: '确认订单', desc: '地址、配送时段、优惠信息集中展示，保证下单过程稳定清晰。' },
] as const;

const metrics = [
  { label: '平均出餐', value: '18 min' },
  { label: '今日爆款', value: '鸡腿能量碗' },
  { label: '配送半径', value: '3 km' },
] as const;

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-950 text-stone-50">
      <div className="pointer-events-none absolute inset-0 bg-aurora opacity-90" />
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />

      <main className="relative z-10">
        <section className="border-b border-white/10">
          <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-12 pt-6 sm:px-8 lg:px-10">
            <header className="fade-up flex items-center justify-between">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.45em] text-orange-200/80">
                  SHIKE ORDERING
                </p>
                <p className="mt-2 text-sm text-stone-300/80">
                  点餐首页概念稿 / React + TS + Vite + Tailwind CSS
                </p>
              </div>
              <nav className="hidden items-center gap-8 text-sm text-stone-300 md:flex">
                <a className="transition hover:text-white" href="#menu">
                  菜单
                </a>
                <a className="transition hover:text-white" href="#flow">
                  流程
                </a>
                <a className="transition hover:text-white" href="#cta">
                  立即点餐
                </a>
              </nav>
            </header>

            <div className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-8">
              <div className="max-w-2xl">
                <p className="fade-up inline-flex items-center rounded-full border border-orange-300/25 bg-orange-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-orange-100">
                  城市厨房 · 30 分钟内热送到手
                </p>
                <h1 className="fade-up-delay mt-8 font-display text-[3.4rem] uppercase leading-[0.92] text-white sm:text-[4.8rem] lg:text-[6.3rem]">
                  食刻
                  <span className="mt-2 block text-orange-300">现在就能开吃</span>
                </h1>
                <p className="fade-up-delay-2 mt-6 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
                  这是一张为点餐场景设计的首页首屏。它先强调品牌和招牌套餐，再把下单动作压缩到最短路径，
                  让用户快速决定吃什么，而不是在页面里迷路。
                </p>

                <div className="fade-up-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-orange-400 px-7 py-4 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:bg-orange-300"
                    href="#cta"
                  >
                    立即点餐
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                    href="#menu"
                  >
                    查看招牌组合
                  </a>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  {metrics.map((item, index) => (
                    <div
                      key={item.label}
                      className="fade-up rounded-3xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm"
                      style={{ animationDelay: `${index * 120 + 380}ms` }}
                    >
                      <p className="text-xs uppercase tracking-[0.28em] text-stone-400">{item.label}</p>
                      <p className="mt-3 font-display text-2xl text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex min-h-[560px] items-center justify-center">
                <div className="absolute left-3 top-16 hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-stone-300 md:block float-soft">
                  Fresh Daily
                </div>
                <div className="absolute bottom-16 right-0 hidden rounded-full border border-orange-300/20 bg-orange-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-orange-100 md:block float-soft-delay">
                  Fast Delivery
                </div>

                <div className="plate-shell relative aspect-square w-full max-w-[560px]">
                  <div className="absolute inset-[8%] rounded-full border border-white/10 bg-white/[0.03]" />
                  <div className="absolute inset-[17%] rounded-full border border-orange-200/20 bg-orange-500/10 shadow-halo blur-[1px]" />
                  <div className="absolute inset-[24%] rounded-full border border-white/20 bg-stone-950/85" />

                  <div className="absolute left-[16%] top-[20%] w-40 rounded-[2rem] border border-white/10 bg-gradient-to-br from-orange-300/90 to-orange-500/70 p-5 text-stone-950 shadow-2xl float-soft">
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-900/70">招牌主食</p>
                    <p className="mt-4 font-display text-3xl leading-none">鸡腿能量碗</p>
                    <p className="mt-3 text-sm leading-6 text-stone-900/80">现烤鸡腿排 + 温泉蛋 + 时蔬</p>
                    <p className="mt-6 text-sm font-semibold">¥36</p>
                  </div>

                  <div className="absolute right-[12%] top-[28%] w-36 rounded-[1.75rem] border border-white/10 bg-stone-900/90 p-5 text-white backdrop-blur-xl float-soft-delay">
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-400">饮品加购</p>
                    <p className="mt-4 font-display text-2xl">海盐柠檬</p>
                    <p className="mt-3 text-sm text-stone-300">低糖、清爽、气泡感强</p>
                    <p className="mt-5 text-sm text-orange-300">套餐立减 ¥4</p>
                  </div>

                  <div className="absolute bottom-[18%] left-[18%] right-[18%] rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-stone-400">今日推荐套餐</p>
                        <p className="mt-3 font-display text-3xl text-white">双人轻享餐</p>
                      </div>
                      <div className="rounded-full bg-orange-400 px-4 py-2 text-sm font-semibold text-stone-950">
                        ¥68
                      </div>
                    </div>
                    <div className="mt-5 h-px bg-white/10" />
                    <div className="mt-5 flex items-center justify-between text-sm text-stone-300">
                      <span>主食 x2</span>
                      <span>小吃 x1</span>
                      <span>饮品 x2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="section-kicker">菜单结构</p>
                <h2 className="section-title mt-5">先给方向，再给选择。</h2>
                <p className="section-copy mt-6">
                  点餐首页不需要一次塞满全部商品。更有效的做法是把用户决策拆成几种明确路径，让“吃什么”先被决定，再进入具体商品。
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {categories.map((item) => (
                  <article
                    key={item.name}
                    className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300/30 hover:bg-orange-300/[0.07]"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Category</p>
                    <h3 className="mt-6 font-display text-3xl text-white">{item.name}</h3>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-stone-300">{item.desc}</p>
                    <div className="mt-8 h-px bg-white/10 transition group-hover:bg-orange-200/30" />
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="section-kicker">菜单列表</p>
                <h2 className="section-title mt-5">把用户真正会点的菜，直接摆出来。</h2>
                <p className="section-copy mt-6">
                  每道菜展示名字、简介、辣度和价格，用户扫一眼就能判断口味，不需要点进去才知道适不适合自己。
                </p>
              </div>

              <div className="grid gap-4">
                {menuItems.map((item) => (
                  <article
                    key={item.name}
                    className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:border-orange-300/30 hover:bg-white/[0.06]"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-2xl text-white">{item.name}</h3>
                          <span className="rounded-full border border-orange-300/25 bg-orange-400/10 px-3 py-1 text-xs text-orange-100">
                            辣度 · {item.spice}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-stone-300">{item.intro}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="shrink-0 rounded-2xl bg-stone-900/80 px-4 py-3 text-right">
                        <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Price</p>
                        <p className="mt-2 font-display text-2xl text-orange-300">{item.price}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-orange-400/15 via-orange-200/5 to-transparent p-8 sm:p-10">
                <p className="section-kicker">招牌组合</p>
                <h2 className="section-title mt-5 max-w-lg">
                  用一个强主推，拉住首屏转化。
                </h2>
                <p className="section-copy mt-6 max-w-xl">
                  对点餐首页来说，用户最容易接受的是“已经帮你选好”的套餐方案。首屏主推商品只要足够清晰，就能显著缩短决策时间。
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {dishes.map((dish) => (
                    <div
                      key={dish.name}
                      className="rounded-[1.8rem] border border-white/10 bg-stone-950/55 p-5 backdrop-blur-sm"
                    >
                      <p className="text-xs uppercase tracking-[0.28em] text-orange-200">{dish.tag}</p>
                      <h3 className="mt-5 font-display text-2xl leading-tight text-white">{dish.name}</h3>
                      <p className="mt-4 text-sm leading-7 text-stone-300">{dish.desc}</p>
                      <p className="mt-6 text-lg font-semibold text-orange-300">{dish.price}</p>
                    </div>
                  ))}
                </div>
              </article>

              <aside className="flex flex-col justify-between rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
                <div>
                  <p className="section-kicker">运营提示</p>
                  <h3 className="mt-5 font-display text-4xl text-white">首页不是目录，而是引导页。</h3>
                  <p className="mt-6 text-sm leading-7 text-stone-300">
                    第一屏负责建立食欲和信任，第二屏负责给出明确分类，第三屏才去承接更细的 SKU 选择。这种结构更适合外卖与堂食预点。
                  </p>
                </div>

                <div className="mt-10 rounded-[2rem] border border-dashed border-orange-300/25 bg-orange-300/[0.06] p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-orange-200">Conversion Focus</p>
                  <p className="mt-4 font-display text-2xl text-white">主推套餐 / 热销单品 / 限时加购</p>
                  <p className="mt-4 text-sm leading-7 text-stone-300">
                    三层信息足够支撑首屏转化，不需要把所有商品平铺上来。
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="flow" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="section-kicker">下单流程</p>
                <h2 className="section-title mt-5">路径越短，订单越稳。</h2>
                <p className="section-copy mt-6">
                  首页展示策略最终要服务于下单效率，所以流程信息需要直给，不绕弯，不让用户在菜单和购物车之间来回跳。
                </p>
              </div>

              <div className="space-y-4">
                {steps.map((step) => (
                  <article
                    key={step.index}
                    className="group grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-orange-300/30 hover:bg-white/[0.05] sm:grid-cols-[110px_1fr]"
                  >
                    <div className="font-display text-5xl text-white/80 transition group-hover:text-orange-300">
                      {step.index}
                    </div>
                    <div>
                      <h3 className="font-display text-3xl text-white">{step.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">{step.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cta">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
            <div className="rounded-[2.8rem] border border-white/10 bg-gradient-to-r from-orange-400/18 via-orange-200/6 to-transparent px-8 py-10 sm:px-10 sm:py-12 lg:flex lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="section-kicker">最终行动</p>
                <h2 className="section-title mt-5">首页已经准备好，接下来可以继续做菜单页和购物车。</h2>
                <p className="section-copy mt-6">
                  当前项目已经是一个可继续扩展的前端骨架。如果你要继续，我可以下一步把分类菜单、商品详情弹层、购物车侧边栏和下单页接上。
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-orange-400 px-7 py-4 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:bg-orange-300"
                  href="#"
                >
                  开始点餐
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                  href="#menu"
                >
                  回到菜单
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
