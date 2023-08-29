// icons
import logo from '../assets/icons/logo-img.png';
import reduxIcon from '../assets/icons/redux-icon.png';

const TodoNavBar = () => {
  return (
    <section className='todo-navbar-wrapper'> 
        <nav className='todo-list-navbar'>
          <li className="todo-item-navbar item-navbar-logo-img">
            <a href="https://github.com/JoaquinRodriguez04">
              <img src={logo} className='logo-image' alt="logo-page" />
            </a>
          </li>
          <li className="todo-item-navbar item-navbar-redux-img">
            <a href="https://redux.js.org/">
              <img src={reduxIcon} className='redux-image-icon' alt="redux-icon" />
            </a>
          </li>
        </nav>
    </section>
  )
};

export default TodoNavBar;
