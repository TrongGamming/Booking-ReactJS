import "../resource/css/Body.css"
import background1 from "../resource/img/background/backrground1.png"
import background2 from "../resource/img/background/backrground2.png"
import background3 from "../resource/img/background/background3.png"
import background4 from "../resource/img/background/background4.png"
import { useState } from "react"

const init = {
    location: 'TP.Hồ Chí Minh',
    checkIn: undefined,
    checkOut: undefined,
    person: '01',
}

function Body(){
    const [native, setNative] = useState(init);
    const onNativeChange = e => {
        console.log("onNativeChange: ", e.target.value);
        setNative({...native, [e.target.name] : `${e.target.value}`});
    };
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
                            <label htmlFor="person">
                                <i className="fa-solid fa-user"></i>
                                <span>Person</span>
                            </label>
                            <select id="person" name="person" value={native.person} onChange={onNativeChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                                <option value="51">51</option>
                                <option value="52">52</option>
                                <option value="53">53</option>
                                <option value="54">54</option>
                                <option value="55">55</option>
                                <option value="56">56</option>
                                <option value="57">57</option>
                                <option value="58">58</option>
                                <option value="59">59</option>
                                <option value="60">60</option>
                                <option value="61">61</option>
                                <option value="62">62</option>
                                <option value="63">63</option>
                                <option value="64">64</option>
                                <option value="65">65</option>
                                <option value="66">66</option>
                                <option value="67">67</option>
                                <option value="68">68</option>
                                <option value="69">69</option>
                                <option value="70">70</option>
                                <option value="71">71</option>
                                <option value="72">72</option>
                                <option value="73">73</option>
                                <option value="74">74</option>
                                <option value="75">75</option>
                                <option value="76">76</option>
                                <option value="77">77</option>
                                <option value="78">78</option>
                                <option value="79">79</option>
                                <option value="80">80</option>
                                <option value="81">81</option>
                                <option value="82">82</option>
                                <option value="83">83</option>
                                <option value="84">84</option>
                                <option value="85">85</option>
                                <option value="86">86</option>
                                <option value="87">87</option>
                                <option value="88">88</option>
                                <option value="89">89</option>
                                <option value="90">90</option>
                                <option value="91">91</option>
                                <option value="92">92</option>
                                <option value="93">93</option>
                                <option value="94">94</option>
                                <option value="95">95</option>
                                <option value="96">96</option>
                                <option value="97">97</option>
                                <option value="98">98</option>
                                <option value="99">99</option>
                                <option value="100">100</option>
                            </select>
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