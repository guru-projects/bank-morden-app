import { card, apple, google } from "../assets";
import Styles, { layout } from "../style";
import Button from "./button";

const CardDeal = () => (
  <section id="cardDeal" className={`${layout.section} md:items-center`}>
    <div className="flex-1">
      <h2 className={`${Styles.heading2} text-white`}>
        Find a better card deal <br className="hidden md:block" /> in few easy steps.
      </h2>
      <p
        className={`${Styles.paragraph} max-w-[570px] mt-6 mr-[52px] mb-[48px]`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button />
    </div>
    <div className={`${layout.sectionImg} flex-1 space-y-4`}>
      <img src={card} alt={card} className="max-h-[500px]" />
    </div>
  </section>
);

export default CardDeal;
