import { bill, apple, google } from "../assets";
import Styles, { layout } from "../style";
// import layout from '../style'

const Billing = () => (
  <section id="billing" className={`${layout.sectionReverse} md:items-center`}>
    <div className="flex-1">
      <h2 className={`${Styles.heading2} text-white`}>
        Easily control your <br className="hidden md:block" /> billing & invoicing.
      </h2>
      <p
        className={`${Styles.paragraph} max-w-[570px] mt-6 mr-[52px] mb-[48px]`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex gap-4">
        <img src={apple} alt={apple} />
        <img src={google} alt={google} />
      </div>
    </div>
    <div className={`${layout.sectionImgReverse} flex-1 space-y-4 relative`}>
      <img src={bill} alt={bill} className="max-h-[500px] z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
);

export default Billing;
