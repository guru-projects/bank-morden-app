import Styles from '../style'
import { stats } from '../constants'
const Stats = () => {
  return (
    <div className='flex flex-wrap justify-between items-center m-10'>
    {stats.map((item, index) => (
      <div className='lex-1 flex justify-start items-center flex-row m-3`' key={index}>
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">{ item.value }</h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">{ item.title}</p>
      </div>
    ))}
    </div>
  )
}

export default Stats