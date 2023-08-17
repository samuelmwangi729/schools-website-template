import React, { useRef,Component } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {TfiBook,TfiArrowCircleDown} from 'react-icons/tfi'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../Styles/slider.css'
import UK from '../assets/UgaKarimaSymposium.png'
import PF from '../assets/principal DIG.jpg'
import PC from '../assets/Pioneer Captains.jpg'
import GH from '../assets/DIG Guard of Honor.jpg'
import { EffectCoverflow, Autoplay, Pagination, Navigation  } from 'swiper/modules';
class Slider extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render = () =>{
        return(
            <>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              speed={2500}
              autoplay={{
                delay: 50000,
                disableOnInteraction: false,
              }}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 1000,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={true}
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation ]}
              className="mySwiper"
            >
        <SwiperSlide>
          <div className="slideContent">
            <div className="sliderImage">
              <img src={PF} />
            </div>
            <div className="sliderComment">
              <h2>
                The Founder's Visit to Utumishi Girls Academy for jasdkjkjsjk
              </h2>
              <div className="description">
                <p>
                  Description Goes Here
                </p>
              </div>
              <div className="cta">
                <button>
                  <div className="btn-content">
                    <div className="btn-icon">
                      <TfiBook/>
                    </div>
                    <div className="btn-label">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContent">
            <div className="sliderImage">
              <img src={UK} />
            </div>
            <div className="sliderComment">
              <h2>
                Utumishi Girls Academy Invites Karima Girls
              </h2>
              <div className="description">
                <p>
                  Description Goes Here
                </p>
              </div>
              <div className="cta">
                <button>
                  <div className="btn-content">
                    <div className="btn-icon">
                      <TfiBook/>
                    </div>
                    <div className="btn-label">
                      More Information
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContent">
            <div className="sliderImage">
              <img src={GH} />
            </div>
            <div className="sliderComment">
              <h2>
                Utumishi Girls Academy
              </h2>
              <div className="description">
                <p>
                  Description Goes Here
                </p>
              </div>
              <div className="cta">
                <button>
                  Button 1
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContent">
            <div className="sliderImage">
              <img src={PC} />
            </div>
            <div className="sliderComment">
              <h2>
                Utumishi Girls Academy
              </h2>
              <div className="description">
                <p>
                  Description Goes Here
                </p>
              </div>
              <div className="cta">
                <button>
                  Button 1
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
            </>
        )
    }
}
export default Slider