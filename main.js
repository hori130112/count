const el=document.querySelector("#hello")
console.log(el)
let n=0;
function tasizann(){
    console.log(el.innerText)
    el.innerText= ++n;
}
function hikizann(){
    console.log(el.innerText)
    el.innerText= --n;
}
function nisuru(){
    n=0;
    el.innerText=n;
console.log(el.innerText)
}

