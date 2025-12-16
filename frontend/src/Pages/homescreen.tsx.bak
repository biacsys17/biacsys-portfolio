import Button from"../Components/Ui/button";
import contactusIcon from "../assets/contactus.svg";
import Hero_Image from "../assets/images/Hero-image.svg"; 
export default function HomeScreen(){
   return(
     <div className=" bg-green-50  px-30 py-20 items-center">
        <div className="flex items-center-safe justify-between">
         <div className="Hero-section">
           <p className="text-1xl max-w-md font-bold text-gray-600 ">BIACSYS helps manufacturing and industrial businesses with practical consulting and 24x7 digital solutions. From custom software, websites, and apps to modernizing old tools and systems, everything is built to improve your operations and productivity.</p>
           <Button to="/contact"padding="5px 80px"className="mt-10 flex gap-3 items-center">
            <img src={contactusIcon} className="size-5" alt="sdsd" />
            Contact Us
           </Button>
        </div>
        <div className="hero-image">
            <img src={Hero_Image} alt="Hero PNG" />
        </div>
        </div>
        <div className="mt-0 client-section text-center">
         <h3 className="text-2xl font-bold text-gray-600">Our clients</h3>
         <div className="mt-5 flex items-center align-middle justify-center gap-2.5">
            <p className="">Be our first client and get seamless offers Up to</p>
            <p className="text-green-600 font-bold ">50%</p>
         </div>
         <div className="flex justify-center ">
            <Button to="/contact" className="mt-5  flex gap-3 items-center" padding="5px 100px">
            <img src={contactusIcon} className="size-5" alt="sdsd" />
            Contact Us
         </Button>
         </div>
        </div>     
    </div>
   )
}