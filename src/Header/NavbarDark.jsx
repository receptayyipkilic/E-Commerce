
import PhoneMail from "../Navbar/PhoneMail/PhoneMail"
import SocialMedia from "../Navbar/SocialMedia"
import Text from "../Navbar/Text"


function NavbarDark() {
  return ( 
    <div className="bg-[#252B42] text-[#FFFFFF] w-[1,439px] h-[58px] flex item-center justify-between " >
      <PhoneMail />
      <Text />
      <SocialMedia />
    </div>
  )
}

export default NavbarDark