

document.querySelector('.hamburger-menu').addEventListener('click', ()=>{
    document.querySelector('.navigation').classList.toggle('change')
})

const header = document.querySelector(".header p");
const headingpara = document.querySelector(".heading h1");
const heading = document.querySelector("heading");

 header.addEventListener('mouseover', ()=>{
    header.style.color = "red";
});

header.addEventListener('mouseout', ()=>{
    header.style.color = "green";
});

headingpara.addEventListener('mouseover', ()=>{
    headingpara.style.color = "purple";
});

headingpara.addEventListener('mouseout', ()=>{
    headingpara.style.color = "orange";
});

heading.addEventListener('mouseover', ()=>{
    heading.style.color = "pink";
});

heading.addEventListener('mouseout', ()=>{
    heading.style.color = "red";
});




