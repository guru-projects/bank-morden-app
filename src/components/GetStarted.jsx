import {arrowUp} from '../assets'
import Styles from '../style'
const GetStarted = () => {
  return (
    <div className={`${Styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}>
      <div className={`${Styles.flexCenter} w-full flex-col h-full rounded-full bg-primary`}>
    <div>
      <p className='text-gradient font-poppins font-medium text-[18px] leading-[23px] flex gap-2'>
        <span>Get</span>
        <img src={arrowUp} alt="arrowUp" className='w-[24px] h-24px] object-contain ' />
      </p>
    </div>
    <p className='text-gradient font-poppins font-medium text-[18px] leading-[23px]'>
        <span>Started</span>
      </p>
      </div>
    </div>
  )
}

export default GetStarted