import React from "react";
import './Specials.css';
import img_2 from './Images/greek_salad.jpg';
import img_3 from './Images/lemon dessert.jpg'
import img_1 from './Images/menu_1.jpg';
function Specials() {
    return (
        <div className="main-part-2">
            <div className="part-2-box">
                <div className="part-2-week-special">
                    This Week Specials !
                </div>

                <div className="part-2-button">
                    <button>
                        order Menu
                    </button>
                </div>
            </div>

            <div className="part-2-menu-boxes">

                <div className="part-2-box-1">
                    <div className="part-2-box-1-image">
                        <img src={img_2} alt="greek salad" />
                    </div>
                    <div className="part-2-box-1-menu-content">
                        <div className="part-2-box-1-menu-content-name-n-price">
                            <div className="part-2-box-menu-heading">GreekSalad </div>

                            <div className="part-2-box-menu-price">Rs.100/-</div>

                        </div>
                        <div className="part-2-box-1-menu-content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis vitae dignissimos totam voluptate tenetur illo sed itaque, quos magnam voluptatibus, optio sequi dicta sapiente? Quos, voluptatum sunt. Expedita, quaerat?</div>
                        <div className="part-2-box-1-menu-content-delivery">
                            order delivery
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                            </svg>
                        </div>
                    </div>

                </div>
                <div className="part-2-box-2">

                    <div className="part-2-box-1-image">
                        <img src={img_1} alt="greek salad" />
                    </div>
                    <div className="part-2-box-1-menu-content">
                        <div className="part-2-box-1-menu-content-name-n-price">
                            <div className="part-2-box-menu-heading">Bruchetta </div>
                            <div className="part-2-box-menu-price">Rs.250/-</div>
                        </div>

                        <div className="part-2-box-1-menu-content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis vitae dignissimos totam voluptate tenetur illo sed itaque, quos magnam voluptatibus, optio sequi dicta sapiente? Quos, voluptatum sunt. Expedita, quaerat?</div>

                        <div className="part-2-box-1-menu-content-delivery">order delivery
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                            </svg></div>
                    </div>
                </div>
                <div className="part-2-box-3">
                    <div className="part-2-box-1-image">
                        <img src={img_3} alt="lemon dessert" />
                    </div>
                    <div className="part-2-box-1-menu-content">
                        <div className="part-2-box-1-menu-content-name-n-price">
                            <div className="part-2-box-menu-heading">LemonDesert </div>
                            <div className="part-2-box-menu-price">Rs.190/-</div>
                        </div>
                        <div className="part-2-box-1-menu-content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis vitae dignissimos totam voluptate tenetur illo sed itaque, quos magnam voluptatibus, optio sequi dicta sapiente? Quos, voluptatum sunt. Expedita, quaerat?</div>
                        <div className="part-2-box-1-menu-content-delivery">order delivery
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                            </svg></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Specials;