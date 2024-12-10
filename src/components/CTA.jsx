import Button from './button';
import Styles from '../style';
const CTA = () => (
  <section id="cta" className={`${Styles.paddingY} ${Styles.paddingX} my-16 md:flex items-center justify-between bg-black-gradient-2 rounded-[20px]`}>
    <div>
      <h1 className={`${Styles.heading2} mb-6`}>Let’s try our service now!</h1>
      <p className={`${Styles.paragraph} max-w-[440px] mb-12 md:mb-0`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <Button></Button>
  </section>
);

export default CTA;
