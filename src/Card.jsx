import editButton from './assets/editButton.png';
import deleteButton from './assets/deleteButton.png';
import { useNavigate,Link } from "react-router-dom";

function Card(props) {

    const navigate = useNavigate();

    function editBlog() {
        navigate(`/edit/${props.blogId}`);
    };
    

    function deleteBlog(){
        
        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        const updatedBlogs = storedBlogs.filter(currentBlog => currentBlog.id !== props.blogId);

        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
        window.location.reload();
    };

    return (
        <div className="card">
            <div className="imageCard">
                <img src={props.blogImage} alt="Blog" className="blogImage" />
            </div>

            <div className="crud">
                <div className="blogTitle">
                    <p>{props.blogTitle} <Link to={`/blogDetails/${props.blogId}`}>read more...</Link></p>
                </div>

                <div className="editDelete">
                    <div className="edit">
                        <button className="editButton" onClick={editBlog}>
                            <img src={editButton} className="editButtonImage" alt="Edit" />Edit
                        </button>
                    </div>

                    <div className="delete">
                        <button className="deleteButton" onClick={deleteBlog}>
                            <img src={deleteButton} className="deleteButtonImage" alt="Delete" />Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
