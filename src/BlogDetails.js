import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';
import { useEffect, useState } from 'react';

const BlogDetails = () => {
    
    const history = useHistory();
    const { id } = useParams();
    const data = useFetch("http://localhost:8000/Blogs/" + id)
    // useEffect(()=>);
    console.log(data)


    const handleDel = () => {
        fetch("http://localhost:8000/Blogs/" + data.blog11.id , {
            method : "DELETE"
        }).then( () => {
            history.push('/')
        })
    }

    return ( 
        <div className="blogdetails">
           { !data.blog11 && data.isState && <div>Loading..</div> }
           { !data.error && <div>{data.error}</div> }
           { data.blog11 && (
            <div>
            <div className="lg-box2">     
                <h2>{data.blog11.title}</h2>
                <p>-{data.blog11.author}</p>
                <br/>
                <div className='bodyfnt'>{data.blog11.body}</div>     
            </div>
            <button className='delbtn' onClick={handleDel}>Delete</button>
            </div>
           ) }
        </div>
     );
}
 
export default BlogDetails
