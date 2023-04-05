const NavLinks = (props) => {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/">Home</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/about">Link1</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/skills">Link2</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/works">Link3</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/contacts">Link4</a>
      </li>
    </ul>
  );
};

export default NavLinks;
