$(document).ready(function () {
  $("#submitButton").click(function () {
    var email = $("#email").val();
    if (email === "") {
      document.getElementById("errorImage").style.visibility = "visible";
      var errorMessage = "The field is required.";
      document.getElementById("errorMessage").innerHTML = errorMessage;
    } else {
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      var result = regex.test(email);
      if (!result) {
        document.getElementById("errorImage").style.visibility = "visible";
        var errorMessage = "Please provide a valid email";
        document.getElementById("errorMessage").innerHTML = errorMessage;
      }
    }
  });

  $("#email").keyup(function () {
    document.getElementById("errorImage").style.visibility = "hidden";
    document.getElementById("errorMessage").innerHTML = "";
  });
});
