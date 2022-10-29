import React,{useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import CustomHeader from "../../components/customHeader"
import CustomFooter from "../../components/customFooter"
import { Layout } from "antd"
import Pagination from "../../components/pagination"
import './search.css'
import { api } from "../../api/api";
const { Header, Content, Footer } = Layout
function SearchPage() {
    const {tag} = useParams()
    const [content, setContent] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(50)


    const fetchData = async() => {
        const apiResponse = await api.post('/search/', {tag_name: tag})
        const photos =apiResponse.data
        console.log(apiResponse);
        setContent([...photos])
    }

    useEffect(() => {
        fetchData()
    // eslint-disable-next-line
    }, [])

    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
    const currentRecords = content.slice(indexOfFirstRecord, indexOfLastRecord)
    const nPages = Math.ceil(content.length / recordsPerPage)


    const handleClick=(post)=>{
        window.location.href='#/detail/'+post.img_name+'/'+encodeURIComponent(post.img_src)+'/'+post.img_tag+'/'+encodeURIComponent(post.src)
    }

    const display = currentRecords?.map(post => {
        return <li key={post.id} className="picture-display">
                <div>
                    <img alt="" src={"data:image/jpeg;base64,"+post.img_src} className='picture' onClick={() => handleClick(post)}></img>
                </div>
            </li>
    })

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

                <Content className="search_layout">
                    <div className="search_background" style={{minHeight: '90vh'}}>
                        <ul className='picture-list'>
                            {display}
                        </ul>
                    </div>
                    <Pagination
                        nPages={nPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </Content>

                <Footer>
                    <CustomFooter></CustomFooter>
                </Footer>
            </Layout>
        </div>
    );
}

export default SearchPage;