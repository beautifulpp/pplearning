'use strict';
//选择元素
const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//console.log(btnsShowModal);

//函数：打开modal
const showModal = function () {
  //   console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

/*for (let i = 0; i < btnsShowModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', showModal);
}*/

//函数：关闭modal
const closeModal = function () {
  //   console.log('Button closed');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//close按钮点击事件
btnCloseModal.addEventListener('click', closeModal);
//空白处点击关闭事件
overlay.addEventListener('click', closeModal);
//Esc点击关闭事件
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
