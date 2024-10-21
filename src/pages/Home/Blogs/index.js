import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import Slider from 'react-slick'

const Blogs = () => {
    const blogs = [
        {
          id: 1,
          title: "How to Start Learning React",
          description:
            "React is a popular JavaScript library for building user interfaces. This article will guide you through the steps to get started.",
          url: "/blog/how-to-start-learning-react",
        },
        {
          id: 2,
          title: "Top 10 JavaScript Best Practices",
          description:
            "Explore the top 10 best practices for writing clean and efficient JavaScript code that will help improve performance and maintainability.",
          url: "/blog/javascript-best-practices",
        },
        {
          id: 3,
          title: "Understanding Async/Await in JavaScript",
          description:
            "Async/Await has changed how we handle asynchronous code in JavaScript. Learn how to use it effectively.",
          url: "/blog/understanding-async-await",
        },
      ];
    
    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 568,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div id='blogs'  className="blogs_sec d-block w-100 py-lg-5 py-3 px-lg-5 px-3">
                    <div style={{display:'flex' , alignItems:'start' , justifyContent:'space-between'}}>
  <h2 className="d-block w-100 text-start pb-md-5 mb-3 heading">
          My <span>Blogs</span>
        </h2>
        
        <Button style={{width:'145px' , height:'40px'}}>View All</Button>
        </div>


<div>

<div className='blogs_container'>
    
     <div className='blog_card'>
    <img  src="http://localhost:3000/static/media/SaaS_Automation%20(3).465400846ca221f0df3d.png" alt="" />
          <h3>More in Less-Use a Simple Content Distribution Platform for Web/Mobile Workloads</h3>
          <p>
          In the digital world, we often think that “More sugar, more sweet” applies to every scenario—more resources, more investment, more complexity....
          </p>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7242617385378045954/" target='_blank'>
          <Button>Read More</Button>
          </a>
        </div>

        <div className='blog_card'>
        <img  src="http://localhost:3000/static/media/SaaS_Automation%20(3).465400846ca221f0df3d.png" alt="" />
        <h3 >Delivering Mobility Services Without the Heavy Investment in Mobile App Development.</h3>
          <p>
          In my last post “More is Less and Less is More”, I discussed how simplifying "Web App Delivery" can yeild better SLE and Cost effectiveness....
          </p>
          <a target='_blank' href=" https://www.linkedin.com/feed/update/urn:li:activity:7243961874101235713/">
          <Button>Read More</Button>
          </a>
        </div>

        <div className='blog_card'>
    <img  src="http://localhost:3000/static/media/SaaS_Automation%20(3).465400846ca221f0df3d.png" alt="" />
          <h3 >Five Q's you may need to find an answer for a Large Scale Micro-Services transformation journey.</h3>
          <p>
          Most of the organizations today understand the essence of #Micro-Services #transformation. Everybody prefers to address the complexity in...
          </p>
          <a target='_blank' href=" https://www.linkedin.com/feed/update/urn:li:ugcPost:6605771609296994304/">
          <Button>Read More</Button>
          </a>
        </div>
      


        </div>    
</div>

    </div>
  )
}
  
export default Blogs