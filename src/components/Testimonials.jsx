import Styles, { layout } from "../style";
import { quotes } from "../assets";
import { feedback } from "../constants";

const FeedbackCard = ({ image, title, content, person }) => (
  <div className="flex flex-col justify-between feature-card px-[40px] py-[60px] rounded-[20px] flex-1 max-w-[370px] min-w-[300px] min-h-[395px]">
    <img src={quotes} alt="quotes" className="w-[42.6px] h-[27.6px]" />
    <p className="text-white mt-10 mb-6 text-[18px] font-poppins font-normal">
      {content}
    </p>
    <div className="flex gap-4">
      <img src={image} alt={image} className="w-[48px] h-[48px]" />
      <div>
        <h4 className="text-white">{person}</h4>
        <p className="text-dimWhite opacity-50">{title}</p>
      </div>
    </div>
  </div>
);
const Testimonials = () => (
  <section
    id="testimonials"
    className={`${layout.section} relative flex md:flex-col flex-row gap-10 md:gap-20 mt-10 md:mt-0`}>
    <div className="w-full flex flex-col md:flex-row justify-between items-center">
      <h1 className={`${Styles.heading2} flex-1`}>
        What people are <br /> saying about us
      </h1>
      <p
        className={`${Styles.paragraph} flex-1 max-w-[450px] text-left md:self-center self-start md:mt-0 mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="flex justify-between items-center gap-5 flex-wrap">
      {feedback.map((feed, index) => (
        <FeedbackCard key={feed.id} {...feed} index={index} />
      ))}
    </div>

    <div className="absolute z-[0] w-[25%] h-[100%] -right-80 -top-20 blue__gradient" />
  </section>
);

export default Testimonials;
