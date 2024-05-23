import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'
import '../../../styles/slider.css'

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        swipeToSlide: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <p className='review__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam nemo provident, illo, quas recusandae repellat sit culpa dolore aperiam animi molestiae exercitationem facilis vel amet deleniti consectetur quo nisi!
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img className='rounded' src={ava01} alt="avatarImg" />
                    <h6>John doe</h6>
                </div>
            </div>
            <div>
                <p className='review__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam nemo provident, illo, quas recusandae repellat sit culpa dolore aperiam animi molestiae exercitationem facilis vel amet deleniti consectetur quo nisi!
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img className='rounded' src={ava02} alt="avatarImg" />
                    <h6>Mitchel Marsh</h6>
                </div>
            </div>
            <div>
                <p className='review__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam nemo provident, illo, quas recusandae repellat sit culpa dolore aperiam animi molestiae exercitationem facilis vel amet deleniti consectetur quo nisi!
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img className='rounded' src={ava03} alt="avatarImg" />
                    <h6>Steven Crock</h6>
                </div>
            </div>
        </Slider>
    )
}

export default TestimonialSlider