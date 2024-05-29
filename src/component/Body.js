import "../resource/css/Body.css"
import background1 from "../resource/img/background/backrground1.png"
import background2 from "../resource/img/background/backrground2.png"
import background3 from "../resource/img/background/background3.png"
import background4 from "../resource/img/background/background4.png"


function Body(){
    return (
        <>
            <div className="body">
                <div className="section-one">
                    <div className="inner-wrap">
                        <div className="container">
                            <div className="row inner-box">
                                <div className="inner-wrap col-xl-6">
                                    <div className="inner-title text-lg">Make yourself at hom in <span>Our</span> hotel</div>
                                    <div className="inner-desc text-sm">Simple - unique - friendly</div>
                                    <div className="inner-btn">
                                        <div className="btn-search">Find a hotel</div>
                                        <div className="btn-watch">
                                            <i className="fa-solid fa-play"></i>
                                            <span>Watch video</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner-wrap col-xl-6">
                                    <img  className="inner-img" src={background1} alt="#"/>
                                </div>
                            </div>
                        </div>  
                    </div>            
                    <div className="inner-search">
                        <div className="inner-search__item">
                            <label for="location">
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Location</span>
                            </label>
                            <input type="text" id="location" name="location"/>
                        </div>
                        <div className="inner-search__item">
                            <label for="check-in">
                                <i className="fa-regular fa-calendar"></i>
                                <span>Check-in</span>
                            </label>
                            <input type="text" id="location" name="location"/>
                        </div>
                        <div className="inner-search__item">
                            <label for="location">
                                <i className="fa-regular fa-calendar"></i>
                                <span>Check-out</span>
                            </label>
                            <input type="text" id="location" name="location"/>
                        </div>
                        <div className="inner-search__item">
                            <label for="location">
                                <i className="fa-solid fa-user"></i>
                                <span>Person</span>
                            </label>
                            <input type="text" id="location" name="location"/>
                        </div>
                        <div className="inner-search__item">
                            <span>Search...</span>
                        </div>
                    </div>
                </div>
                <div className="section-two container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="inner-img">
                                <img src={background2} alt="#"/>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="inner-box">
                                <div className="inner-box__title">
                                    About us
                                </div>
                                <div className="inner-title text-md">
                                    The best holidays start <span>here.</span>
                                </div>
                                <div className="inner-desc text">There are many variations of passages of Lorem Ipsum avalibale, but in form, by injected humour, of Lorem Ipsum available, but in form. There</div>
                                <div className="inner-btn btn">Read more</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-three">
                    <div className="container">
                        <div className="inner-title text-md">Our Rooms</div>
                        <div className="inner-desc text">Enjoy our array of amenites for a relaxing stay</div>
                        <div className="row"> 
                            <div className="col-xl-4">
                                <div className="room">
                                    <img className="room__img" src={background3} alt="#"/>
                                    <div className="room-content">
                                        <span>
                                            <div className="room-content__name text-sm">Standard Room</div>
                                            <div className="room-content__price">
                                                <span>$ 96</span>
                                                <span>/</span>
                                                <span className="text p-none">Night</span></div>
                                        </span>
                                        <div className="room-content__intro text">
                                            La mot khach san day du tien ghi va thoai mai rat phu hop cho nguoi kha gia
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="room">
                                    <img className="room__img" src={background3} alt="#"/>
                                    <div className="room-content">
                                        <span>
                                            <div className="room-content__name text-sm">Standard Room</div>
                                            <div className="room-content__price">
                                                <span>$ 96</span>
                                                <span>/</span>
                                                <span className="text p-none">Night</span></div>
                                        </span>
                                        <div className="room-content__intro text">
                                            La mot khach san day du tien ghi va thoai mai rat phu hop cho nguoi kha gia
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="room">
                                    <img className="room__img" src={background3} alt="#"/>
                                    <div className="room-content">
                                        <span>
                                            <div className="room-content__name text-sm">Standard Room</div>
                                            <div className="room-content__price">
                                                <span>$ 96</span>
                                                <span>/</span>
                                                <span className="text p-none">Night</span></div>
                                        </span>
                                        <div className="room-content__intro text">
                                            La mot khach san day du tien ghi va thoai mai rat phu hop cho nguoi kha gia
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-four">
                    <div className="container">
                        <div className="inner-title text-lg p-none">Just follow our Steps and Get Everything</div>
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="inner-desc text">There are many variations of passages of Lorem Ispum available, but in from, by injected houmour,</div>
                                <ul className="advantage-list">
                                    <li className="advantage-list__item">
                                        <div className="advantage-list__index"><span>01</span></div>
                                        <div className="advantage-content">
                                            <div className="advantage-content__title text-sm p-none">Find a Hotel Your Want to Visit</div>
                                            <div className="advantage-content__desc text p-none">Visit our Website and Browser your hotel, you can asved and ready to book</div>
                                        </div>
                                    </li>
                                    <li className="advantage-list__item">
                                        <div className="advantage-list__index"><span>02</span></div>
                                        <div className="advantage-content">
                                            <div className="advantage-content__title text-sm p-none">Find a Hotel Your Want to Visit</div>
                                            <div className="advantage-content__desc text p-none">Visit our Website and Browser your hotel, you can asved and ready to book</div>
                                        </div>
                                    </li>
                                    <li className="advantage-list__item">
                                        <div className="advantage-list__index"><span>03</span></div>
                                        <div className="advantage-content">
                                            <div className="advantage-content__title text-sm p-none">Find a Hotel Your Want to Visit</div>
                                            <div className="advantage-content__desc text p-none">Visit our Website and Browser your hotel, you can asved and ready to book</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-4">
                                <div className="inner-img">
                                    <img src={background4} alt="#"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body;