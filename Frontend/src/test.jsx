import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import {Input} from 'antd'
import { api } from "./api/api"
function Test() {
    const [users, setUsers] = useState([])
    const {Search} = Input

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/users/')
        const data = await res.json()
        console.log(data)
        setUsers(data)
    }


    const onSearch = async (value) => {
        console.log(value)
        const res = await api.post('/search/',{username:value})
        const data = res.data
        console.log(data);


        
      }

    return(
        <div>
           {
            users.map((user, index) => (
                <Link to={`/test/${user.userId}`}  key={index}>
                    <h1 key={index}>{user.username}</h1>
                </Link>
                )
            )
           }
            <Search
                style={{width:'300px', marginLeft:'370px', marginTop:'15px'}}
                placeholder="Input a tag name"
                allowClear
                enterButton="Search"       
                onSearch={onSearch}
            />
             
        </div>
    )
}

export default Test