import Styles from "../style";
import { features } from "../constants";
import Button from "./button";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className="duration-700 flex flex-row items-center  feature-card rounded-[20px]">
          <div className={`${Styles.flexCenter} rounded-full w-[64px] h-[64px] bg-dimBlue m-5`}>
            <img src={icon} className="w-[50%] h-[50%] object-contain" alt={icon} />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="text-white text-[18px] font-poppins font-semibold leading-[23.4px] ">{title}</h4>
            <p className=" max-w-[570px] font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{content}</p>
          </div>
        </div>
)
const Business = () => (
  <section
    id="business"
    className={` ${Styles.paddingY} flex md:flex-row flex-col gap-10 md:gap-20 mt-10 md:mt-0`}>
    <div className="flex-1">
      <h2 className={`${Styles.heading2} text-white`}>
        You do the business, <br className="hidden md:block" />
        we’ll handle the money.
      </h2>
      <p
        className={`${Styles.paragraph} max-w-[570px] mt-6 mr-[52px] mb-[48px]`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button />
    </div>
    <div className="flex-1 space-y-4 ">
    {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
