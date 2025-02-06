import webImage from './assets/webImage.jpg';
import {Link} from 'react-router-dom';

function About(){
    return(
        <>
            <hr></hr>
            <div className="about">
                <div className="landingContent">
                    <div className="aboutContent">
                        <p>Unleash your curiosity and ignite your creativity with <b>Blog Strikes</b>! Our vibrant community of writers, thinkers, and dreamers is dedicated to delivering the most captivating stories, insightful analyses, and practical advice just for you.</p>
                    </div>

                    <div className="getStarted">
                        <button className="getStartedButton">Get Started</button>
                    </div>
                </div>
                
                <div className="landingImage">
                    <img className="aboutImage" src={webImage}></img>
                </div>

            </div>

            <div className="options">
                    <Link to='/blogs' className="viewBlogs"><button className="viewBlogButton">Explore Blogs !</button></Link>
             </div>
        </>
    );
}

export default About;