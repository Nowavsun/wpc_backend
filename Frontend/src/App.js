import React, {Component} from "react"
import {HashRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/login/login'
import User from "./pages/user/user"
import Register from "./pages/register/register"
import Collection from "./pages/collection/collection"
import Detail from "./pages/details/detail"
import SearchPage from "./pages/user/searchPage"
import Test from "./test"
import TestUser from "./testUser"
import TestSearch from "./testSearch"
//所有 Switch 改为 Routes，Redirect 改为 Navigate ，withRouter改为 useNavigate
export default class App extends Component{
    render(){
        return (
            <HashRouter>
                <Routes>
                    <Route path="" element = {<Login/>}/>
                    <Route path="register" element = {<Register/>}/>
                    <Route path="user" element = {<User/>}/>
                    <Route path="user/:tag" element = {<SearchPage/>}/>
                    <Route path="collection" element = {<Collection/>}/>
                    <Route path="detail/:img_name/:src/:img_tag/:raw_src" element = {<Detail/>}/>
                    <Route path="test" element = {<Test/>}/>
                    <Route path="test/:search" element = {<TestSearch/>}/>
                    <Route path="test/:id" element = {<TestUser/>}/>

                </Routes>
            </HashRouter>
        )
    }
}