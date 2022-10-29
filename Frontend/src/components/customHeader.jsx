import React from "react"
import { useNavigate } from "react-router-dom"
import {Menu, Dropdown, Space, Modal, Input } from 'antd'
import { DownOutlined,ExclamationCircleOutlined } from '@ant-design/icons'
import './css/header.css'
import memoryUtils from "../utils/memoryUtils"
import storageUtils from "../utils/storageUtils"
// import { Navigate } from "react-router-dom"

export default function CustomHeader() {
  const { confirm } = Modal
  const {Search} = Input
  const navigate = useNavigate()

  const showConfirm = () => {
      confirm({
        title: 'Do you Want to Log out?',
        icon: <ExclamationCircleOutlined />,
        onOk: () => {
          storageUtils.delUser()
          memoryUtils.user = {}
          navigate('/')
        },
        onCancel() {
          console.log('Cancel');
        },
      })
    }
    
  const menu = (
    <Menu
      items={[
        {
            key: '1',
            label: (
              <a  href="#/user">
                Main Page
              </a>
            ),
          },
        {
          key: '2',
          label: (
            <a  href="#/collection">
              Collection
            </a>
          ),
        },
        
        {
          key: '3',
          danger: true,
          label: (
            // eslint-disable-next-line
            <a href="javascript:" onClick={() => showConfirm()} >
                Log out
            </a>
          )
        },
      ]}
    />
  )

  const onSearch = async (value) => {
    navigate(`/user/${value}`)
    window.location.reload();
  }

  const user = memoryUtils.user
  return(
      <div>
          <Menu
              theme="dark"
              mode="horizontal"
              style={{height: 60,}}
          >   
              <div>
                  <span className="title">Wallpaper Engine</span>

                  
                  <Search
                    style={{width:'300px', marginLeft:'370px', marginTop:'15px'}}
                    placeholder="Input a tag name"
                    allowClear
                    enterButton="Search"       
                    onSearch={onSearch}
                    
                  />


                  <Dropdown overlay={menu} className="user">
                    {/* eslint-disable-next-line */}
                    <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Hello {user.username}
                        <DownOutlined />
                    </Space>
                    </a>
                  </Dropdown>
                  
              </div>
          </Menu>
      </div>
  )

}