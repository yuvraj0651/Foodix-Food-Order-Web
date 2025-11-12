import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb';
import { BsCalendarDateFill } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import blogJson from "../../API/blog.json";
import { Link } from 'react-router-dom';

const Blog = () => {

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        setBlogData(blogJson.blogs);
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const totalPages = Math.ceil(blogData.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const currentBlogs = blogData.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <div className="blog-page pt-[3.5rem] lg:pt-[4rem] pb-[0.5rem] lg:pb-0 bg-slate-200 dark:bg-slate-700">
                <Breadcrumb pageTitle="Blog" />
                <div className="blog-page__inner section-padding">
                    <div className="blog-page_top-section text-center font-montserrat">
                        <h4 className="blog-heading uppercase tracking-wide font-[600] m-0 leading-7 text-[1.2rem] lg:text-[1.4rem] sm:text-[1.3rem] dark:text-[#ccc]">blog page</h4>
                        <p className="blog-sub-heading capitalize tracking-wide font-[500] pt-[0.3rem] text-[0.85rem] lg:pt-[0.4rem] m-0 lg:text-[0.9rem] leading-[1.3rem] sm:text-[0.85rem] dark:text-[#ccc]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, illo?</p>
                    </div>
                    <div className="blog-page_bottom-section mt-7">
                        <div className="blog-page__blog-card-block">
                            {
                                currentBlogs.map((blog) => (
                                    <div key={blog.id} className="blog-card active:border rounded-[10px] active:border-amber-600 border border-[#ccc] dark:border-slate-600 shadow-sm shadow-[#ccc] dark:shadow-slate-600 font-montserrat hover:transform hover:scale-[1.02] hover:cursor-pointer transition-all duration-300">
                                        <div className="blog-picture overflow-hidden">
                                            <img src={blog.blogImage} alt="blog-image-1" className="img-fluid w-full hover:transition-all duration-300" />
                                        </div>
                                        <div className="blog-card__details py-3 px-3 bg-white hover:bg-slate-200">
                                            <div className="blog-card__meta-data flex items-center justify-between">
                                                <span className="blog-tag flex items-center gap-1 tracking-wide font-[500] capitalize lg:text-[0.9rem]"><FaHashtag className='light-hashtag' />{blog.blogTag}</span>
                                                <div className="blog-date">
                                                    <span className='date flex items-center gap-1 tracking-wide capitalize font-[500] lg:text-[0.9rem]'>
                                                        <BsCalendarDateFill className='light-theme-icon' />
                                                        {/* <BsCalendar2Date className='dark-theme-icon' /> */}
                                                        {blog.blogDate}</span>
                                                </div>
                                            </div>
                                            <div className="blog-card__content py-[0.6rem]">
                                                <h4 className="blog-cars__headingText m-0 pb-[0.2rem] capitalize font-[500] tracking-wide text-[1.3rem] lg:text-[1.1rem] sm:text-[1.1rem]">{blog.blogTitle}</h4>
                                                <p className="blog-card__subheading m-0 normal font-[400] tracking-wide text-[1rem] lg:line-clamp-2">{blog.blogDescription}</p>
                                            </div>
                                            <div className="blog-card__learn-more-btn">
                                                <Link to={`/blog/${blog.id}`} className='flex items-center gap-[0.4rem] no-underline text-[0.9rem] text-red-700'>
                                                    <span className='font-[500] tracking-wide capitalize'>{blog.learnMore}</span>
                                                    <FaArrowRightLong className='arrow-icon' />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="page-pagination-block mt-4 lg:mt-7">
                            <ul className="pagination-list flex items-center justify-center gap-[0.4rem]">
                                <li className="pagination-item">
                                    <button
                                        type="button"
                                        className="pagination-link"
                                        disabled={currentPage === 1}
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    >prev
                                    </button>
                                </li>
                                {
                                    Array.from({ length: totalPages }, (_, index) => (
                                        <li key={index} className={`pagination-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                            <button
                                                type="button"
                                                className="pagination-link"
                                                onClick={() => handlePageChange(index + 1)}
                                            >{index + 1}
                                            </button>
                                        </li>
                                    ))
                                }
                                <li className="pagination-item">
                                    <button
                                        type="button"
                                        className="pagination-link"
                                        disabled={currentPage === totalPages}
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    >next
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog