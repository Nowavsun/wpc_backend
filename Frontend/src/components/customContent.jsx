import React, {useState, useEffect} from 'react'
import memoryUtils from "../utils/memoryUtils"
import './css/content.css'
import { api } from '../api/api'

function CustomContent() {
    const user = memoryUtils.user
    const [customContent, setCustomContentResults] = useState([])

    const fetchData = async() => {
        const apiResponse = await api.post('/rec/', {username:user.username})
        const photos = apiResponse.data
        console.log(photos);
        setCustomContentResults([...photos])
    }

    useEffect(() => {
        fetchData()
    // eslint-disable-next-line
    }, [])


    const handleClick=(post)=>{
        window.location.href='#/detail/'+post.img_name+'/'+encodeURIComponent(post.img_src)+'/'+encodeURIComponent(post.img_tag)+'/'+encodeURIComponent(post.src)

    }

    const content = customContent?.map(post => {
        return <li key={post.id} className="picture-display">
                <div>
                    <img alt="" src={"data:image/jpeg;base64,"+post.img_src} className='picture' onClick={() => handleClick(post)}></img>
                </div>
            </li>
    })

    return (
        <div style={{minHeight: '90vh'}}>
            <ul className='picture-list' >
                {content}
            </ul>
        </div>
    )

}

export default CustomContent