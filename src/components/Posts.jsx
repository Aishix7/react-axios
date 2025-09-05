import { useEffect } from "react";
import { useState } from "react";
import { getPost } from "../api/PostApi";
export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getPostData = async () => {
    try {
      const res = await getPost();
      console.log(res.data);
      setPosts(res.data);
    } catch (error) {
      console.error("error fetching post:", error);
    }
  };
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <section className="section-post">
      <ul>
        {posts.map((curElement) => {
          const { id, body, title } = curElement;
          return (
            <li key={id}>
              <p>
                <b>Title : </b>
                {title}
              </p>
              <p>
                <b>Content:</b>
                {body}
              </p>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

// export const Posts()=>{
//     const [posts,setPosts] = useState([]);
//     const getPostData = async() =>{
//         try{
//         const res = await getPost();
//         console.log(res.data);
//         setPosts(res.data);
//         }
//         catch(error){
//             console.log("error occured",error);
//         }

//     }
//     useEffect(()=>{
//         getPostData();
//     },[])
// }
