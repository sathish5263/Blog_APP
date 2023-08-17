import { useState } from "react";
import { useHistory } from 'react-router-dom';
const Create = () => {

    const [title , setTitle] = useState('')
    const [body , setBody] = useState('')
    const [author , setAuthor] = useState('')
    const [isState , setState] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
       e.preventDefault();

       const val = { title, body, author }

       setState(true);
       
       fetch("http://localhost:8000/Blogs" , {
          method : 'POST',
          headers : { "Content-Type" : "application/json" },
          body : JSON.stringify(val)
       }).then(() => {
        console.log("New blog added")
        setState(false);
        history.push('/');
       })
    }

    return ( 
        <div className="create">
            <h1>New Blog</h1>
            <div className="lg-box1">
              <div className="lg-square b1"></div>
              <div className="lg-square b2"></div>
              <div className="lg-square b3"></div>
              <div className="lg-square"></div>
              <div className="lg-square"></div>
            <form onSubmit={handleSubmit} >
              <label>Blog Title:</label>
              <input 
              type="text"
              className="txt"
              required
              value = {title}
              onChange={(e) => setTitle(e.target.value)} 
              />
              <label>Blog Body:</label>
              <textarea 
                required
                className="txt"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
              <label>Blog Author:</label>
              <input 
              type="text"
              className="txt"
              required
              value = {author}
              onChange={(e) => setAuthor(e.target.value)} 
              />
              <br></br>
              <br></br>
              { !isState && <button>Add Blog</button>}
              { isState && <button disabled>Adding..</button>}
              <p>{title}</p>
              <p>{body}</p>
              <p>{author}</p>
            </form>
            </div>
            
        </div>
     );
}
 
export default Create;