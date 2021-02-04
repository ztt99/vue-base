const koa = require('koa')
const Router = require('koa-router')
const app = new koa()
const router = new Router()



router.get('/(.*)',  (tex) => {
    try{
        console.log(111);
        tex.body = '1212'
    }catch(e){
        console.log(e);
    }
}) 

router.post('/api/login',  (tex) => {
    try{
        tex.body = 'login'
    }catch(e){
        console.log(e);
    }
}) 
router.post('/api/logout',  (tex) => {
    try{
        tex.body = 'logout'
    }catch(e){
        console.log(e);
    }
}) 

app.use(router.routes())

app.listen(3000)