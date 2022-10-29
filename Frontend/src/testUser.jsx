import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
function TestUser() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState()

    useEffect(()=> {
        getUser()
        // eslint-disable-next-line
    },[])
    

    const getUser = async () => {
        const res = await fetch(`/api/users/${id}/`)
        const data = await res.json()
        console.log(data);
        setUser(data)
    }

    const updateUser = async ()=> {
        const res = await fetch(`http://127.0.0.1:8000/api/users/${id}/update/`, {
            method: "PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        console.log(res);
    }

    const handleUpdate = ()=> {
        updateUser()
    }

    const deleteUser = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/users/${id}/delete/`, {
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        console.log(res);
    }

    const handleDelete = () => {
        deleteUser()
        navigate('test')
    }

    return (  
        <div>
            {
                user?.username
            }
            <input onChange={(e) => {setUser({...user, 'username': e.target.value})}}></input>
            <button onClick={handleUpdate}>submit</button>
            <button onClick={handleDelete}>delete</button>

        </div>
    );
}

export default TestUser