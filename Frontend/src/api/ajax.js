import axios from "axios";
import {message} from 'antd'
export default function ajax(url, data={}, type='GET'){

    return new Promise((resolve, reject) => {
        let promise
        //执行异步请求
        if(type === 'GET') {
            promise = axios.get(url, {
                params: data
            })
        }else {
            promise = axios.post(url, data)
        }
        promise.then(response => {
            resolve(response.data)
        }).catch(err => {
            message.error('fail: ' + err.message)
        })
    })


}
