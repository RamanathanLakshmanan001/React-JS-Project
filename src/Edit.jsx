import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const { id } = useParams();
    const [blog, setBlog] = useState({
        title: "",
        content: "",
        image: "",
    });
    const navigate = useNavigate();

    // Fetch the blog from localStorage and set it in the state
    useEffect(() => {
        const storedBlogList = JSON.parse(localStorage.getItem("blogList")) || [];
        const foundBlog = storedBlogList.find((blog) => blog.id === parseInt(id));
        if (foundBlog) {
            setBlog(foundBlog);
        }
    }, [id]);

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlog((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle save changes
    const handleSaveChanges = () => {
        const storedBlogList = JSON.parse(localStorage.getItem("blogList")) || [];
        const updatedBlogList = storedBlogList.map((blogItem) =>
            blogItem.id === parseInt(id) ? { ...blogItem, ...blog } : blogItem
        );

        // Save the updated blogList to localStorage
        localStorage.setItem("blogList", JSON.stringify(updatedBlogList));

        // After saving changes, navigate back to the blog list
        navigate("/blogs");
    };

    return (
        <div>
            <h2>Edit Blog</h2>
            <form>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={blog.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        name="content"
                        value={blog.content}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={blog.image}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="button" onClick={handleSaveChanges}>
                    Save Changes
                </button>
            </form>
        </div>
    );
}

export default Edit;
