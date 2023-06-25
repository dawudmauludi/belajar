// toggel

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// jika tombol nav di klik maka akan keluar

const hamburger = document.querySelector('#hamburger-menu')
document.addEventListener('click', function(e){
    if (!hamburger.contains(e. target) && !navbarNav.contains(e. target)){
        navbarNav.classList.remove('active');
    }
});