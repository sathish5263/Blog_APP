import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="notfound">
            <h1>Sorry!!</h1>
            <h2>404 Not Found Page</h2>
            <Link to="/">Back</Link>
        </div>
    );
}
 
export default NotFound;