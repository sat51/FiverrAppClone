import React, { useState , useEffect} from 'react'
import "./Navbar.scss" 
import { Link, useLocation, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest';

const Navbar = () => {
    const[active,setActive] = useState(false);
    const[open,setOpen] = useState(false); 

    const{pathname} = useLocation();
    const isActive = () => {
        window.scrollY >0 ?setActive(true) : setActive(false);
    }

    useEffect(()=>{
        window.addEventListener("scroll",isActive);
        return()=>{
            window.removeEventListener("scroll",isActive);
        }
    },[]);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const navigate = useNavigate();
    const handleLogout = async()=>{
        try{
            await newRequest.post("/auths/logout");
            localStorage.setItem("currentUser",null);
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }
     

  return (
    <div className={active || pathname !== "/"?"navbar active":"navbar"}>
      <div className='container'>
        <div className='logo'>
            <Link to="/" className='link'>
                <span className='text'>fiverr</span> 
            </Link>
           <span className='dot'>.</span> 
        </div>
        <div className='links'>
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign</span>
            
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            {!currentUser &&<button>Join</button>}
            {currentUser && (
            <div className='user' onClick={()=>setOpen(!open)}>
                <img src={currentUser.img } alt="" />
                <span>{currentUser?.username}</span>
            {open && <div className='options'>
                {
                    currentUser?.isSeller &&(
                        <>
                        <Link className="link" to="/mygigs">Gigs</Link>
                        <Link className="link"  to="/add">Add new Gig</Link>
                        </>
                    )
                }
                <Link className="link" to="/orders">Orders</Link>
                <Link className="link" to="/messages">Messages</Link>
                <Link className="link" onClick={handleLogout}>Logout</Link>
            </div>}
            </div>
                )}
        </div>

      </div>
      {(active || pathname !="/") && (
      <>
      <hr />
      <div className='menu'>
        <Link className='link menulink' to="/">
            Graphics & Design
        </Link>
        <Link className='link' to="/">
            Video & animation
        </Link>
        <Link className='link' to="/">
            Writing & Tanslation
        </Link>
        <Link className='link' to="/">
            AI Services
        </Link>
        <Link className='link' to="/">
           Digital Marketing
        </Link>
        <Link className='link' to="/">
            Music Audio
        </Link>
        <Link className='link' to="/">
            Programming & Tech
        </Link>
        <Link className='link' to="/">
            Business 
        </Link>
        <Link className='link' to="/">
            Lifestyle 
        </Link>
      </div>
      </>)}
    </div>
  )
}

export default Navbar
