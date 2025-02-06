import editButton from './assets/editButton.png';
import deleteButton from './assets/deleteButton.png';
import { useNavigate } from "react-router-dom";

function Card(props) {
    const navigate = useNavigate();

    // Handle Edit Button
    const handleEdit = () => {
        navigate(`/edit/${props.blogId}`);
    };

    // Handle Delete Button
    const handleDelete = () => {
        // Get the current list of blogs from localStorage
        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        const updatedBlogs = storedBlogs.filter(blog => blog.id !== props.blogId);

        // Save the updated list of blogs back to localStorage
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

        // Update the state or refresh the blogs list
        alert("Blog deleted");
        window.location.reload();  // Reload the page to reflect the deletion
    };

    return (
        <div className="card">
            <div className="imageCard">
                <img src={props.blogImage} alt="Blog" className="blogImage" />
            </div>

            <div className="crud">
                <div className="blogTitle">
                    <p>{props.blogTitle} <a href="#" className="viewBlog">Read more...</a></p>
                </div>

                <div className="editDelete">
                    <div className="edit">
                        <button className="editButton" onClick={handleEdit}>
                            <img src={editButton} className="editButtonImage" alt="Edit" />Edit
                        </button>
                    </div>

                    <div className="delete">
                        <button className="deleteButton" onClick={handleDelete}>
                            <img src={deleteButton} className="deleteButtonImage" alt="Delete" />Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
