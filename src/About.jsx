import webImage from './assets/webImage.jpg';

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
        </>
    );
}

export default About;