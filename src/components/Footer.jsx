import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";
import Styles from "../style";
const Footer = () => (
  <section className={`${Styles.flexCenter} ${Styles.paddingY} flex-col`}>
    <div className={`${Styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="w-full flex flex-col flex-1">
        <img
          src={logo}
          alt={logo}
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${Styles.paragraph} ml-6 mt-7 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10 md:mt-0">
        {footerLinks.map((footerLink, index) => (
          <div
            key={index}
            className="flex flex-col min-w-[150px] my-4 ss:my-0">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-4">
              {footerLink.title}
            </h4>
            <ul className="space-y-2">
              {footerLink.links.map((link, index) => (
                <li key={index} className="text-dimWhite hover:text-secondary font-poppins font-medium text-[16px] leading-[24px]">
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between gap-4 flex-col md:flex-row border-t-2 border-t-[#3F3E45] pt-7">
      <p className="text-dimWhite">
        Copyrights &copy; 2021 HooBank. All Rights Reserved.
      </p>

      <div className="flex space-x-6">
        {socialMedia.map((social) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className="w-[21px] h-[21px]"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
