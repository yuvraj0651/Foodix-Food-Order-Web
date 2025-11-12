import GalleryImg1 from "../../../../assets/Home/gallery/gallery-14.jpg";
import GalleryImg2 from "../../../../assets/Home/gallery/gallery-15.jpg";
import GalleryImg3 from "../../../../assets/Home/gallery/gallery-16.jpg";
import GalleryImg4 from "../../../../assets/Home/gallery/gallery-17.jpg";
import GalleryImg5 from "../../../../assets/Home/gallery/gallery-18.jpg";
import Slider from 'react-slick';

const Gallery = () => {

    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 0,
        speed: 4000,
        cssEase: "linear",
        swipe: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <>
            <div className="gallery-section">
                <div className="gallery-section__inner">
                    <Slider {...settings}>
                        <div className="gallery-item">
                            <img src={GalleryImg1} alt="gallery-img-1" className='img-fluid' />
                        </div>
                        <div className="gallery-item">
                            <img src={GalleryImg2} alt="gallery-img-1" className='img-fluid' />
                        </div>
                        <div className="gallery-item">
                            <img src={GalleryImg3} alt="gallery-img-1" className='img-fluid' />
                        </div>
                        <div className="gallery-item">
                            <img src={GalleryImg4} alt="gallery-img-1" className='img-fluid' />
                        </div>
                        <div className="gallery-item">
                            <img src={GalleryImg5} alt="gallery-img-1" className='img-fluid' />
                        </div>
                        <div className="gallery-item">
                            <img src={GalleryImg1} alt="gallery-img-1" className='img-fluid' />
                        </div>
                        <div className="gallery-item">
                            <img src={GalleryImg2} alt="gallery-img-1" className='img-fluid' />
                        </div>
                        <div className="gallery-item">
                            <img src={GalleryImg3} alt="gallery-img-1" className='img-fluid' />
                        </div>
                        <div className="gallery-item">
                            <img src={GalleryImg4} alt="gallery-img-1" className='img-fluid' />
                        </div>
                        <div className="gallery-item">
                            <img src={GalleryImg5} alt="gallery-img-1" className='img-fluid' />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Gallery