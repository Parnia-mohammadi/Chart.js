import { useEffect } from "react";
import useAppStore from "../../store/store";

function ZustandAsyncPosts() {
  const { posts, fetchPosts, theme } = useAppStore();
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <h2>Posts: </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {posts.loading ? (
          <p>loading...</p>
        ) : (
          posts.data.map((post) => (
            <div
              key={post.id}
              style={{
                border:
                  theme === "light" ? "1px solid black" : "1px solid white",
                padding: "10px",
                margin: "5px",
                maxWidth: "30%",
                alignSelf: "stretch",
              }}
            >
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ZustandAsyncPosts;
