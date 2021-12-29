window.addEventListener('DOMContentLoaded', function() {
    const progress = document.querySelectorAll(".progressBg");

    setTimeout(()=>{
        progress[0].style.width = "70%";
        progress[1].style.width = "50%";
        progress[2].style.width = "20%";
    }, 1);
});