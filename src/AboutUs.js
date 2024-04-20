import React from "react";
import './AboutUs.css';
import img_1 from './Images/restaurant chef B.jpg';
import img_2 from './Images/restaurant chef A.jpg';
function AboutUs(){
    return(
        <div className="about">
            <div className="about-content">
                <div className="about-content-heading">Little Lemon</div>
                <div className="about-content-loc">Delhi</div>
                <div className="about-content-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non, nisi ut odit ex neque reprehenderit accusantium optio ratione eius temporibus veritatis maiores, architecto fugiat saepe suscipit totam cupiditate ullam beatae accusamus soluta libero quas! Itaque vel aut laborum aliquid ullam iste omnis beatae, incidunt quis! Nihil nobis eaque officia minus iure soluta eum, voluptate odio tenetur ratione molestias illo quasi harum blanditiis, vero, autem excepturi totam unde perferendis odit optio neque. Eligendi nam aliquid quos vitae eveniet aliquam accusantium.</div>
            </div>
            <div className="about-img">
                <img src={img_1} alt="chef 1"/>
                <img src={img_2} alt="chef_2"/>
            </div>
        </div>
    );
    
}
export default AboutUs;