import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        setBlogs(storedBlogs);
    }, []);

    return (
        <div className="listOfBlogs">
            <h2 className="blogHeading">Interesting Blogs !!!</h2>

            {blogs.length === 0 ? (
                <p className="noBlogs">No blogs available right now.</p>
            ) : (
                <div className="blog-list">
                    {blogs.map((currentBlog) => (
                        <Card
                            key={currentBlog.id}
                            blogId={currentBlog.id}
                            blogTitle={currentBlog.title}
                            blogContent={currentBlog.content}
                            blogImage={currentBlog.image}
                            comments={currentBlog.comments}
                        />
                    ))}
                </div>
            )}

            <button className="createNewBlogButton" onClick={() => navigate("/add")}>Create Your Own Blog</button>
        </div>
    );
}

export default Blogs;
