import { server } from './server'


function Myserver() {
    this.server = server
    this.state = 'ready'
}

//组件内部的this绑定
Myserver.prototype.v = function (source) {
    this.source = source
}
Myserver.prototype.parseRouter = function (name, urlob) {
    this[name] = {}
    Object.entries(urlob).forEach(([apiName, apiConfig]) => {
        this[name][apiName] = this.sendMes.bind(this, name, apiName, apiConfig)
        this[name][apiName].state = 'ready'
    })

}

Myserver.prototype.sendMes = function (name, apiName, apiConfig, config = {}) {
    let bindName = config.bindName || apiName
    let self = this
    let success = config.success || defaultFn


    function before(res) {
        self[name][apiName].state = 'ready'
        self.source[bindName] = res.data // self.state = 'ready'
        return res
    }

    function defaultFn(res) {
        console.log(res);

    }
    if(this[name][apiName].state == 'ready'){

        this[name][apiName].state = 'waiting'
        this.server({
            ...apiConfig,
            ...config
        }).then(before).then(success)
    }
   

}
export default new Myserver()