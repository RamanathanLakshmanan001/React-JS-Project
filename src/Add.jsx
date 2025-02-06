import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
    const [newBlog, setNewBlog] = useState({
        title: "",
        content: "",
        image: "",
    });
    const navigate = useNavigate();

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBlog((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle save blog
    const handleSaveBlog = () => {
        // Retrieve existing blogs from localStorage
        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        
        // Generate new ID based on existing blogs length
        const newId = storedBlogs.length + 1;
        const newBlogData = { id: newId, ...newBlog };

        // Add the new blog to the array
        storedBlogs.push(newBlogData);

        // Save the updated blogs array to localStorage
        localStorage.setItem("blogs", JSON.stringify(storedBlogs));

        // After saving, navigate to the blogs page
        console.log("New blog added:", newBlogData);
        navigate("/blogs");
    };

    return (
        <div>
            <h2>Add New Blog</h2>
            <form>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={newBlog.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        name="content"
                        value={newBlog.content}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={newBlog.image}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="button" onClick={handleSaveBlog}>Save Blog</button>
            </form>
        </div>
    );
}

export default Add;
