export const Header = () => {
  let menuToggle = document.getElementsByClassName('toggle');
  let menuNavigation = document.getElementsByClassName('navigation');

  function toggleMenu() {
    menuToggle[0].classList.toggle('active');
    menuNavigation[0].classList.toggle('active');
  }
  return (
    <header>
      <div className='toggle' onClick={toggleMenu}></div>
      <a href='#' className='logo'>
        <img src='/img/logo.png' alt='logo' />
      </a>
    </header>
  );
};
