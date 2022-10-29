import App from './App'
import React from "react"
import { createRoot } from 'react-dom/client'
import 'antd/dist/antd.min.css'
import storageUtils from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'

const user = storageUtils.getUser()
memoryUtils.user = user 

//读取local中保存的user， 保存到内存中

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)
