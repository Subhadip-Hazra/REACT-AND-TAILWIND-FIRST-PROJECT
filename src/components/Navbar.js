import React from 'react';
import logo from './images/logo.png';

const Navbar = () => {
  const handleSignInClick = () => {
    console.log('Sign In clicked');
  };

  return (
    <nav className="bg-white p-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0 text-white relative left-[104px]">
          <div className="w-26 h-10 relative">
            <div className="w-[191px] h-[39px]">
              <img className="w-full h-full" src={logo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between relative right-[103px]">
          <div className="w-[525px] h-12 justify-start items-center gap-10 inline-flex">
            <div className="justify-start items-start gap-10 flex">
              <NavItem title="Home" />
              <NavItem title="Flashcard" />
              <NavItem title="Contact" />
            </div>
            <NavItem title="FAQ" />
            <button
              className="px-10 py-[13px] bg-gradient-to-b from-blue-950 to-blue-800 rounded-[32px] justify-center items-center gap-2.5 flex"
              onClick={handleSignInClick}
            >
              <div className="text-white text-lg font-medium font-inter">Login</div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ title }) => (
  <div className="text-lg font-normal font-inter text-neutral-700 hover:text-blue-500 cursor-pointer">{title}</div>
);

export default Navbar;
