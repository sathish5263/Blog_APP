import { Link } from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>BLOG-WEB</h1>
            <div className="links">
             <Link to="/" style={{
                color: "white",
                backgroundColor: "darkblue",
                minwidth: '100px',
                borderRadius :"8px"
             }}>Home</Link> 
             <Link to="/create" style={{
                color: "white",
                backgroundColor: "darkblue",
                borderRadius :"8px"
             }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;