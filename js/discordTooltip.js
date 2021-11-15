window.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".discordIcon").addEventListener('mouseover', () => {
        document.querySelector(".discordTooltip").style.width = "70px";
    });
    
    document.querySelector(".discordIcon").addEventListener('mouseout', () => {
        document.querySelector(".discordTooltip").style.width = "0px";
    });
});