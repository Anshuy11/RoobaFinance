import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const AnimationFirstPade = () => {
  const router = useRouter()
  return (
    <div className="bg-black xl:pl-10 xl:pr-10 w-screen max-h-[900px] overflow-hidden">
      <div className="sm:block hidden  bg-[#fff4df] items-center justify-items-cente relative  text-black max-h-[900px]">
        <img src="/logo.png" />
        <div className="container md:mt-16  xl:mt-24">
          <div className=" xl:font-bold md:font-medium md:text-[40px] xl:text-[60px] tracking-wide pl-4 pr-4 text-black mr-4 bg-[#fff4df]">
            WE{" "}
          </div>
          <div className="flex ">
            <div className="xl:w-[650px] md:w-[300px]  h-[80px]  ">
              <img
                src="/image.png"
                alt="Animated Image"
                className="xl:w-[650px] md:w-[300px]  h-[80px]"
              />
            </div>
            <div className="text-wrapper">
              <div className="animated-text xl:font-bold md:font-medium md:text-[40px] xl:text-[60px] pl-4 pr-4 tracking-wide">
                ORGANIZE THE
              </div>
            </div>
          </div>
        </div>

        <div className="container   mt-6">
          <div className=" xl:font-bold md:font-medium md:text-[40px] xl:text-[60px] tracking-wide pl-4 pr-4 text-black mr-4 bg-[#fff4df]">
            CONNECTION{" "}
          </div>
          <div className="flex ">
            <div className="image-wrapper  md:w-[200px] xl:w-[600px]">
              <img
                src="/image.png"
                alt="Animated Image"
                className=" md:w-[200px] xl:w-[600px] h-[80px]"
              />
            </div>
            <div className="text-wrapper bg-[#fff4df]">
              <div className="animated-text font-bold text-[60px] pl-4 pr-4 w-[200px] tracking-wide bg-[#fff4df]"></div>
            </div>
          </div>
        </div>

        <div className=" container w-full mt-6">
          <div className="xl:w-[400px] md:w-[200px] h-[80px] ">
            <img
              src="/image.png"
              alt="Animated Image"
              className="xl:w-[400px] md:w-[200px] h-[80px] "
            />
          </div>

          <div className="text-wrapper bg-[#fff4df]">
            <div className="animated-text font-bold text-[60px] pl-4 pr-4 w-[200px] tracking-wide bg-[#fff4df]"></div>
            <div className=" md:h-[80px] flex xl:font-bold md:font-medium md:text-[40px] xl:text-[60px] pl-4 pr-4 tracking-wide ml-1 mr-1 ">
              {" "}
              BETWEEN
            <div className="xl:w-[250px] md:w-[100px] h-[80px]">
            <img
                src="/image.png"
                alt="Animated Image"
                className="xl:w-[250px] md:w-[100px] h-[80px]"
              />
                </div>  {" "}
              MUSIC
            </div>
          </div>
        </div>

        <div className="container   mt-6">
          <div className=" xl:font-bold md:font-medium md:text-[40px] xl:text-[60px] tracking-wide pl-4 pr-4 text-black ml-10 bg-[#fff4df]">
            ARTIST{" "}
          </div>
          <div className="flex ">
            <div className="image-wrapper md:w-[170px] lg:w-[200px] h-[80px] xl:w-[300px]">
              <img
                src="/image.png"
                alt="Animated Image"
                className="md:w-[170px] lg:w-[200px] h-[80px] xl:w-[300px]"
              />
            </div>
            <div className="text-wrapper bg-[#fff4df]">
              <div className="animated-text flex xl:font-bold md:font-medium md:text-[40px] xl:text-[60px] pl-4 pr-4  tracking-wide bg-[#fff4df]">
                CULTURE{" "}
               <div className="md:w-[100px] lg:w-[100px] xl:w-[250px] h-[80px]">
               <img
                  src="/image.png"
                  alt="Animated Image"
                  className="md:w-[100px] lg:w-[100px] xl:w-[250px] h-[80px] pl-3"
                />
                </div>{" "}
                <div className="animated-text text-wrapper xl:w-[200px] md:w-[100px]  lg:w-[100px] flex xl:font-bold md:font-medium md:text-[40px] xl:text-[60px] pl-4 pr-4  tracking-wide bg-[#fff4df]"></div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className=" container w-full mt-6">
          <div className="xl:w-[400px] md:w-[200px] h-[80px]">
            <img
              src="/image.png"
              alt="Animated Image"
              className="xl:w-[400px] md:w-[200px] h-[80px]"
            />
          </div>

          <div className="text-wrapper bg-[#fff4df]">
            <div className="animated-text font-bold text-[60px] pl-4 pr-4 w-[200px] tracking-wide bg-[#fff4df]"></div>
            <div className=" md:h-[80px] flex xl:font-bold md:font-medium md:text-[40px] xl:text-[60px] pl-4 pr-4 tracking-wide ">
              {" "}
              ART{" "}
             <div className="xl:w-[200px] md:w-[100px] h-[80px]">
             <img
                src="/image.png"
                alt="Animated Image"
                className="xl:w-[200px] md:w-[100px] h-[80px]"
              />
                </div> {" "}
              & COLLECTION
            </div>
          </div>
        </div>
        
        <div className=" container z-50 relative h-full ">
      <div className="bg-black bg-opacity-60 flex sticky  top-[100px] rounded-xl p-2 m-2">
    <Link target="_self" href={"/" } className="hover:text-gray-700" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg></Link>  
<Link target="_self" href={"/" } className="hover:text-gray-700">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</Link>
        </div>  

        </div>
      </div>

      {/* Mobile resm\ponsive */}
      <div className=" sm:hidden block bg-[#fff4df] items-center justify-items-cente relative  text-black max-h-[900px]">
        <img src="/logo.png" className="h-[100px] w-[200px]" />
        <div className=" mt-6 m-2  ">
          <div className="flex font-medium text-[20px] p-2 ">
            <img
              src="/image.png"
              alt="Animated Image"
              className="w-[150px] h-[80px]"
            />

            <div className="text-wrapper">
              <div className="container text-center h-[80px] animated-text font-medium text-[16px]  w-[200px] pl-4 pr-4 ">
                WE ORGANIZE THE
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-4   ">
          <div className="flex font-medium text-[20px] p-2 ">
            <div className="left-0">
              <div className="container text-center h-[80px] font-medium text-[16px]  w-[200px]  ">
                CONNECTION BETWEEN
              </div>
            </div>

            <img
              src="/image.png"
              alt="Animated Image"
              className="w-[120px] h-[80px] mr-2"
            />

            <div className="text-wrapper">
              <div className="container  text-center h-[80px] animated-text font-medium text-[16px]  w-[200px] pl-4  mr-2">
                {" "}
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-4 m-2  ">
          <div className="flex font-medium text-[20px] p-2 ">
            <img
              src="/image.png"
              alt="Animated Image"
              className="w-[150px] h-[80px]"
            />

            <div className="text-wrapper">
              <div className="container text-center h-[80px] animated-text font-medium text-[16px]  w-[200px] pl-4 pr-4 ">
                MUSIC ARTIST{" "}
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-4   ">
          <div className="flex font-medium text-[20px] p-2 ">
            <div className="left-0">
              <div className="container text-center h-[80px] font-medium text-[16px]  w-[160px]  ">
                CULTURE ART
              </div>
            </div>

            <img
              src="/image.png"
              alt="Animated Image"
              className="w-[180px] h-[80px] mr-2"
            />

            <div className="text-wrapper">
              <div className="container  text-center h-[80px] animated-text font-medium text-[16px]  w-[200px] pl-4  mr-2">
                {" "}
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-4 m-2  ">
          <div className="flex font-medium text-[20px] p-2 ">
            <img
              src="/image.png"
              alt="Animated Image"
              className="w-[150px] h-[80px]"
            />

            <div className="text-wrapper">
              <div className="container text-center h-[80px] animated-text font-medium text-[16px]  w-[200px] pl-4 pr-4 ">
                & COLLECTION
              </div>
            </div>
          </div>
        </div>


        <div className=" container z-10 sticky top-[100px] ">
      <div className="bg-black bg-opacity-60 flex rounded-xl p-2 m-2">
    <Link target="_self" href={"/" } className="hover:text-gray-700">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
    </Link> 
    <Link target="_self" href={"/" } className="hover:text-gray-700">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
    </Link>

        </div>  

        </div>
     
      </div>
    </div>
  );
};

export default AnimationFirstPade;
