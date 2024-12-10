import {clients} from '../constants'
import Styles from '../style'
const Clients = () => (
  <section className={`${Styles.paddingY} flex md:justify-between justify-center flex-wrap gap-6`}>
    {clients.map((item, index) => (
      <img key={index} src={item.logo} alt={item.logo} className='w-[190px] h-[60px] object-contain' />
    ))}
  </section>
)

export default Clients