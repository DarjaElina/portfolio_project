const themeIcon=document.querySelector(".toggle-theme-icon");const hamburger=document.querySelector('#hamburger');const sidebar=document.querySelector('.mobile-menu');const toggleTheme=()=>{document.documentElement.classList.toggle('dark-mode')}
document.querySelectorAll('.toggle-theme').forEach((el)=>{el.addEventListener('click',toggleTheme)})
hamburger.addEventListener('click',()=>{sidebar.classList.toggle('visible')})
document.addEventListener('click',(event)=>{if(!sidebar.contains(event.target)&&!hamburger.contains(event.target)){sidebar.classList.remove('visible')}});const theme={dark:!1}
const setTheme=()=>{const currentTheme=JSON.parse(localStorage.getItem('theme'))||theme;localStorage.setItem('theme',JSON.stringify(currentTheme));if(currentTheme.dark){document.documentElement.classList.add('dark-mode')}}
setTheme()