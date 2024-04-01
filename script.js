const text = document.querySelector('.sec-text');
console.log(text.textContent);

const textLoad = () => {
    setTimeout(()=>{
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(()=>{
        text.textContent = "Anujesh";
    }, 8000);
    setTimeout(()=>{
        text.textContent = "Coder";
    }, 16000);
}
textLoad();
setInterval(textLoad, 23800);