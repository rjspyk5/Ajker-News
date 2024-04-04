import logo from "../../assets/img/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="text-center space-y-3">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-[#706F6F] font-normal">
        Journalism Without Fear or Favour
      </p>
      <p className="text-[#403F3F]">{moment().format("dddd, MMMM D ,YYYY")}</p>
      <div className="flex">
        <button className="btn bg-[#D72050] text-white">Latest news</button>
        <Marquee pauseOnHover={true}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
