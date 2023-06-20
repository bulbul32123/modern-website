let title = document.querySelector(".main_title");
let nam = "I am Bulbul"
let index = 1;

const typeWriter = () => {
let new_title = nam.slice(0,index)
title.innerText = new_title;

index > nam.length ? index = 1 : index++ 
// index++;
setTimeout(()=>{
    typeWriter()
},600);



}
typeWriter()


let title2 = document.querySelector(".head");
let nam2 = "Hire With me"
let index2 = 1;
const typeWriter2 = () => {
let new_title2 = nam2.slice(0,index2)
title2.innerText = new_title2;
index2 > nam2.length ? index2 = 1 : index2++ 
setTimeout(()=>{
    typeWriter2()
},600);
}
typeWriter2()


let title3 = document.querySelector(".mitu");
let nam3 = "And i am a Web Developer"
let index3 = 1;

const typeWriter3 = () => {
let new_title3 = nam3.slice(0,index3)
title3.innerText = new_title3;

index3 > nam3.length ? index3 = 1 : index3++ 
setTimeout(()=>{
    typeWriter3()
},600);

}
typeWriter3()
