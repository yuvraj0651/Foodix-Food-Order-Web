import { Col, Row } from 'react-bootstrap';
import AboutImage from "../../../../assets/Home/about/about-img.png";

const About = () => {
    return (
        <>
            <div className="about-section section-padding">
                <div className="about-section__inner">
                    <Row className='items-center'>
                        <Col xl={4} lg={5} md={4} sm={12} xs={12}>
                            <div className="about-section__picture mb-3">
                                <img src={AboutImage} alt="about-image" className='img-fluid' />
                            </div>
                        </Col>
                        <Col xl={8} lg={7} md={8} sm={12} xs={12}>
                            <div className="about-section__content font-poppins">
                                <p className="about-tagline m-0 capitalize tracking-wider font-[600] text-[#e31919] dark:text-amber-500 md:text-[1.1rem] lg:text-[1.2rem]">about us</p>
                                <h4 className="about-heading m-0 font-[700] capitalize text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] tracking-wider leading-6 pt-[0.2rem] pb-[0.5rem] dark:text-[#ccc]">delicia's about fresh flavorful dining</h4>
                                <p className='about-para m-0 font-[500] tracking-wide leading-6 text-[1.1rem] md:text-[1.1rem] lg:text-[1.25rem] lg:leading-7 text-[#2c2c2c] dark:text-[#ccc]'>
                                    We are passionate about serving fresh, flavorful dishes crafted with the finest ingredients. Every meal is thoughtfully prepared to deliver a memorable dining experience you'll love.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default About