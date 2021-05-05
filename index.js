// Import koa
const koa = require('koa')

// Import koa-router
const koaRouter = require('koa-router')

const app = new koa()
const router = new koaRouter()

router.get('index', '/', (ctx) => {
    ctx.body = "<h1>INDEX SAYFASINA HOŞGELDİNİZ</h1>"
})
router.get('about', '/about', (ctx) => {
    ctx.body = "<h1>HAKKIMIZDA SAYFASINA HOŞGELDİNİZ</h1>"
})
router.get('contact', '/contact', (ctx) => {
    ctx.body = "<h1>ILETISIM SAYFASINA HOŞGELDİNİZ</h1>"
})



app.use(router.routes())
app.use(router.allowedMethods())

const port = 3000;
app.listen(port, () => console.log(`Sunucu port ${port} da çalışmaya başladı...`))