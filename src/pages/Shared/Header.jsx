import logo from "../../assets/img/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center space-y-3">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-[#706F6F] font-normal">
        Journalism Without Fear or Favour
      </p>
      <p>{moment().format("dddd, MMMM D ,YYYY")}</p>
    </div>
  );
};

export default Header;
