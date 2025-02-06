import { useNavigate } from "react-router-dom";
import Header from './Header.jsx';
import About from './About.jsx';


function LandingPage(){

    return(
        <>
            <Header/>
            <About/>
        </>
    );
}

export default LandingPage;