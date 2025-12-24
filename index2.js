const nam = localStorage.getItem("Name")
const ag = localStorage.getItem("Age")
const str = `
    hello ${nam} how are you , i have heard that your age is ${ag}
`
const st = `
    Hey ${nam}!, whats up!  Not all gifts are the same… choose wisely 👀
`
document.getElementById("hed-el").textContent = st

let feedbtn = document.getElementById("feedback-btn")
feedbtn.addEventListener("click",function(){
    window.location.href= "https://forms.gle/D3BQEqEa5jLSCu3Z9"
})