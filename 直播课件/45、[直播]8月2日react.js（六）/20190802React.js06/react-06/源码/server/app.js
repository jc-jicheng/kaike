const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

// const fs = require('fs');
// let items = fs.readFileSync('./datas/items.json');
// console.log(JSON.parse(items.toString()));
let items = require('./datas/items.json');

router.get('/', async ctx => {
    ctx.body = 'kaikeba!';
});

// 获取所有的 items
router.get('/items', async ctx => {
    ctx.body = items;
});

app.use(router.routes());


app.listen(7777);