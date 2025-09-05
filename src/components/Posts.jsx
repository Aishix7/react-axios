import { useEffect } from "react";
import { useState } from "react";
import { getPost } from "../api/PostApi";
import { createPost } from "../api/PostApi";
export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");

  const getPostData = async () => {
    try {
      const res = await getPost();
      console.log(res.data);
      setPosts(res.data);
    } catch (error) {
      console.error("error fetching post:", error);
    }
  };
  const createPostData = async () => {
    // if (!title.trim() || !body.trim()) {
    //   alert("both title and body are required for a post");
    //   return;
    // }
    try {
      const res = await createPost({ title, body });
      setPosts([res.data, ...posts]);
      setTitle("");
      setbody("");
    } catch (error) {
      console.log("error creating post", error);
    }
  };
  useEffect(() => {
    getPostData();
  }, []);

  return (
    <section className="section-post">
      <h2>Create post</h2>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="enter content here"
        type="text"
        value={body}
        onChange={(e) => setbody(e.target.value)}
      />
      <button onClick={createPostData}>Add Post</button>
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
