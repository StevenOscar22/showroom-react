import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Hamburger = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState("")

  return (
    <div className="hamburger" onClick={() => setOpen(!open)}>
        <i className={`material-symbols-outlined right-[1rem] top-[1rem] fixed cursor-pointer ${open ? 'rounded-lg backdrop-blur-sm' : '"'}`}>{`${open ? 'menu_open' : 'menu'}`}</i>
    <div className="dropdown-menu">
      <ul className={`transition-all duration-[.5s] ease-in-expo ${open ? 'h-[292px]' : 'h-0'}`}>
          <li><Link to="cars" spy={true} smooth={true} offset={-50} duration={500} className="navbar-button text-xs sm:text-xs lg:text-sm">Cars</Link></li>
          <li><Link to="history" spy={true} smooth={true} offset={-50} duration={500} className="navbar-button text-xs sm:text-xs lg:text-sm">History</Link></li>
          <li><Link to="technology" spy={true} smooth={true} offset={-50} duration={500} className="navbar-button text-xs sm:text-xs lg:text-sm">Technology</Link></li>
          <li><Link to="production" spy={true} smooth={true} offset={-50} duration={500} className="navbar-button text-xs sm:text-xs lg:text-sm">Production</Link></li>
          <li><button className="text-sm sm:text-xs lg:text-sm bg-cyan-950 px-12 py-1 rounded-md text-slate-300 font-medium cursor-pointer" onClick={() => navigate('../pages/Contact.jsx')}>contact us</button></li>
      </ul>
    </div>
  </div>
  );
};
export default Hamburger;
