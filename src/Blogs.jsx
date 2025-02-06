import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card"; // Assuming you already have a Card component

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    // Fetch blogs from localStorage when the component mounts
    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        setBlogs(storedBlogs);
    }, []);

    return (
        <div>
            <h2>All Blogs</h2>
            {blogs.length === 0 ? (
                <p>No blogs available.</p>
            ) : (
                <div className="blog-list">
                    {blogs.map((blog) => (
                        <Card
                            key={blog.id}
                            blogTitle={blog.title}
                            blogContent={blog.content}
                            blogImage={blog.image}
                            blogId={blog.id}
                        />
                    ))}
                </div>
            )}
            <button onClick={() => navigate("/add")}>Add New Blog</button>
        </div>
    );
}

export default Blogs;
