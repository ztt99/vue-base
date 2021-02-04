import login from './login'

import server from '../request/getRequest'
server.parseRouter('login',login)

export default server