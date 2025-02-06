import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
    
    const [newBlog, setNewBlog] = useState({
        id:"",
        title: "",
        content: "",
        image: "",
    });

    const navigate = useNavigate();
    
    function saveInputChanges(event){
        const {name,value} = event.target;
        setNewBlog((prev)=>({
            ...prev,
            [name]: value,
        }));
    };

    function createNewBlog(){
        
        if(newBlog.title==='' || newBlog.content==='' || newBlog.content===''){
            alert('Please Enter all the input fields');
        }

        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        
        const newId = storedBlogs.length + 1;
        const newBlogData = { ...newBlog , id: newId, comments:[]};

        storedBlogs.push(newBlogData);
        localStorage.setItem("blogs", JSON.stringify(storedBlogs));

        navigate("/blogs");
    };

    return (
        <div>
            <div className="createBlog">

                <h1 className="createBlogLabel">Create New Blog</h1>

                <div className="blogTitleInput">
                    <label className="newBlogTitleLabel">Blog Title</label>
                    <input type="text" 
                    name="title"
                    value={newBlog.title} 
                    placeholder="Enter your Blog Title" 
                    className="newBlogTitle" 
                    onChange={saveInputChanges}>
                    </input>
                </div>
                
                <div className="blogContentInput">
                    <label className="newBlogContentLabel">Blog Content</label>
                    <input type="textarea" 
                    name="content"
                    value={newBlog.content} 
                    placeholder="Enter your Blog Content" 
                    className="newBlogContent" 
                    onChange={saveInputChanges}>
                    </input>
                </div>

                <div className="blogImageInput">
                    <label className="newBlogImageLabel">Blog Image URL</label>
                    <input type="text"
                    name="image" 
                    value={newBlog.image} 
                    placeholder="Enter your Blog Image URL" 
                    className="newBlogImage" 
                    onChange={saveInputChanges}>
                    </input>
                </div>
                
                <button className="confirmNewBlogButton" onClick={createNewBlog}>+ Create</button>
            </div>
        </div>
    );
}

export default Add;
