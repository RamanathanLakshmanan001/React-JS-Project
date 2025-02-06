import {useState,useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import LandingPage from './LandingPage.jsx';
import Add from './Add.jsx';
import Blogs from './Blogs.jsx';
import Edit from './Edit.jsx';
import BlogDetails from './BlogDetails.jsx';

function App() {

    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "HorrorField",
            content: "This is the content about HorrorField.",
            image: "https://i.ytimg.com/vi/3woehiNCVyI/maxresdefault.jpg",
            comments:[]
        },
        {
            id: 2,
            title: "Clash Royale",
            content: "This is the content about Clash Royale",
            image: "https://th.bing.com/th/id/OIP.htg3UkVK_O2qAhWiCv1oVgHaDN?w=333&h=151&c=7&r=0&o=5&pid=1.7",
            comments:[]
        },
    ]);

    
    
    useEffect(() => {
        localStorage.setItem("blogs",JSON.stringify(blogs));
    }, []);

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>}></Route>

                    <Route path='/blogs' element={<Blogs blogs={blogs}/>}></Route>

                    <Route path='/add' element={<Add/>}></Route>
                    
                    <Route path='/edit/:id' element={<Edit/>}></Route>

                    <Route path='/blogDetails/:id' element={<BlogDetails/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
