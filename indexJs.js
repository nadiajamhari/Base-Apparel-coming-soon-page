$(document).ready(function () {
  $("#submitButton").click(function () {
    console.log("LOL");
    var email = $("#email").val();
    if (email === "") {
      document.getElementById("errorImage").style.visibility = "visible";
      var errorMessage = "The field is required.";
      document.getElementById("errorMessage").innerHTML = errorMessage;
    }
  });
});
