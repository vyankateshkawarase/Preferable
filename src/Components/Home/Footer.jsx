import { Typography } from "@material-tailwind/react";
import youtube from "../Icons/youtube.png";
import instagram from "../Icons/instagram.png";
import whatsapp from "../Icons/whatsapp.png";
import linkedin from "../Icons/linkedin.png";
import twitter from "../Icons/twitter.png";
import PreferableIcon from "../Icons/PreferableIcon.png";

export function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-wrap justify-between gap-10 bg-[#657ED4] text-center">

        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal text-[#F2F2F2] flex items-center gap-2"
          >
            <img className="h-12 w-17" src={PreferableIcon} alt="Logo" />
            <span className="text-3xl leading-normal capitalize"><b>Preferable</b></span>
          </Typography>
        </div>

        {/* Placement Section */}
        <div className="flex-shrink-0">
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal text-[#F2F2F2]"
          >
            <h2 className="text-black font-poppins font-semibold text-xl leading-normal capitalize mb-2">Placement</h2>
            <ul className="text-[#F2F2F2]">
              <li>Freshers</li>
              <li>Working professionals</li>
            </ul>
          </Typography>
        </div>

        {/* Company Section */}
        <div className="flex-shrink-0">
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal text-[#F2F2F2]"
          >
            <h2 className="text-black font-poppins font-semibold text-xl leading-normal capitalize mb-2">Company</h2>
            <ul className="text-[#F2F2F2]">
              <li>About</li>
              <li>Blogs</li>
              <li>Parent company</li>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Contact</li>
            </ul>
          </Typography>
        </div>

        {/* Follow Us Section */}
        <div className="flex-shrink-0">
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal text-[#F2F2F2] text-lg"
          >
            <div className="flex flex-col items-center mr-4">
              <b className="text-black font-semibold font-poppins leading-normal mb-2">Follow Us!</b>
              <div className="flex gap-2 m-2">
                <img className="h-8 w-8" src={youtube} alt="YouTube Logo" />
                <img className="h-8 w-8" src={instagram} alt="Instagram Logo" />
                <img className="h-8 w-8" src={whatsapp} alt="WhatsApp Logo" />
                <img className="h-8 w-8" src={linkedin} alt="LinkedIn Logo" />
                <img className="h-8 w-8" src={twitter} alt="Twitter Logo" />
              </div>
            </div>
          </Typography>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
