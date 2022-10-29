import React from "react"
import {Layout } from 'antd'
import CustomFooter from "../../components/customFooter"
import CustomHeader from "../../components/customHeader"
import CustomContent from "../../components/customContent"

import './user.css'

const { Header, Content, Footer } = Layout

export default function User() {
    return (
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

            <Content className="site-layout">
                <div className="site-layout-background" style={{minHeight: '90vh'}}>

                    {
                        Array.from({
                            length: 1,
                        },
                        (_, index) => (
                            <React.Fragment key={index}>
                                {/* <img src={require("../register/images/bg.jpg")} alt="" onClick={this.handleClick}></img> */}

                                {<CustomContent></CustomContent>}
                            {/* {index % 20 === 0 && index ? index : ''} */}
                            <br />
                            </React.Fragment>
                            ),
                        )
                    }
                </div>
            </Content>

            <Footer>
                <CustomFooter></CustomFooter>
            </Footer>
        </Layout>
    )
    
}

// 