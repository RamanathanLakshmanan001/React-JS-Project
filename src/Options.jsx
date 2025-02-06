import { useNavigate } from "react-router-dom";

function Options(){

    const navigate = useNavigate();

    return(
        <>
            <div className="options">
                <div className="createNewBlog">
                    <button className="createNewBlogButton" onClick={()=>navigate('/add')}>Create New Blog</button>
                </div>

                <div className="viewBlog">
                    <button className="viewBlogButton" onClick={()=>navigate('/blogs')}>view Blog</button>
                </div>
            </div>
        </>
    );
}

export default Options;