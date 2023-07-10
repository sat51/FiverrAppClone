import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './home/Home.jsx';
import Gigs from './gigs/Gigs.jsx';
import Gig from './gig/Gig.jsx';
import Add from './add/Add.jsx';
import Orders from './orders/Orders.jsx';
import Message from './message/Message.jsx';
import Messages from './messages/Messages.jsx';
import MyGigs from './myGigs/MyGigs.jsx';
import Login from './login/Login.jsx';
import Register from './register/Register.jsx';

import  './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";


function App() {
  const Layout = () =>{
    return(
      <div className='app'>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home />,
        },

        {path:"/gigs",
        element:<Gigs/>}
        ,
        {
          path:"/gig/:id",
          element:<Gig/>
      },
      {
        path:"/orders",
        element:<Orders/>
      },
      {
        path:"/mygigs",
        element:<MyGigs/>
      },
      {
        path:"/add",
        element:<Add/>
      },
      {
        path:"/messages",
        element:<Messages/>
      },
      {
        path:"/message/:id",
        element:<Message/>
      },
      
    ],
      
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },

  ]);
  
  return (<>
      <RouterProvider router={router} />
      {/* <Routes>
        
        <Route path='/gigs' element={Gigs}/>
        </Routes> */}
      
  </>
  );
}

export default App;
