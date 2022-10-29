import store from 'store'

//local数据存储
const USER_KEY = 'user_key'
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    saveUser(user) {
        // localStorage.setItem(USER_KEY, JSON.stringify(user))
        store.set(USER_KEY, user)
    },
    getUser() {
        // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
        return store.get(USER_KEY) || {}
    },
    delUser() {
        // localStorage.removeItem(USER_KEY)
        store.remove(USER_KEY)
    }
}