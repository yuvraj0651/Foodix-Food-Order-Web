import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <>
            {/* Common Page Banner */}
            <div className="page-banner pt-[4rem] pb-[3.7rem] lg:py-[4rem]">
                <div className="banner-details text-center">
                    <h4 className="page-title capitalize text-slate-100 font-[600] tracking-wider text-[1.3rem] sm:text-[1.4rem] lg:text-[2.3rem]">
                        {pathnames.length > 0
                            ? pathnames[pathnames.length - 1].replace(/-/g, ' ')
                            : 'Home'}
                    </h4>
                    <div className="page-breadcrumb text-slate-100 flex items-center justify-center gap-[0.7rem] lg:pt-1">
                        <Link to="/" className='main-link text-decoration-none text-slate-100 capitalize tracking-wide font-[500] text-[0.8rem] lg:text-[1rem]'>
                            Home
                        </Link>
                        {pathnames.map((name, index) => {
                            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathnames.length - 1;

                            return (
                                <React.Fragment key={name}>
                                    <span className='text-[1.1rem]'>~</span>
                                    {
                                        isLast ? (
                                            <span className="sub-link capitalize text-slate-400 font-[500] text-[0.8rem] lg:text-[1rem]">
                                                {name.replace(/-/g, ' ')}
                                            </span>
                                        ) : (
                                            <Link
                                                to={routeTo}
                                                className="sub-link text-slate-100 capitalize tracking-wide font-[500] text-[0.8rem] lg:text-[1rem]"
                                            >
                                                {name.replace(/-/g, ' ')}
                                            </Link>
                                        )
                                    }
                                </React.Fragment>
                            );
                        })}
                </div>
            </div>
        </div >
            {/* Common Page Banner */ }
        </>
    )
}

export default Breadcrumb