import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
// import App from './App.jsx'
import Pro from './Pro.jsx';
import Form from './Form.jsx'
import Web from './Web.jsx';
import Api from './Api.jsx';
import UserContext from './context/UserContext.jsx';
import Naya from './Naya.jsx';
import Color from './Color.jsx';

// import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
 
    // <App />
    // <Pro />
    // <Form/>
//    <Web />
    

    // browser router helps to move from one place to another
    // <BrowserRouter>
    //    <Api/>
    // </BrowserRouter>

    // <UserContext>
    //     <Api/>
    // </UserContext>

    // <Naya />
    <Color />
 
)
