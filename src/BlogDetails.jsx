import {useState,useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";


function BlogDetails(){

    const {id} = useParams();
    const navigate = useNavigate();

    const [blog,setBlog] = useState({
        id:"",
        title:"",
        content:"",
        image:"",
        comments:[]
    });

    useEffect(()=>{
        const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
        const foundBlog = storedBlogs.find((currentBlog)=>currentBlog.id===parseInt(id));
        if(foundBlog){
            setBlog(foundBlog);
        }
    },[id]);


    const [comment,setComment] = useState('');

    function saveInputChanges(event){
        setComment(event.target.value);
    }

    function addComment(){
       blog.comments.push(comment);
       
       const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
       const updatedBlogs = storedBlogs.map((currentBlog)=>
            currentBlog.id===parseInt(id)?{...currentBlog,...blog}:{currentBlog}
       );
       
       localStorage.setItem("blogs",JSON.stringify(updatedBlogs));

       setBlog(blog); 
       navigate(`/blogDetails/${id}`);
    }

    return(
        <>

        <div className="detailedBlog">

            <div className="imgAndContentContainer">
                <div className="detailedBlogImageContainer">
                    <img src={blog.image} className="detailedBlogImage"></img>
                </div>

                <div className="detailedBlogContentContainer">
                    <p className="detailedBlogContent">{blog.content}</p>
                </div>

                <div className="writeComments">
                    <textarea rows="4" placeholder="Write a comment..." className="commentInput" value={comment} onChange={saveInputChanges}></textarea>
                </div>

                <div className="addComment">
                    <button className="addCommentButton" onClick={addComment}>Add comment</button>
                </div>
            </div>

            <div className="commentSection">
               <h1 className="commentHeading">Comments:</h1>
               <br></br>
               <div className="comments">
                    {blog.comments.map((currentComment)=>
                    <>
                        <p className="commentContainer">{currentComment}</p>
                        <hr></hr>
                    </>    
                    )}
               </div>
            </div>
        </div>

        </>
    );
}

export default BlogDetails;