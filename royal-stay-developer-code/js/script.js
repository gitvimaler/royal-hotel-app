const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{
  navLinks.classList.toggle("active");
  menuBtn.textContent=navLinks.classList.contains("active")?"✕":"☰";
});

document.querySelectorAll("#navLinks a").forEach(link=>{
  link.addEventListener("click",()=>{
    navLinks.classList.remove("active");
    menuBtn.textContent="☰";
  });
});

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("message").textContent="Thank you. Your message has been received.";
  e.target.reset();
});
