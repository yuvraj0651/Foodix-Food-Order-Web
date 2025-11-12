import Breadcrumb from '../../../UI/Breadcrumb/Breadcrumb';
import BlogImage1 from "../../../../assets/Blog/blog-image-1.jpg";
import RelatedImage1 from "../../../../assets/blog-detail/blog-single-1.jpg";
import RelatedImage2 from "../../../../assets/blog-detail/blog-single-2.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Col, Row } from 'react-bootstrap';
import RecentPostImageOne from "../../../../assets/blog-detail/recent-blogs/post-thumb-1.jpg";
import RecentPostImageTwo from "../../../../assets/blog-detail/recent-blogs/post-thumb-2.jpg";
import RecentPostImageThree from "../../../../assets/blog-detail/recent-blogs/post-thumb-3.jpg";
import RecentPostImageFour from "../../../../assets/blog-detail/recent-blogs/post-thumb-4.jpg";
import { useParams } from 'react-router-dom';
import blogJson from "../../../API/blog.json";

const BlogDetails = () => {

    const { id } = useParams();
    const blog = blogJson.blogs.find((item) => item.id === id);

    if (!blog) {
        return <div className="text-center py-10 text-red-500 font-semibold">Blog not found!</div>;
    }

    return (
        <>
            <div className="blog-details-page pt-[3.5rem] lg:pt-[4rem] font-montserrat bg-slate-50 dark:bg-slate-700">
                <Breadcrumb />
                <div className="blog-details__inner section-padding">
                    <div className="blog-details__back-button mb-3">
                        <a href="/blog" className='no-underline font-[500] border border-[#ccc] py-2 px-3 shadow-sm shadow-[#ccc] bg-slate-500 text-[#fff] cursor-pointer rounded-[6px]'>Back</a>
                    </div>
                    <div className="blog-details__content-block grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
                        <div className="blog-main">
                            <h4 className="blog-detail-title m-0 capitalize tracking-wide font-[600] leading-7 lg:leading-9 mb-[0.3rem] text-[1.1rem] lg:text-[1.7rem] dark:text-[#ccc]">{blog.blogTitle}</h4>
                            <div className="blog-detail-meta-data flex items-center gap-[0.4rem] pb-3 lg:pb-4 font-[500] text-[0.8rem] lg:text-[0.9rem]">
                                <span className='blog-tag capitalize tracking-wider dark:text-[#ccc]'>{blog.blogTag}</span>
                                <span className="blog-date tracking-wider dark:text-[#ccc]">{blog.blogDate}</span>
                            </div>
                            <div className="blog-detail-picture">
                                <img src={blog.blogImage} alt={blog.blogTitle} className='img-fluid w-full shadow-sm shadow-[#ccc]' />
                            </div>
                            <div className="blog-detail__para-block py-4">
                                <p className='m-0 tracking-wider font-[500] text-[0.9rem] lg:text-[1rem] leading-[1.5rem] lg:leading-[1.7rem] text-justify dark:text-[#ccc]'>{blog.blogDescription}</p>
                                <p className="blog-detail_subPara m-0 pt-3 tracking-wider text-[0.9rem] lg:text-[1rem] font-[500] leading-[1.5rem] lg:leading-[1.7rem] text-justify dark:text-[#ccc]">
                                    Discover the artistry of blending flavors and techniques from different cuisines. Explore how culinary fusion can result in unique and tantalizing dishes that transcend cultural boundaries. From Japanese-Peruvian fusion to modern twists on classic comfort foods, we'll take you on a global taste tour that celebrates the beauty of culinary creativity.
                                </p>
                            </div>
                            <div className="blog-detail__related-image-block flex items-center gap-3 border-b border-[#ccc] pb-4 dark:border-slate-500">
                                <div className="related-image">
                                    <img src={RelatedImage1} alt="related-image" className='img-fluid shadow-sm shadow-[#ccc] rounded-[10px]' />
                                </div>
                                <div className="related-image">
                                    <img src={RelatedImage2} alt="related-image" className='img-fluid shadow-sm shadow-[#ccc] rounded-[10px]' />
                                </div>
                            </div>
                            <div className="blog-detail-tags-social flex flex-col mt-2 lg:flex-row items-start justify-between pt-2">
                                <div className="blog-detail-tags lg:pb-0 pb-2">
                                    <ul className="blog-tags m-0 pl-0 flex items-center gap-[0.7rem]">
                                        <li>tags:</li>
                                        <li>beers</li>
                                        <li>burgers</li>
                                        <li>pizzas</li>
                                    </ul>
                                </div>
                                <div className="blog-detail-social flex items-center gap-2">
                                    <h4 className='m-0 uppercase tracking-wide font-[600] text-[0.8rem] lg:text-[0.9rem] dark:text-[#ccc]'>share:</h4>
                                    <ul className="blog-socials flex items-center gap-2 m-0 pl-0">
                                        <li className='list-none'><a href="/">
                                            <FaFacebook className='social-icon facebook-icon text-[#222] dark:text-[#ccc]' />
                                        </a></li>
                                        <li className='list-none'><a href="/">
                                            <FaLinkedin className='social-icon linkedin-icon text-[#222] dark:text-[#ccc]' />
                                        </a></li>
                                        <li className='list-none'><a href="/">
                                            <FaTelegramPlane className='social-icon telegram-icon text-[#222] dark:text-[#ccc]' />
                                        </a></li>
                                        <li className='list-none'><a href="/">
                                            <FaInstagram className='social-icon instagram-icon text-[#222] dark:text-[#ccc]' />
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="blog-side-meta">
                            <div className="blog-meta__search-block border border-slate-500 shadow-sm shadow-[#ccc] bg-slate-200 rounded-[10px] pt-3 pb-4 px-4 dark:bg-slate-600 dark:border-slate-700 dark:shadow-slate-700">
                                <h4 className="search-heading font-[500] tracking-wide text-[1rem] capitalize dark:text-[#fff]">search:</h4>
                                <div className="search-input-block relative">
                                    <input type="text" name="search-box" id="search-box" className='search-box w-full px-2 py-[0.3rem] placeholder:capitalize placeholder:font-[500] tracking-wide font-[400] focus: border-0 outline-0 text-[0.9rem] dark:bg-slate-500 dark:text-[#fff] dark:placeholder:text-[#fff]' placeholder='search here...' />
                                    <div className="search-icon-block absolute top-2 right-2">
                                        <HiMagnifyingGlass className='search-icon dark:text-[#fff]' />
                                    </div>
                                </div>
                            </div>
                            <div className="recent-posts-block lg:sticky lg:top-[4.5rem] mt-4 border border-[#ccc] dark:border-slate-600 py-3 px-3 bg-slate-200 rounded-[10px] dark:bg-slate-600">
                                <h4 className='m-0 uppercase font-[600] tracking-wide text-[1rem] dark:text-[#fff]'>recent posts :-</h4>
                                <div className="recent-posts_card-block">
                                    <div className="recent-post-card mt-3 rounded-[10px] border dark:border-slate-600 border-[#ccc] bg-slate-50 px-[0.8rem] py-[0.6rem] dark:bg-slate-600">
                                        <Row className='items-center'>
                                            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="recent-post-picture">
                                                    <img src={RecentPostImageOne} alt="recent-post" className='img-fluid rounded-[5px]' />
                                                </div>
                                            </Col>
                                            <Col xl={8} lg={8} md={8} sm={8} xs={8} className='px-0'>
                                                <div className="recent-post-details">
                                                    <h3 className='m-0 text-[#222] font-[500] tracking-wide text-[0.78rem] leading-[1.1rem] dark:text-[#fff]'>
                                                        Flavorful Fusion: Exploring the Art of culinary blending
                                                    </h3>
                                                    <span className="recent-blog-date font-[500] tracking-wide text-[0.8rem] dark:text-[#fff]">May 10 , 2024</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="recent-post-card mt-[0.7rem] rounded-[10px] dark:border-slate-600 border border-[#ccc] bg-slate-50 px-[0.8rem] py-[0.6rem] dark:bg-slate-600">
                                        <Row className='items-center'>
                                            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="recent-post-picture">
                                                    <img src={RecentPostImageTwo} alt="recent-post" className='img-fluid rounded-[5px]' />
                                                </div>
                                            </Col>
                                            <Col xl={8} lg={8} md={8} sm={8} xs={8} className='px-0'>
                                                <div className="recent-post-details">
                                                    <h3 className='m-0 text-[#222] dark:text-[#fff] font-[500] tracking-wide text-[0.78rem] leading-[1.1rem]'>
                                                        Chef Spotlight: Behind the scenes
                                                        of culinary mastery
                                                    </h3>
                                                    <span className="recent-blog-date font-[500] tracking-wide text-[0.8rem] dark:text-[#fff]">May 10 , 2024</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="recent-post-card mt-[0.7rem] rounded-[10px] dark:border-slate-600 border border-[#ccc] bg-slate-50 px-[0.8rem] py-[0.6rem] dark:bg-slate-600">
                                        <Row className='items-center'>
                                            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="recent-post-picture">
                                                    <img src={RecentPostImageThree} alt="recent-post" className='img-fluid rounded-[5px]' />
                                                </div>
                                            </Col>
                                            <Col xl={8} lg={8} md={8} sm={8} xs={8} className='px-0'>
                                                <div className="recent-post-details">
                                                    <h3 className='m-0 text-[#222] dark:text-[#fff] font-[500] tracking-wide text-[0.78rem] leading-[1.1rem]'>
                                                        Time-Honored recipes with a
                                                        modern twist
                                                    </h3>
                                                    <span className="recent-blog-date font-[500] tracking-wide text-[0.8rem] dark:text-[#fff]">May 14 , 2024</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="recent-post-card mt-[0.7rem] rounded-[10px] dark:border-slate-600 border border-[#ccc] bg-slate-50 px-[0.8rem] py-[0.6rem] dark:bg-slate-600">
                                        <Row className='items-center'>
                                            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="recent-post-picture">
                                                    <img src={RecentPostImageFour} alt="recent-post" className='img-fluid rounded-[5px]' />
                                                </div>
                                            </Col>
                                            <Col xl={8} lg={8} md={8} sm={8} xs={8} className='px-0'>
                                                <div className="recent-post-details">
                                                    <h3 className='m-0 text-[#222] dark:text-[#fff] font-[500] tracking-wide text-[0.78rem] leading-[1.1rem]'>
                                                        Exploring authentic cuisine from
                                                        around the world
                                                    </h3>
                                                    <span className="recent-blog-date font-[500] tracking-wide text-[0.8rem] dark:text-[#fff]">May 20 , 2024</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails