import React, {useState, useEffect} from 'react'
import {apiKey} from "../api/apiKeys"
import './css/content.css'
function Gallery() {
    const [customContent, setCustomContentResults] = useState([])

    const fetchData = async() => {
        const headers = {
            "Authorization": apiKey
        }
        const apiResponse = await fetch('https://api.pexels.com/v1/search?query=people', {headers})
        const apiResponseJSON =await apiResponse.json()
        const photos = apiResponseJSON.photos
        console.log(photos)
        setCustomContentResults([...photos])
    }

    useEffect(() => {
        fetchData()
    }, [])



    const content = customContent?.map(post => {
        return <li key={post.id} className="picture-display">
                <div>
                    <span>{post.photographer}</span>
                </div>
                <div>
                    <img alt="" src={post.src.medium} className='picture'></img>
                </div>
            </li>
    })

    return (
        <div>
            <ul className='picture-list'>
                {content}
            </ul>
        </div>
    )

}

export default Gallery