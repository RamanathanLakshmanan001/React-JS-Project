import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [blog, setBlog] = useState({
        title: "",
        content: "",
        image: "",
    });

    useEffect(() => {
        const storedBlogList = JSON.parse(localStorage.getItem("blogs")) || [];
        const foundBlog = storedBlogList.find((currentBlog) => currentBlog.id === parseInt(id));
        if (foundBlog) {
            setBlog(foundBlog);
        }
    }, [id]);

    const saveInputChanges = (event) => {
        const { name, value } = event.target;
        setBlog((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    function saveAndUpdate() {
        const storedBlogList = JSON.parse(localStorage.getItem("blogs")) || [];
        const updatedBlogList = storedBlogList.map((blogItem) =>
            blogItem.id === parseInt(id) ? { ...blogItem, ...blog } : blogItem
        );

        localStorage.setItem("blogs", JSON.stringify(updatedBlogList));

        navigate("/blogs");
    };

    return (
        <div className="editBlog">
            <h2 className="editBlogLabel">Edit Blog</h2>
            
                <div className="blogTitleInput">
                    <label className="editBlogTitleLabel">Blog Title</label>
                    <input
                        type="text"
                        name="title"
                        value={blog.title}
                        className="editBlogTitle"
                        onChange={saveInputChanges}
                    />
                </div>

                <div className="blogContentInput">
                    <label className="editBlogContentLabel">Blog Content</label>
                    <textarea
                        name="content"
                        value={blog.content}
                        className="editBlogContent"
                        onChange={saveInputChanges}
                    />
                </div>

                <div className="blogImageInput">
                    <label className="editBlogImageLabel">Blog Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={blog.image}
                        className="editBlogImage"
                        onChange={saveInputChanges}
                    />
                </div>

                <button type="button" onClick={saveAndUpdate} className="saveChangesButton">
                    Save Changes
                </button>

        </div>
    );
}

export default Edit;
