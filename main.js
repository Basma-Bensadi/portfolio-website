//side bar : 
let bars = document.querySelector("#bars");
let xmark = document.querySelector("#xmark");


bars.addEventListener("click",()=>{
    let sidebar = document.querySelector("#sidebar");
    sidebar.style.display = 'flex'
})


xmark.addEventListener("click",()=>{
    let sidebar = document.querySelector("#sidebar");
    sidebar.style.display = 'none'
})


// 
let navlinks = document.querySelectorAll("nav a");
navlinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        navlinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active")
    
    })})



    window.addEventListener("beforeunload", function () {
    localStorage.setItem("scrollPosition", window.scrollY);
  });

  // Restore scroll position on page load
