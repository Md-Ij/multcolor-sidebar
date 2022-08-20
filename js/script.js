const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const night = document.querySelector('.night');
const sidebar = document.querySelector('.sidebar');
const listItemActive = document.querySelector('.list-item .active');


dark.addEventListener('click', function () {
  sidebar.className = 'sidebar'
  listItemActive.className='list-item active'
})

night.addEventListener('click', function () {
  sidebar.className = 'sidebar night'
  listItemActive='list-item night'
})

light.addEventListener('click', function () {
  sidebar.className = 'sidebar light'
  listItemActive='list-item active light'
})
