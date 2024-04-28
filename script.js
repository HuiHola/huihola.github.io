// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
});

var typed = new Typed(".typer", {
    strings: ["pip install climanu^1000", "git clone https://github.com/HuiHola/RAMA.git^1000","git clone https://github.com/HuiHola/Innocent.git^1000"],
    startDelay: 1000,
    typeSpeed: 170,
    backSpeed: 50,
    cursorChar: '\u25ae',
    autoInsertCss: true,
    smartBackspace: true,
    loop:true,
  
  })