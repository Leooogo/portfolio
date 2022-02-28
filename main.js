// const toggleBtn = document.querySelector('.navbar__toggleBtn');
// const menu = document.querySelector('.navbar__menu');
// const icons = document.querySelector('.navbar__icons');

// window.onscroll = function() {
//   var pageOffset = document.documentElement.scrollTop || document.body.scrollTop,
//         btn = document.getElementById('btnTop');
//     if (btn) btn.style.visibility = pageOffset > 450 ? 'visible' : 'hidden';
// };

// toggleBtn.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   icons.classList.toggle('active');
// });

// const showBtn = () => document.querySelector('.btnTop').classList.add('visible');
// const hideBtn = () => document.querySelector('.btnTop').classList.remove('visible');
// document.addEventListener('scroll', (e) => window.scrollY < 100 ? hideBtn() : showBtn());

// const myNav = document.getElementById('navbar')
// window.onscroll = function() {
//   if(document.body.scrollTop >= 200) {
//     myNav.classList.add("nav-colored");
//     myNav.classList.remove("nav-transparent");
//   } else {
//     myNav.classList.add("nav-transparent");
//     myNav.classList.remove("nav-colored");
//   }
// }