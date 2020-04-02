const Koa = require('koa');
const KoaRouter = require('koa-router');
const fs = require('fs');

const app = new Koa();

const router = new KoaRouter();

app.use(async ctx => {

    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    if (ctx.method.toLowerCase() === 'options') {
        console.log('发送了一个预检请求');
        ctx.set('Access-Control-Allow-Methods', 'GET,OPTIONS');
        ctx.set('Access-Control-Allow-Headers', 'content-type');
        ctx.body = '';
    }
});

router.get('/', async ctx => {
    ctx.body = 'kaikeba';
});

router.get('/1.html', async ctx => {
    let content = fs.readFileSync('./html/1.html');
    // console.log(content.toString());
    ctx.body = content.toString();
});

router.get('/getData', async ctx => {
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    ctx.body = 'ajax - get - data';
});

router.post('/postData', async ctx => {
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    ctx.body = 'ajax - post - data';
});

// router.options('*', async ctx => {
    
// });

app.use(router.routes());

app.listen(9999);