import { Link } from 'react-router-dom';
const BlogList = (pros) => {

   const blog1 = pros.blogsss;
   const title = pros.title;
   const eventhandle = pros.eventhandle;

    return (
      <div className="bloglist">
        <h2>{title}</h2>
        <div className="lg-box">
          <div className="lg-square b1"></div>
          <div className="lg-square b2"></div>
          <div className="lg-square b3"></div>
          <div className="lg-square"></div>
          <div className="lg-square"></div>
        
        { blog1.map((bl) => (
          <div className="blog-preview" key={bl.id}>
               <h1>{bl.title}</h1>
              <p>Written By {bl.author}</p>
            <Link to= {`blogs/${bl.id}`}>
               <button className='btn'>Click</button>
            </Link>
          </div>
        ))}
        </div>
      </div>
    );
}
 
export default BlogList
