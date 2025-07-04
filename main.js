const themeIcon=document.querySelector(".toggle-theme-icon");const hamburger=document.querySelector('#hamburger');const sidebar=document.querySelector('.mobile-menu');const projects=document.querySelectorAll('.project-item');const backToTop=()=>{document.body.scrollTop=0;document.documentElement.scrollTop=0}
function scrollFunction(){if(document.body.scrollTop>20||document.documentElement.scrollTop>20){document.querySelector('#back-to-top').style.display="block"}else{document.querySelector('#back-to-top').style.display="none"}}
window.onscroll=function(){scrollFunction()};
document.querySelector('#back-to-top').addEventListener('click',backToTop);const toggleTheme=()=>{const isDark=JSON.parse(localStorage.getItem('theme')).dark;localStorage.setItem('theme',JSON.stringify({dark:!isDark}))
document.documentElement.classList.toggle('dark-mode')}
document.querySelectorAll('.toggle-theme').forEach((el)=>{el.addEventListener('click',toggleTheme)})
hamburger.addEventListener('click',()=>{sidebar.classList.toggle('visible')})
document.addEventListener('click',(event)=>{if(!sidebar.contains(event.target)&&!hamburger.contains(event.target)){sidebar.classList.remove('visible')}});const theme={dark:!1}
const setTheme=()=>{const currentTheme=JSON.parse(localStorage.getItem('theme'))||theme;localStorage.setItem('theme',JSON.stringify(currentTheme));if(currentTheme.dark){document.documentElement.classList.add('dark-mode')}}
setTheme();document.querySelector('#contact-btn').addEventListener('click',()=>{document.querySelector('#contact').scrollIntoView()})
const codeLines=["let life = {",'    purpose: "create",','    passion: "coding"',"};","",'console.log(`${life.purpose}','through ${life.passion}.`);'];let lineIndex=0;let charIndex=0;let speed=50;const codeBlock=document.getElementById("code-block");function typeWriter(){if(lineIndex<codeLines.length){let currentLine=codeLines[lineIndex];if(charIndex<currentLine.length){codeBlock.innerHTML+=currentLine.charAt(charIndex);charIndex++;setTimeout(typeWriter,speed)}else{codeBlock.innerHTML+="\n";charIndex=0;lineIndex++;setTimeout(typeWriter,speed*2)}
Prism.highlightElement(codeBlock)}else{setTimeout(()=>{resetTyping();typeWriter()},2000)}}
function resetTyping(){codeBlock.innerHTML="";lineIndex=0;charIndex=0}