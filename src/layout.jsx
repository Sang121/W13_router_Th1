
import {Link, Outlet } from "react-router-dom";
const Layout = () => {
    return(
        <div><h1>Layout</h1><Outlet/> <br/>
        
        <Link to={'about'}> About</Link> <br/>
        
        <Link to={'about/me'}>About me</Link> <br/>
        
        <Link to={'about/us'}>About Us</Link>


            
        </div>
        
    )
}
export default Layout;