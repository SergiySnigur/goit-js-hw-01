const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  input: document.querySelector('.js-switch-input')
};

refs.input.addEventListener('change', addClassOfTheme);
refs.input.addEventListener('change', addLocalStotage);

function addClassOfTheme(e) {

  if (e.target.checked) {
    refs.body.classList.add(theme.DARK);
    refs.body.classList.remove(theme.LIGHT);
  } else {
    refs.body.classList.add(theme.LIGHT);
    refs.body.classList.remove(theme.DARK);
  }

};

function addLocalStotage(e) {

  if (e.target.checked) {
    localStorage.setItem('theme', theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', theme.LIGHT);
  }

};

const themeLocalStorage = localStorage.getItem('theme');

if (themeLocalStorage === theme.DARK) {
  refs.body.classList.add(theme.DARK);
  refs.input.checked = true;
}


