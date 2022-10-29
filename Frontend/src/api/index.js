import ajax from "./ajax";

const BASE = ''
//登录接口
export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')

//注册接口
export const reqRegister = (username, password, confirm) => ajax(BASE + '/register', {username, password, confirm}, 'POST')

//搜索接口 
export const search = ({tagName}) => ajax(BASE + 'search', {
    tag: tagName
})