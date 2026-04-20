export type Category = {
  id: string;
  name: string;
  desc: string;
};

export type Dish = {
  id: string;
  name: string;
  price: string;
  tag: string;
  desc: string;
  categoryId?: string;
};

export const seedCategories: Category[] = [
  { id: 'cat-hot', name: '现炒热菜', desc: '锅气足、出餐快，适合午晚餐主食搭配。' },
  { id: 'cat-salad', name: '轻食沙拉', desc: '高蛋白低负担，办公室和健身餐优先。' },
  { id: 'cat-snack', name: '招牌小吃', desc: '炸物、卤味、甜辣口感，适合加购和分享。' },
  { id: 'cat-drink', name: '风味饮品', desc: '气泡、果茶、奶昔组合，提升客单价。' },
];

export const seedDishes: Dish[] = [
  {
    id: 'dish-chicken-bowl',
    name: '炙烤鸡腿能量碗',
    price: '¥36',
    tag: '主推',
    desc: '黑椒鸡腿排、温泉蛋、藜麦饭与烤时蔬组合，兼顾饱腹感和层次。',
    categoryId: 'cat-hot',
  },
  {
    id: 'dish-beef-rice',
    name: '香辣牛肉拌饭',
    price: '¥29',
    tag: '热销',
    desc: '牛肉片与甜洋葱现场翻炒，辣度可调，适合大众口味。',
    categoryId: 'cat-hot',
  },
  {
    id: 'dish-lemon-soda',
    name: '海盐柠檬气泡饮',
    price: '¥12',
    tag: '加购',
    desc: '低糖版本，搭配油脂型菜品更解腻，适合做套餐联动。',
    categoryId: 'cat-drink',
  },
];

