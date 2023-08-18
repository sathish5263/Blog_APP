import { useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {

    //const [name , setName] = useState("Mario")
    //const [age , setAge] = useState(25);

    //const handle = () => {
    //  setName("Sathish");
    //  setAge(30);

    // const [blogs, setBlogs] = useState([
    //     { title:"My New Website" , body:"Lorem ipsum...", author : "mario" ,id: 1},
    //     { title:"Welcome Party" , body:"Lorem ipsum...", author : "yash" ,id: 2},
    //     { title:"web dev top tips" , body:"Lorem ipsum...", author : "mario" ,id: 3},
    // ])

    const eventhandle = (id) => {
      const blog = blog11.find((b) => b.id === id); // Use find instead of filter
      if (blog) {
          window.location.href = `/blog11/${blog.id}`; // Construct the correct URL
      }
  }
  

    // const handle1 = (name, e) => {
    //    console.log("This is " + name, e.target)
    // }

    //const [name , setName] = useState("Sathish")
    //Getting blogs from directly JSON server
    const {blog11 , isState, error} = useFetch("http://localhost:8000/Blogs/")
    

    return ( 
        <div className="home">
          { error && <div>{ error }</div> }
          { !blog11 && isState && <div>Loading....</div> }
          { blog11 && <BlogList  blogsss = {blog11} title = "My Blogs!!.." eventhandle = {eventhandle} />}
         
          <br/>
        </div>
    );
  }
    
 
export default Home;