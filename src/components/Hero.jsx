import Styles from "../style";
import { discount, robot } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";
const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col gap-10 md:gap-0 mt-10 md:mt-0`}>
    <div className={`${Styles.flexStart} flex-col flex-1 xl:px-0 sm:px-16 px-6 `}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img
          src={discount}
          alt="discount img"
          className="width-[32px] height-[32px]"
        />
        <p className={`${Styles.paragraph} uppercase`}>
          <span className="text-white ml-1 mr-1"> 20%</span>
          Discount for <span className="text-white"> 1 month </span>
          Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="text-white flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <div className="absolute z-[0] w-[195px] h-[324px] top-[200px] -left-[50px] white__gradient-2" />

      <h1 className="text-white font-poppins font-semibold text-[52px] ss:text-[68px] ss:leading-[100px] leading-[75px] w-full">
        Payment Method.
      </h1>
      <p className={`${Styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
    <img src={robot} alt="billing" className="w-[100%] h-full lg:max-h-[650px] relative z-[5] object-contain" />

     {/* gradient start */}
     <div className="absolute z-[0] w-[40%] h-[45%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[60%] h-[60%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[80%] h-[80%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
    </div>

    <div className="ss:hidden flex justify-center md:mr-4 mr-0">
          <GetStarted />
        </div>
  </section>
);

export default Hero;
