import classes from "./Navbar.module.css";
import NavLinks from "./NavLinks";
import { useState } from "react";

import { CgMenuRound, CgCloseO } from "react-icons/cg";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenuRound className={classes.Hamburger} size="40px" color="white"
                            onClick={() => setOpen(!open)} />

    const closeIcon = <CgCloseO className={classes.Hamburger} size="40px" color="white"
                            onClick={() => setOpen(!open)} />
    
    const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
