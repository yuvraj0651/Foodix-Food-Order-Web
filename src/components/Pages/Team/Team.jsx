import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb';
import TeamImg1 from "../../../assets/Team-Page/team-img-1.jpg";
import TeamImg2 from "../../../assets/Team-Page/team-img-2.jpg";
import TeamImg3 from "../../../assets/Team-Page/team-img-3.jpg";
import TeamImg4 from "../../../assets/Team-Page/team-img-4.jpg";
import TeamImg5 from "../../../assets/Team-Page/team-img-5.jpg";
import TeamImg6 from "../../../assets/Team-Page/team-img-6.jpg";

const Team = () => {

    const TeamData = [
        {
            id: 1,
            TeamImage: TeamImg1,
            TeamTitle: "john carry",
            TeamDesignation: "Executive Chef",
        },
        {
            id: 2,
            TeamImage: TeamImg2,
            TeamTitle: "alexa lora",
            TeamDesignation: "junior chef",
        },
        {
            id: 3,
            TeamImage: TeamImg3,
            TeamTitle: "hany smith",
            TeamDesignation: "junior chef",
        },
        {
            id: 4,
            TeamImage: TeamImg4,
            TeamTitle: "david liam",
            TeamDesignation: "junior chef",
        },
        {
            id: 5,
            TeamImage: TeamImg5,
            TeamTitle: "olivia eva",
            TeamDesignation: "junior chef",
        },
        {
            id: 6,
            TeamImage: TeamImg6,
            TeamTitle: "john jonson",
            TeamDesignation: "junior chef",
        },
    ]

    return (
        <>
            <div className="team-page content-padding font-poppins md:!pt-[3.7rem] xxl:!pt-[3.7rem] lg:pt-[4rem]">
                <div className="menu-page__inner">
                    <Breadcrumb />
                </div>
                <div className="our-team-block section-padding bg-amber-50 pb-4 dark:bg-slate-700">
                    <div className="our-team_top-section text-center mb-3">
                        <h4 className="team-title dark:text-[#ccc] uppercase font-[600] tracking-wider lg:text-[1.5rem]">Meet our special chef</h4>
                        <p className="team-subtitle dark:text-[#ccc] lg:pt-[0.1rem] tracking-wide text-[0.8rem]">Introducing our esteemed culinary virtuoso, a maestro of flavors crafting exquisite dishes with passion, precision, and a touch of magic.</p>
                    </div>
                    <div className="our-team__bottom-section">
                        {
                            TeamData.map((team) => (
                                <div className="team-card relative hover:cursor-pointer lg:mt-3">
                                    <div className="our_team-card-image border-[0.5rem] border-red-700 rounded-[1.25rem] lg:w-[21rem] h-[23rem] overflow-hidden relative shadow-sm shadow-[#ccc] dark:border-slate-500">
                                        <img src={team.TeamImage} alt={team.TeamTitle} className='w-full h-[23rem] object-cover' />
                                    </div>
                                    <div className="tag our-team-card-content w-[15rem] h-[4rem] bg-amber-50 dark:bg-slate-600 flex items-center flex-col justify-center absolute bottom-0 right-[0.48rem] border-t-[0.5rem] border-red-700 dark:border-slate-500 border-l-[0.5rem] after:bg-amber-400 after:top-[-1.50rem] after:right-0 after:bg-transparent rounded-[0.5rem] after:dark:shadow-none">
                                        <div className="card-content-box border-2 border-red-700 bg-white py-[0.1rem] px-[0.6rem] w-[94%] mt-[0.5rem] flex flex-col items-center justify-center rounded-[0.5rem] shadow-sm shadow-[#ccc] pt-[0.2rem] dark:border-slate-500">
                                            <h4 className="team_name m-0 capitalize tracking-wide text-[1.25rem]">{team.TeamTitle}</h4>
                                            <p className="team_designation m-0 tracking-wide capitalize text-[0.9rem]">{team.TeamDesignation}</p>
                                        </div>
                                    </div>
                                    <div className="curve-one bg-amber-400 left-[5.3rem] bottom-0 bg-transparent shadow-slate-600 dark:shadow-none"></div>
                                    <div className="curve-two"></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team