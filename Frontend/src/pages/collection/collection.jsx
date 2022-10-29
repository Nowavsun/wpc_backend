import React from "react"
import { Layout } from "antd"
import CustomFooter from "../../components/customFooter"
import CustomHeader from "../../components/customHeader"
import CollectionContent from "../../components/collectionContent"


import './collection.css'

const { Header, Content, Footer } = Layout

export default function Collection() {
        return(
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

                <Content className="collection-layout">
                    <div className="collection-layout-background">
                        {
                            Array.from({
                                length: 1,
                            },
                            (_, index) => (
                                <React.Fragment key={index}>
                                    <CollectionContent></CollectionContent>
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
