const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});

// const btnOnScroll = document.querySelector('.btn');

// const initUpdateBtnOnScroll = () => {
//   const btn = document.querySelector('.btnTop');
//   if(btn) {
//     window.addEventListener('scroll', () => {
//       if(window.scrollY >= window.innerHeight) {
//         btn.classList.add('scroll');
//       } else {
//         btn.classList.remove('scroll');
//       }
//     });
//   }
// }

// function scroll() {
//   const toTop = document.getElementById('btnTop');
//   window.scrollY > 0 ? toTop.style.display = 'Block' : toTop.style.display = 'none';
// }

const showBtn = () => document.querySelector('.btnTop').classList.add('visible');
const hideBtn = () => document.querySelector('.btnTop').classList.remove('visible');
document.addEventListener('scroll', (e) => window.scrollY < 100 ? hideBtn() : showBtn());