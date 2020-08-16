import menuItems from './templates/menu-items.hbs';
import menu from './menu.json';
import theme from './JS/changeTheme';
import './styles.css';

const menuRefs = document.querySelector('.js-menu');
const markup = menuItems(menu);
menuRefs.insertAdjacentHTML('beforeend', markup);

// console.log(theme);
