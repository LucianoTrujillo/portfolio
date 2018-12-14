button = document.getElementById("button");

button.addEventListener("click", sendEmail);

function sendEmail (event) {
  var link = "mailto:luckytrujillo123@gmail.com"
             + "?cc=lucianotrujillo200@gmail.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape("test")
    ;

    window.location.href = link;
}
