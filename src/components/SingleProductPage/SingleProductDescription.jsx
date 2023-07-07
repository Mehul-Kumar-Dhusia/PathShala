import React from 'react'
import './singleProduct.css'
import {CloudDownloadOutlined, Code, EmojiEventsOutlined, InsertDriveFileOutlined, OndemandVideo, StayCurrentPortrait } from '@mui/icons-material'
const SingleProductDescription = () => {
  return (
    <>
    <div className='container'>
        <div className='wrapper wrapper-1'>
            <h2>What you'll learn</h2>
            <ul>
                <li>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</li>
                <li>After the course you will be able to build ANY website you want.</li>
                <li>Work as a freelance web developer.</li>
                <li>Master backend development with Node</li>
                <li>Learn the latest technologies, including Javascript, React, Node and even Web3 development.</li>
                <li>Build fully-fledged websites and web apps for your startup or business.</li>
                <li>Master frontend development with React</li>
                <li>Learn professional developer best practices.</li>
            </ul>
        </div>
        <div className='wrapper'>
            <h2>This course includes :</h2>
            <div className='second-wrapper-grid wrapper-2'>
                <div><OndemandVideo style={{fontSize:"19px",marginRight:"10px"}} />65.5 hours on-demand video</div>
                <div><Code style={{fontSize:"19px",marginRight:"10px"}} /> 7 coding exercises</div>
                <div><InsertDriveFileOutlined style={{fontSize:"19px",marginRight:"10px"}} />73 articles</div>
                <div><CloudDownloadOutlined style={{fontSize:"19px",marginRight:"10px"}}/>downloadable resources</div>
                <div><StayCurrentPortrait style={{fontSize:"19px",marginRight:"10px"}} />Access on mobile and TV</div>
                <div><EmojiEventsOutlined style={{fontSize:"19px",marginRight:"10px"}} />Certificate of completion</div>
            </div>
        </div>
        <div className='wrapper'>
            <h2>Requirements</h2>
            <ul>
                <li>No programming experience needed - I'll teach you everything you need to know</li>
                <li>A computer with access to the internet</li>
                <li>No paid software required</li>
                <li>I'll walk you through, step-by-step how to get all the software installed and set up</li>
            </ul>
        </div>
        <div className='wrapper'>
            <h2>Description</h2>
            <p>
            Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy! <br />At 65+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery.
            </p>
        </div>
        <div className='wrapper'>
            <h2>Who this course is for</h2>
            <ul>
                <li>If you want to learn to code through building fun and useful projects, then take this course.</li>
                <li>If you want to start your own startup by building your own websites and web apps.</li>
                <li>If you are a seasoned programmer, then take this course to to get up to speed quickly with the latest frameworks and NodeJS</li>
                <li>If you want to take ONE COURSE and learn everything you need to know about web development, take this course</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default SingleProductDescription
