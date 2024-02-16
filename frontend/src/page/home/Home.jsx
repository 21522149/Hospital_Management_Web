import React from "react";
import serviceicon1 from "../../components/images/service-icon-1.png"
import serviceicon2 from "../../components/images/service-icon-2.png"
import serviceicon3 from "../../components/images/service-icon-3.png"
import serviceicon4 from "../../components/images/service-icon-4.png"
import serviceicon5 from "../../components/images/service-icon-5.png"
import serviceicon6 from "../../components/images/service-icon-6.png"
import curveshape1 from "../../components/images/curve-shape-1.png"
import curveshape2 from "../../components/images/curve-shape-2.png"
import healthcareimg from "../../components/images/health-care-img.png"
import downloadimg from "../../components/images/download-image.png"
import arrowdown from "../../components/images/arrow-down.svg"
import elementimg3 from "../../components/images/element-img-3.png"
import elementimg5 from "../../components/images/element-img-5.png"
import personimg from "../../components/images//person-image.png"
import elementimg2 from "../../components/images/element-img-2.png"
import articles1 from "../../components/images/article-img-1.png"
import articles2 from "../../components/images/article-img-2.png"
import articles3 from "../../components/images/article-img-3.png"

function Home() {
    return (
        <main>
                <section class = "sc-services">
                    <div class = "services-shape">
                        {/* <img src = "assets/images/curve-shape-1.png" alt = ""> */}
                        <img src={curveshape1} alt="curve-shape-1"/>
                    </div>
                    <div class="container">
                        <div class = "services-content">
                            <div class="title-box text-center">
                                <div class = "content-wrapper">
                                    <h3 class = "title-box-name">Our services</h3>
                                    <div class = "title-separator mx-auto"></div>
                                    <p class = "text title-box-text">We provide you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                                </div>
                            </div>

                            <div class = "services-list">
                                <div class = "services-item">
                                    <div class = "item-icon">
                                        <img src={serviceicon1} alt="service-icon-1"/>
                                    </div>
                                    <h5 class = "item-title fw-7">Search doctor</h5>
                                    <p class = "text">Choose your doctor form thousands of specialist, general and trusted hospitals.</p>
                                </div>

                                <div class = "services-item">
                                    <div class = "item-icon">
                                        <img src={serviceicon2} alt="service-icon-2"/>
                                        {/* <img src = "assets/images/service-icon-2.png" alt = "service icon"> */}
                                    </div>
                                    <h5 class = "item-title fw-7">Online pharmacy</h5>
                                    <p class = "text">Buy your medicines with our mobile application with a simple delivery system</p>
                                </div>

                                <div class = "services-item">
                                    <div class = "item-icon">
                                        {/* <img src = "assets/images/service-icon-3.png" alt = "service icon"> */}
                                        <img src={serviceicon3} alt="service-icon-3"/>
                                    </div>
                                    <h5 class = "item-title fw-7">Consultation</h5>
                                    <p class = "text">Free consultation with our trusted doctors and get the best recommendations.</p>
                                </div>

                                <div class = "services-item">
                                    <div class = "item-icon">
                                    <img src={serviceicon4} alt="service-icon-4"/>
                                        {/* <img src = "assets/images/service-icon-4.png" alt = "service icon"> */}
                                    </div>
                                    <h5 class = "item-title fw-7">Details info</h5>
                                    <p class = "text">Free consultation with our trusted doctors and get the best recommendations.</p>
                                </div>

                                <div class = "services-item">
                                    <div class = "item-icon">
                                        <img src={serviceicon5} alt="service-icon-5"/>
                                        {/* <img src = "assets/images/service-icon-5.png" alt = "service icon"> */}
                                    </div>
                                    <h5 class = "item-title fw-7">Emergency care</h5>
                                    <p class = "text">You can get 24/7 urgent care for yourself or your children and your lovely family.</p>
                                </div>

                                <div class = "services-item">
                                    <div class = "item-icon">
                                        <img src={serviceicon6} alt="service-icon-6"/>
                                        {/* <img src = "assets/images/service-icon-6.png" alt = "service icon"> */}
                                    </div>
                                    <h5 class = "item-title fw-7">Tracking</h5>
                                    <p class = "text">Track and save your mental history and health data</p>
                                </div>
                            </div>

                            <div class = "d-flex align-items-center justify-content-center services-main-btn">
                                <button type = "button" class = "btn btn-primary-outline">Learn more</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section class = "sc-grid sc-grid-one">
                    <div class="container">
                        <div class = "grid-content d-grid align-items-center">
                            <div class = "grid-img">
                                {/* <img src = "assets/images/health-care-img.png" alt = ""> */}
                                <img src={healthcareimg} alt="grid-img"/>
                            </div>
                            <div class = "grid-text">
                                <div class = "content-wrapper text-start">
                                    <div class = "title-box">
                                        <h3 class = "title-box-name text-white">Leading healthcare providers</h3>
                                        <div class = "title-separator mx-auto"></div>
                                    </div>

                                    <p class = "text title-box-text text-white">Medimoor provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver</p>
                                    <button type = "button" class = "btn btn-white-outline">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class = "sc-grid sc-grid-two">
                    <div class = "container">
                        <div class = "grid-content d-grid align-items-center">
                            <div class = "grid-img">
                                {/* <img src = "assets/images/download-image.png" alt = ""> */}
                                <img src={downloadimg} alt="dowdload-img"/>
                            </div>
                            <div class = "grid-text">
                                <div class = "content-wrapper text-start">
                                    <div class = "title-box">
                                        <h3 class = "title-box-name">Download our mobile apps</h3>
                                        <div class = "title-separator mx-auto"></div>
                                    </div>
                                    <p class = "text title-box-text">Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
                                    <button type = "button" class = "btn btn-primary-outline">
                                        Download
                                        {/* <img src = "assets/images/arrow-down.svg" /> */}
                                        <img src={arrowdown} alt="arrown-down  "/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class = "sc-feedback">
                    <div class="container">
                        <div class = "feedback-content">
                            <div class = "feedback-element">
                                {/* <img src = "assets/images/element-img-3.png"> */}
                                <img src={elementimg3} alt="element-img-3"/>
                            </div>
                            <div class="feedback-element-2">
                                {/* <img src = "assets/images/element-img-5.png"> */}
                                <img src={elementimg5} alt="element-img-5"/>
                            </div>
                            <div class = "title-box text-center">
                                <div class = "content-wrapper">
                                    <h3 class = "title-box-name text-white">What our customer are saying</h3>
                                    <div class = "title-separator mx-auto"></div>
                                </div>
                            </div>

                            <div class = "feedback-list feedback-slider owl-carousel owl-theme">
                                <div class = "feedback-item d-grid">
                                    <div class = "item-left d-flex align-items-center">
                                        <div class = "item-img">
                                            {/* <img src = "assets/images/person-image.png" alt = ""> */}
                                            <img src={personimg} alt="person-img"/>
                                        </div>
                                        <div class = "item-info text-white">
                                            <p class = "fw-7 name">Edward Newgate</p>
                                            <span class = "designation fw-4">Founder Circle</span>
                                        </div>
                                    </div>
                                    <div class = "item-right">
                                        <p class = "text text-white">"Our dedicated patient engagement app and web portal allow you to access information instantaneoulsy (no tedeous form, long calls, or administrative hassle) and securely"</p>
                                    </div>
                                </div>

                                <div class = "feedback-item d-grid">
                                    <div class = "item-left d-flex align-items-center">
                                        <div class = "item-img">
                                        <img src={personimg} alt="person-img"/>
                                            {/* <img src = "assets/images/person-image.png" alt = ""> */}
                                        </div>
                                        <div class = "item-info text-white">
                                            <p class = "fw-7 name">Edward Newgate</p>
                                            <span class = "designation fw-4">Founder Circle</span>
                                        </div>
                                    </div>
                                    <div class = "item-right">
                                        <p class = "text text-white">"Our dedicated patient engagement app and web portal allow you to access information instantaneoulsy (no tedeous form, long calls, or administrative hassle) and securely"</p>
                                    </div>
                                </div>

                                <div class = "feedback-item d-grid">
                                    <div class = "item-left d-flex align-items-center">
                                        <div class = "item-img">
                                            <img src={personimg} alt="person-img"/>
                                            {/* <img src = "assets/images/person-image.png" alt = ""> */}
                                        </div>
                                        <div class = "item-info text-white">
                                            <p class = "fw-7 name">Simon Paul</p>
                                            <span class = "designation fw-4">Founder Circle</span>
                                        </div>
                                    </div>
                                    <div class = "item-right">
                                        <p class = "text text-white">"Our dedicated patient engagement app and web portal allow you to access information instantaneoulsy (no tedeous form, long calls, or administrative hassle) and securely"</p>
                                    </div>
                                </div>

                                <div class = "feedback-item d-grid">
                                    <div class = "item-left d-flex align-items-center">
                                        <div class = "item-img">
                                        <img src={personimg} alt="person-img"/>
                                            {/* <img src = "assets/images/person-image.png" alt = ""> */}
                                        </div>
                                        <div class = "item-info text-white">
                                            <p class = "fw-7 name">John Doe</p>
                                            <span class = "designation fw-4">Founder Circle</span>
                                        </div>
                                    </div>
                                    <div class = "item-right">
                                        <p class = "text text-white">"Our dedicated patient engagement app and web portal allow you to access information instantaneoulsy (no tedeous form, long calls, or administrative hassle) and securely"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class = "sc-articles">
                    <div class = "articles-shape">
                        {/* <img src = "assets/images/curve-shape-2.png" alt = ""> */}
                        <img src={curveshape2} alt="curve-shape-2"/>
                    </div>
                    <div class = "container">
                        <div class = "articles-content">
                            <div class = "articles-element">
                                <img src={elementimg2} alt="element-img-2"/>
                                {/* <img src = "assets/images/element-img-2.png" alt = ""> */}
                            </div>
                            <div class = "title-box text-center">
                                <div class = "content-wrapper">
                                    <h3 class = "title-box-name">Check out our latest article</h3>
                                    <div class = "title-separator mx-auto"></div>
                                </div>
                            </div>

                            <div class = "articles-list d-flex flex-wrap justify-content-center">
                                <article class = "articles-item">
                                    <div class = "item-img">
                                        <img src={articles1} alt="articles-1"/>
                                        {/* <img src = "assets/images/article-img-1.png"> */}
                                    </div>
                                    <div class = "item-body">
                                        <div class = "item-title">Disease detection, check up in the laboratory</div>
                                        <p class = "text">In this case, the role of the health laboratory is very important to do a disease detection ...</p>
                                        <a href = "#" class = "item-link text-blue d-flex align-items-baseline">
                                            <span class = "item-link-text">Read more</span>
                                            <span class = "item-link-icon">
                                                <i class = "fas fa-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </article>

                                <article class = "articles-item">
                                    <div class = "item-img">
                                    <img src={articles2} alt="articles-2"/>
                                        {/* <img src = "assets/images/article-img-2.png"> */}
                                    </div>
                                    <div class = "item-body">
                                        <div class = "item-title">Herbal medicines that are safe for consumption</div>
                                        <p class = "text">Herbal medicine is very widely used at this time because of its very good for your health ...</p>
                                        <a href = "#" class = "item-link text-blue d-flex align-items-baseline">
                                            <span class = "item-link-text">Read more</span>
                                            <span class = "item-link-icon">
                                                <i class = "fas fa-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </article>

                                <article class = "articles-item">
                                    <div class = "item-img">
                                    <img src={articles3} alt="articles-3"/>
                                        {/* <img src = "assets/images/article-img-3.png"> */}
                                    </div>
                                    <div class = "item-body">
                                        <div class = "item-title">Natural care for healthy facial skin</div>
                                        <p class = "text">A healthy lifestyle should start from now and also for your skin health ...</p>
                                        <a href = "#" class = "item-link text-blue d-flex align-items-baseline">
                                            <span class = "item-link-text">Read more</span>
                                            <span class = "item-link-icon">
                                                <i class = "fas fa-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </ div>
                </section>
                </main>
    );
}

export default Home;