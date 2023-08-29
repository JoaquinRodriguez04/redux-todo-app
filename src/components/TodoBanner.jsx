// icons
import logo from '../assets/icons/logo-img.png';
import reduxIcon from '../assets/icons/redux-icon.png';

// redux
import { useDispatch } from 'react-redux';
import { activeForm } from '../features/isForm/isFormSlice';

const TodoBanner = () => {
  const dispatch = useDispatch();  

  const handleIsForm = () => {
    dispatch(activeForm());
  };

  return (
    <header className='todo-banner-wrapper'>
      <button 
      className='todo-banner-add-task'
      onClick={handleIsForm}>
        add task
      </button>
      <nav className='todo-banner-navbar'>
        <ul className='todo-banner-list'>
          <li className="todo-banner-item banner-item-logo-img">
            <a href="https://github.com/JoaquinRodriguez04">
              <img src={logo} className='logo-image' alt="logo-page" />
            </a>
          </li>
          <li className="todo-banner-item banner-item-redux-img">
            <a href="https://redux.js.org/">
              <img src={reduxIcon} className='redux-image-icon' alt="redux-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default TodoBanner;
