


// currently kon page e ase ta auto detect hobe and nav-button e effect visible hobe

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

  const linkPage = link.getAttribute("href");
  const currentPage = window.location.pathname.split("/").pop();

  if (linkPage === currentPage) {
    link.classList.add("active");
  }

});



// scroll to button er jonne

const btn = document.getElementById("topBtn");

window.onscroll = () => {
  if (window.scrollY > 200) {  // window bottom 200px er besi hoye gele button appper hobe
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};


