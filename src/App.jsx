import {useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import LandingPage from './LandingPage.jsx';
import Add from './Add.jsx';
import Blogs from './Blogs.jsx';
import Edit from './Edit.jsx';

function App() {


    const [blogList, setBlogList] = useState([
        {
            id: 1,
            title: "Clash of Clans",
            content: "This is the content about Clash of Clans.",
            image: "",
        },
        {
            id: 2,
            title: "Clash Royale",
            content: "This is the content about Clash Royale",
            image: "",
        },
    ]);


    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>}></Route>

                    <Route path='view' 
                    element={<Blogs blogList={blogList} setBlogList={setBlogList}/>}>
                    </Route>

                    <Route path='add' element={<Add blogList={blogList} setBlogList={setBlogList}/>}></Route>
                    
                    <Route path='/edit/:id'
                    element={<Edit blogList={blogList} setBlogList={setBlogList}/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
