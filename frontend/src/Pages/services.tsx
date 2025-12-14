import ServicesSection from "../Components/services";
export default function services(){
    return(
        <div className="bg-green-50 min-h-screen text-center ">
            <h1 className="p-5 font-bold text-2xl">Our services</h1>
            <div className=" px-30 py-0 mt-10 gap-20 flex justify-between">
            <ServicesSection/>
            </div>
        </div>
    )
}