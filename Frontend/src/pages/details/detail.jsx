import { saveAs } from "file-saver"
import { message, Layout} from "antd"
import React, { useEffect, useState } from "react"
import {HeartFilled, DownloadOutlined, StarFilled } from '@ant-design/icons'
import { useParams } from "react-router-dom"
import memoryUtils from "../../utils/memoryUtils"
import CustomHeader from "../../components/customHeader"
import "./detail.css"
import { api } from "../../api/api"
const { Header, Content, Sider } = Layout

export default function Detail() {
    const user = memoryUtils.user

    const {img_name, src, img_tag, raw_src} = useParams()

    let [like, setLike] = useState()
    let [collect, setCollect] = useState(() => {
        // let state = false
        // const res = api.post('/getDetail/',{username:user.username, image_name:img_name})
        // console.log('2: '+ res);

        // return state
    })

    let tags = []
    tags = img_tag.split(',')

    const sendData = async() => {
        const res = await api.post('/getDetail/', {username:user.username, image_name:img_name})
        const data = res.data
        const liked = data[0].liked
        const favorited = data[0].favorited
        setLike(liked)
        setCollect(favorited)
    }

    useEffect(() => {
        sendData()
    // eslint-disable-next-line
    },[])

    const handleClick1 = async () => {
        setLike(like = !like)
        console.log(like)
        if(like === true){
            const res = await api.post('/like/', {username:user.username, image_name: img_name, like:like})
            console.log(res);
        }else{
            const res = await api.post('/like/', {username:user.username, image_name: img_name, like:like})
            console.log(res);
        }

    }

    const handleClick2 = async() =>{
        setCollect(collect = !collect)
        console.log(collect);
        if(collect === true){
            message.info("Add to Collection Successful!") 
            await api.post('/favorite/', {username:user.username, image_name: img_name, collect:collect})
        }else{
            message.info("Remove from collection Successful!") 
            await api.post('/favorite/', {username:user.username, image_name: img_name, collect:collect})
        }
    }

    const downloadImage= async()=>{
        saveAs(raw_src, 'image')
    }
    
    return (
        <div>
            
            <Layout>
                <Header
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        width: '100%',
                        height:60
                    }}
                >
                    <CustomHeader></CustomHeader>
                </Header>
                
                <Layout >
                    <Sider className="sider">
                        <HeartFilled 
                            style={{fontSize:'24px', color:like ? "#eb2f96" : "#cccccc", marginLeft:20, marginTop:15}}                            
                            onClick={handleClick1}/>
                        <StarFilled
                            style={{fontSize:'24px', color:collect ? "#eb2f96" : "#cccccc",marginLeft:20}}
                            onClick={handleClick2}/>
                        <DownloadOutlined 
                            style={{fontSize:'24px',marginLeft:20}}
                            onClick={downloadImage}/>
                        <hr></hr>
                        <h1 className="tagsName">Tags</h1>
                        <ul className="tags">
                            {
                                tags.map((tag,index) => 
                                    <li key={index}>
                                        <a style={{color:'white'}} alt="" href={`#/user/${tag}`}>{tag}</a>
                                    </li>)
                            }
                        </ul>
                    </Sider>
                    <Content className="content" >
                        <div className="content-background">              
                            <img alt="" src={"data:image/jpeg;base64,"+src} className="image"></img>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>


    )
}


// export default class Detail extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             like : false
//         }
//     }

    

//     handleClick() {
//         this.setState({
//             like: !this.state.like
//         })
//     }
//     render() {
        
//         return(
//             <div>
//                 <HeartTwoTone 
//                     twoToneColor={this.state.like ? "#cccccc" : "#eb2f96"}
//                     onClick={() => this.handleClick() }/>
//             </div>
//         )
//     }
// }





// const [data, setData] = useState();
// const [isLoading, setIsLoading] = useState(false);
// const [err, setErr] = useState('');

// const handleClick = async () => {
//   setIsLoading(true);
//   try {
//     const response = await fetch('<https://reqres.in/api/users>', {
//       method: 'POST',
//       body: JSON.stringify({
//         name: 'John Smith',
//         job: 'manager',
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     const result = await response.json();

//     console.log('result is: ', JSON.stringify(result, null, 4));

//     setData(result);
//   } catch (err) {
//     setErr(err.message);
//   } finally {
//     setIsLoading(false);
//   }
// };

// console.log(data);

// return (
//   <div>
//     {err && <h2>{err}</h2>}

//     <button onClick={handleClick}>Make request</button>

//     {isLoading && <h2>Loading...</h2>}

//     {data && (
//       <div>
//         <h2>Name: {data.name}</h2>
//         <h2>Job: {data.job}</h2>
//       </div>
//     )}
//   </div>
// );
// };
