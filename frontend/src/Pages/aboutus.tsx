import Vision_image from "../assets/images/ourvision.png";
import Second from "../assets/images/second.jpeg";
export default function AboutUs() {
  return (
    <div className=" min-h-screen bg-green-50 px-8 py-16">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-green-700 text-center">
        About Us
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 text-center mt-3 max-w-2xl mx-auto flex justify-between">
        We build high-quality digital products with care, precision, and long-standing principles.
      </p>

      {/* Section 1 */}
      <div className="rounded-3xl p-5 bg-white justify-between mt-14 grid grid-cols-1 md:grid-cols-2 gap-50 items-center ">
        
        <div className="">
          <h2 className="text-2xl font-semibold text-green-700">
            Our Vision
          </h2>
          <p className="text-gray-700 mt-3 leading-relaxed">
            To deliver dependable, long-lasting websites and applications
            rooted in solid engineering practices.  
            We value clarity, discipline, and the traditional approach of building things the right way.
          </p>
        </div>
        <div className="justify-between">
          <img
            src={Vision_image}
            alt="vision"
            className=" size-100 rounded-4xl p-6"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="rounded-2xl p-5 bg-white mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className=" rounded-xl p-6 ">
          <img
            src={Second}
            alt="work"
            className="size-100 rounded-4xl p-6"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-700">
            What We Do
          </h2>
          <p className="text-gray-700 mt-3 leading-relaxed">
            We help businesses build, restore, and modernize their digital presence.
            Whether it's a complete website overhaul, an app rebuild, or fresh UI/UX design,
            our work remains grounded in quality and consistency.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-green-700 text-center">
          Our Values
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white border border-green-100 shadow-sm rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-green-700">Reliability</h3>
            <p className="text-gray-600 mt-2">
              We deliver work that lasts and stands the test of time.
            </p>
          </div>

          <div className="bg-white border border-green-100 shadow-sm rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-green-700">Detail-Focused</h3>
            <p className="text-gray-600 mt-2">
              Every pixel and feature is crafted with care and purpose.
            </p>
          </div>

          <div className="bg-white border border-green-100 shadow-sm rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-green-700">Commitment</h3>
            <p className="text-gray-600 mt-2">
              We follow through fully, ensuring quality from start to finish.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
