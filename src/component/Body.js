import "../resource/css/Body.css"
import background1 from "../resource/img/background/backrground1.png"
import background2 from "../resource/img/background/backrground2.png"
import background3 from "../resource/img/background/background3.png"
import background4 from "../resource/img/background/background4.png"
import { useState } from "react"

const getParent = (e, selector) => {
    const selectorE = document.querySelector(selector);
    while(e.getParent.contains(selectorE)){
        e = e.parentNode;
    }
    return e;
}

const init = {
    location: 'TP.Hồ Chí Minh',
    checkIn: undefined,
    checkOut: undefined,
    person: {
        adult: 2,
        baby: 0,
    },
}

function Body(){
    const [native, setNative] = useState(init);
    const onNativeChange = e => {
        console.log("onNativeChange: ", e.target.value);
        setNative({...native, [e.target.name] : `${e.target.value}`});
    };
    const clickUp = e => {
        const name = e.target.getAttribute('name');
        setNative({...native, person:{
            ...native.person,
            [name] : (native.person[name] + 1),
        }})
        console.log(native.person[name])
    }
    const clickDown = e => {
        const name = e.target.getAttribute('name');
        setNative({...native, person:{
            ...native.person,
            [name] : (native.person[name]  && native.person[name] - 1),
        }})
    }

    const clickPerson = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const details = document.querySelector('.details');
        if(details.classList.contains('open')){
            details.classList.remove('open');
            details.classList.add('closed');
        } else {
            details.classList.add('open');
            details.classList.remove('closed');
        }
    }

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
                                        <div className="btn-search btn">Find a hotel</div>
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
                            <label htmlFor="location">
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Location</span>
                            </label>
                            <select id="location" name="location" value={native.location} onChange={onNativeChange}>
                                <option value="HCM">TP.Hồ Chí Minh</option>
                                <option value="DaNang">Đà Nẵng</option>
                                <option value="VungTau">Vũng Tàu</option>
                                <option value="HaNoi">Hà Nội</option>
                                <option value="NhaTrang">Nha Trang</option>
                            </select>
                        </div>
                        <div className="inner-search__item">
                            <label htmlFor="checkIn">
                                <i className="fa-regular fa-calendar"></i>
                                <span>Check-in</span>
                            </label>
                            <input type="date" id="checkIn" name="checkIn" value={native.checkIn} onChange={onNativeChange}/>
                        </div>
                        <div className="inner-search__item">
                            <label htmlFor="checkOut">
                                <i className="fa-regular fa-calendar"></i>
                                <span>Check-out</span>
                            </label>
                            <input type="date" name="checkOut" id="checkOut" value={native.checkOut} onChange={onNativeChange}/>
                        </div>
                        <div className="inner-search__item">
                            <div className="wrap" onClick={clickPerson}>
                                <div className="person">
                                    <i className="fa-solid fa-user"></i>
                                    <span>Person</span>
                                </div>
                                <div className="person__details">{native.person.adult} nguoi lon * {native.person.baby} tre em</div>
                            </div>
                            <div className="details closed">
                                <div className="row">
                                    <div className="adult">
                                        Nguoi lon
                                    </div>
                                    <div className="adult-quality row">
                                        <div name="adult" className="adult-quality__down" onClick={clickDown}><span name="adult">-</span></div>
                                        <div className="adult-quality__value"><span>{native.person.adult}</span></div>
                                        <div name="adult" className="adult-quality__up" onClick={clickUp}><span name="adult">+</span></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="baby">
                                        Trem em
                                    </div>
                                    <div className="baby-quality row">
                                        <div name="baby" className="baby-quality__up" onClick={clickDown}><span name="baby">-</span></div>
                                        <div className="baby-quality__value"><span>{native.person.baby}</span></div>
                                        <div name="baby" className="baby-quality__down" onClick={clickUp}><span name="baby">+</span></div>
                                    </div>
                                </div>
                                <div onClick={clickPerson} className="row">
                                    <div className="btn details__done">
                                        Xong
                                    </div>
                                </div>
                            </div>
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