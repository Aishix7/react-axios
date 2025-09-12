import { useEffect } from "react";
import { useState } from "react";
import { getPost } from "../api/PostApi";
import { DeletePost } from "../api/PostApi";
import { Form } from "./Form";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [UpdateDataApi, setUpdateDataApi] = useState({});

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
  const UpdatePosts = (curElement) => setUpdateDataApi(curElement);
  return (
    <section className="section-post">
      <Form
        data={posts}
        setData={setPosts}
        updateDataApi={UpdateDataApi}
        setUpdateDataApi={setUpdateDataApi}
      />
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
              <button onClick={() => UpdatePosts(curElement)}>Edit</button>
              <button onClick={() => deletePosts(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
