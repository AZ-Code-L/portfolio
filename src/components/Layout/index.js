import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar'
import './index.scss'


const Layout = () => {
    return(
        <div className="App">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">
                   
                </span>
                <Outlet/>
                <span className="tags bottom-tags">
                   
                </span>
                <br />
                <span className="bottom-tag-html"></span>
            </div>
        </div>
    )
}

export default Layout