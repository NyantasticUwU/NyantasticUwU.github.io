// Overall
console.log("Welcome!");

// Loading screen
$(window).on("load", function () {
    $("#LoadingScreen").fadeOut("slow");
    $("#LandingPage").fadeIn("slow");
});

// Landing page
function openGithubPage() {
    window.open("https://github.com/NyantasticUwU", "_blank");
}
