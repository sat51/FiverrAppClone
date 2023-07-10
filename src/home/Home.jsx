import React from 'react'
import Featured from '../components/featured/Featured'
import TrustedBy from '../components/trustedby/TrustedBy'
import Slide from '../components/slide/Slide'
import {cards} from "../data"
import CatCard from '../components/catCard/CatCard'
import './Home.scss'
import {projects} from "../data";
import ProjectCard from "../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowScroll={5}>
        {cards.map(card=>{
         return <CatCard key={card.id} item={card}/>
        })}
        </Slide>
        <div className="features">
          <div className="container">
            <div className="item">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="title">
                <img src={require('../images/check.png')} alt="" />
                The best for every budget
              </div>
              <p>find high quality services at every price point.No hourly rates,just project-based pricing</p>
              <div className="title">
                <img src={require('../images/check.png')} alt="" />
                The best for every budget
              </div>
              <p>find high quality services at every price point.No hourly rates,just project-based pricing</p>
              <div className="title">
                <img src={require('../images/check.png')} alt="" />
                The best for every budget
              </div>
              <p>find high quality services at every price point.No hourly rates,just project-based pricing</p>
              <div className="title">
                <img src={require('../images/check.png')} alt="" />
                The best for every budget
              </div>
              <p>find high quality services at every price point.No hourly rates,just project-based pricing</p>
            </div>
            <div className="item">
              <video src=''></video>
            </div>
          </div>
        </div>
        <div className="features dark" >
          <div className="container">
            <div className="item">
              <h1>Fiverr business</h1>
              <h1>A business solution designed for teams</h1>
              <p>
                Upgrade to a curated experience packed with tools and benefits , dedicated to businesses
              </p>
              <div className="title">
                <img src={require('../images/check.png')} alt="" />
                Connect to freelancers with proven business experience
              </div>
              <div className="title">
                <img src={require('../images/check.png')} alt="" />
                Connect to freelancers with proven business experience
              </div>
              <div className="title">
                <img src={require('../images/check.png')} alt="" />
                Connect to freelancers with proven business experience
              </div>
              <button>Explore fiverr business</button>
              
            </div>
            <div className="item">
              <img className='fivimg' src={require('../images/fiverimg.jpg')} ></img>
            </div>
          </div>
        </div>
        <Slide slidesToShow={4} arrowScroll={4}>
        {projects.map(card=>{
         return <ProjectCard key={card.id} item={card}/>
        })}
        </Slide>
    </div>
  )
}

export default Home
