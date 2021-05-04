/*Hecho por Santiago Estiben Buitrago Díaz*/

const menu = document.querySelector('.menu');
const menus = document.querySelector('.menu-navegacion');

console.log(menu);
console.log(menus);

menu.addEventListener('click', ()=>{
    menus.classList.toggle("spread");
})