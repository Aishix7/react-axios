import { useEffect } from "react";
import { useState } from "react";
import { getPost } from "../api/PostApi";
import { DeletePost } from "../api/PostApi";
import { Form } from "./Form";

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

  const deletePosts = async (id) => {
    try {
      const res = await DeletePost(id);
      setPosts(posts.filter((post) => post.id !== id));
      console.log(res);
    } catch (error) {
      console.log("error deleting the post", error);
    }
  };

  return (
    <section className="section-post">
      <Form data={posts} setData={setPosts} />
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
              <button onClick={() => deletePosts(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
