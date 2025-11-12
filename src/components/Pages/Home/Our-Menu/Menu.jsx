import { MdFastfood } from "react-icons/md";
import MenuImage1 from "../../../../assets/Home/menu/menu-food-3.png";
import MenuImage2 from "../../../../assets/Home/menu/menu-food-2.png";
import MenuImage3 from "../../../../assets/Home/menu/menu-food-3.png";
import MenuImage4 from "../../../../assets/Home/menu/menu-food-4.png";
import MenuImage5 from "../../../../assets/Home/menu/menu-food-5.png";
import MenuImage6 from "../../../../assets/Home/menu/menu-food-6.png";
import MenuImage7 from "../../../../assets/Home/menu/menu-food-7.png";
import MenuImage8 from "../../../../assets/Home/menu/menu-food-8.png";

const Menu = () => {

    const foodMenuDetails = [
        {
            id: 1,
            foodImage: MenuImage1,
            foodTitle: "truffle mac and cheese",
            foodDesc: "Indulgent mac and cheese with truffle essence",
            foodPrice: "25.50"
        },
        {
            id: 1,
            foodImage: MenuImage2,
            foodTitle: "grilled ribeye steak",
            foodDesc: "Perfectly grilled ribeye steak with savory seasoning",
            foodPrice: "25.50"
        },
        {
            id: 1,
            foodImage: MenuImage3,
            foodTitle: "honey-glazed salmon",
            foodDesc: "Sweet and savory honey-glazed salmon fillet",
            foodPrice: "25.50"
        },
        {
            id: 1,
            foodImage: MenuImage4,
            foodTitle: "the coconut curry",
            foodDesc: "Fragrant Thai coconut curry with vibrant vegetables",
            foodPrice: "25.50"
        },
        {
            id: 1,
            foodImage: MenuImage5,
            foodTitle: "gourmet mushroom risotto",
            foodDesc: "Rich, creamy risotto with gourmet mushrooms",
            foodPrice: "25.50"
        },
        {
            id: 1,
            foodImage: MenuImage6,
            foodTitle: "margarita shrimp tacos",
            foodDesc: "Zesty shrimp tacos with fresh margarita flavor",
            foodPrice: "25.50"
        },
        {
            id: 1,
            foodImage: MenuImage7,
            foodTitle: "BBQ Bacon Burger",
            foodDesc: "Juicy burger topped with BBQ sauce and bacon",
            foodPrice: "25.50"
        },
        {
            id: 1,
            foodImage: MenuImage8,
            foodTitle: "spicy tuna roll",
            foodDesc: "Spicy tuna roll with a bold, flavorful kick",
            foodPrice: "25.50"
        },
    ]

    return (
        <>
            <div className="menu-section section-padding">
                <div className="menu-section__inner">
                    <h4 className='flex items-baseline gap-2 justify-center uppercase font-[500] pb-[0.2rem] text-[1rem] m-0 tracking-wide text-amber-500'><MdFastfood className='offer-icon text-[1.3rem]' /><span className='text-[0.8rem] lg:text-[0.95rem] font-[500] sm:text-[1rem]'>delicious food</span></h4>
                    <h2 className='offer-headingText text-center pb-[0.4rem] uppercase text-[1rem] sm:text-[1rem] md:text-[1.4rem] xxl:text-[2.3rem] xxl:leading-[2.8rem] md:leading-9 lg:text-[1.5rem] lg:font-[700] leading-[1.6rem] tracking-wide font-[600] m-0 dark:text-[#ccc]'>explore our delicious menu</h2>

                    <div className="menu-card-block font-poppins pt-3 grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-[0.85rem] sm:gap-y-3 gap-y-3 md:grid-cols-2 md:gap-x-3">
                        {
                            foodMenuDetails.map((food) => (
                                <div key={food.id} className="food-card flex items-center justify-between shadow-sm shadow-[#ccc] py-2 pl-4 pr-[1.3rem] bg-blue-50 dark:bg-slate-500 dark:border-slate-600 rounded-[6px] hover:bg-green-500 hover:cursor-pointer transition-all duration-300 dark:hover:bg-red-600">
                                    <div className="food-content flex items-center gap-2">
                                        <div className="food-thumb">
                                            <img src={food.foodImage} alt="menu-food-1" className="img-fluid" />
                                        </div>
                                        <div className="food-details">
                                            <h4 className="m-0 capitalize font-[500] tracking-wide text-[0.9rem] lg:text-[1rem] pb-[0.1rem] dark:text-[#ccc]">{food.foodTitle}</h4>
                                            <p className="food-desc m-0 tracking-wide text-[0.8rem] font-[400] lg:text-[0.9rem] dark:!text-[#ccc]">{food.foodDesc}.</p>
                                        </div>
                                    </div>
                                    <div className="food-price">
                                        <span className="price font-[500] tracking-wide text-blue-900 text-[0.8rem] lg:text-[1rem] dark:text-[#ccc]">${food.foodPrice}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu