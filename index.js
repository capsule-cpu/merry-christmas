let myBtn = document.getElementById("sub-btn")
const nameEl = document.getElementById("name-el")
const ageEl = document.getElementById("age-el")


myBtn.addEventListener("click",function(){
    console.log("hey there")
    let Name = nameEl.value
    let Age = ageEl.value
    let nameCr = true
    let ageCr = true
    if(Name==="" && Age===""){
        nameCr=false
        ageCr=false
        alert("Name and Age are compulsory")
    }
    else if(Name ===""){
        nameCr= false
        alert("Name is compulsory")
    }
    else if(Age === ""){
        ageCr = false
        alert("Age is compulsory")
    }
    if(nameCr && ageCr){   
        // console.log(Name)
        // console.log(Age)
        localStorage.setItem("Name",Name)
        localStorage.setItem("Age",Age)
        window.location.href="second.html"
    }

})