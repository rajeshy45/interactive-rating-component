

if (document.querySelector("html").classList.contains("index")) {
    console
    var ratingCircles = document.querySelectorAll(".rating-circle");

    for (var i = 0; i < ratingCircles.length; i++) {
        ratingCircles[i].addEventListener("click", function () {
            makeActive(this.innerHTML);
        });
    }
    
    function makeActive(innerHTML) {
        for (var i = 0; i < ratingCircles.length; i++) {
            if (ratingCircles[i].innerHTML === innerHTML) {
                ratingCircles[i].classList.add("active");
                localStorage["rating"] = innerHTML;
                ratingCircles[i].classList.remove("inactive");
            } else {
                ratingCircles[i].classList.remove("active");
                ratingCircles[i].classList.add("inactive");
            }
        }
    }

    document.querySelector(".btn").addEventListener("click", function() {
        if (document.querySelector(".active")) {
            document.querySelector("a").setAttribute("href", "thankyou.html");
        } else {
            alert("Please select a rating before submitting!");
        }
    });
}

if (document.querySelector("html").classList.contains("thank-you")) {
    document.querySelector(".rating-text p").innerHTML = "You selected " + localStorage["rating"] + " out of 5";
}


