
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {

    const eventhandle = (id) => {
      const blog = blog11.find((b) => b.id === id); // Use find instead of filter
      if (blog) {
          window.location.href = `/blog11/${blog.id}`; // Construct the correct URL
      }
  }
  
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