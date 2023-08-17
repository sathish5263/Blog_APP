import { useEffect, useState } from "react";
const useFetch = (url) => {

    const [isState , setState] = useState(true);
    const [blog11 , SetBlog] = useState(null);
    const [error , setError] = useState(null);

    useEffect(() => {
      //  const abortCnt = new AbortController();

        setTimeout(() => {
          fetch(url )
        .then( res => {
          if(!res.ok)
            throw Error("Unable to Fetch the data in JSON !!..")
          return res.json();
        })
        .then( rs => {
          // console.log(rs);
          SetBlog(rs);
          setState(true);
          setError(null)
        })
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log("Fetch Aborted")
            }
            else{
                setError(err.message)
                setState(false);
            }  
        })
       },1000)

      // return () => abortCnt.abort()

      },[url]);


      return { blog11, isState, error }
}

export default useFetch;