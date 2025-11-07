const menuBtn=document.getElementById("mobile-menu");
const hideMsg=document.querySelector(".hide");
menuBtn.addEventListener("click",()=>{
  hideMsg.classList.toggle("show")
})
      
        
      
/* dynamic footer*/ 
const currentYear=new Date().getFullYear();
document.getElementById('year').textContent=currentYear 

/*smoothly scrolls */
document.querySelectorAll("a[href^='#']").forEach(link=>{
  link.addEventListener("click",function(e){
    e.preventDefault();
    const target= document.querySelector(this.getAttribute("href"))
    target.scrollIntoView({
      behavior:'smooth'
    })
  })
})

