import React, {useState, useEffect} from 'react'
import {api} from "../api/api"
import './css/collectionContent.css'
import memoryUtils from "../utils/memoryUtils"

function CollectionContent() {
    const [collectionContent, setcollectionContentResults] = useState([])

    const user = memoryUtils.user
    const fetchData = async () => {
        const res = await api.post('/getFavorite/', {username:user.username})
        const data = res.data
        console.log(data);
        setcollectionContentResults([...data])
    }
    useEffect(() => {
        fetchData()
    // eslint-disable-next-line
    },[])
    
    const handleClick=(post)=>{
        window.location.href='#/detail/'+post.img_name+'/'+encodeURIComponent(post.img_src)+'/'+post.img_tag+'/'+encodeURIComponent(post.src)
    }

    const content = collectionContent?.map((post,index) => {
        return <li key={index} className="img-display">
                <div>
                    <img alt="" src={"data:image/jpeg;base64,"+post.img_src} className='img' onClick={() => handleClick(post)}></img>
                </div>
            </li>
    })

    return (
        <div >
            <ul className='img-list'>
                {content}
            </ul>
        </div>
    )

}

export default CollectionContent