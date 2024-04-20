import React from "react";
import './Home.css'
import img_1 from './Images/restauranfood.jpg';
function Home() {
    return (
        <div className="main-part-1">
            <div className="part-1-content">
                <div className="part-1-content-heading">
                    Little Lemon
                    </div>
                <div className="part-1-content-loc" >Delhi</div>

                <div className="part-1-content-description" > We are family owned mediterraneon restaurant,
                    focused on tradidtional recipes served with a modern twist.
                </div>

                <div className="part-1-content-button">
                    <button>Reverse a table</button>
                </div>

            </div>
            <div className="part-1-img">
                <img src={img_1} alt="restro food" />
            </div>
        </div>
    );
}

export default Home;