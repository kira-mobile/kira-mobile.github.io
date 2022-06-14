// Xem mật khẩu
const input = document.querySelector(".input");
const eyeOpen = document.querySelector(".eye-open");
const eyeClose = document.querySelector(".eye-close");
eyeOpen.addEventListener("click", function () {
  eyeOpen.classList.add("hidden");
  eyeClose.classList.remove("hidden");
  input.setAttribute("type", "password");
});
eyeClose.addEventListener("click", function () {
  eyeOpen.classList.remove("hidden");
  eyeClose.classList.add("hidden");
  input.setAttribute("type", "text");
});

// Check login
$(document).ready(function () {
  var input = $("input");

  $.ajax({
    // Post dữ liệu
    url: "https://6268ffffaa65b5d23e7df656.mockapi.io/ThienAntable",
    type: "GET",
    dataType: "json",
  }).done(function (result) {
    $("#log-in").click(function () {
      if (input[0].value != "" && input[1].value != "") 
      {
        for (var i = 0; i < result.length; i++) 
        {
          if (input[0].value == result[i].email && input[1].value == result[i].pass) 
          {
            window.location.href = "registed.html";
          } 
          else 
          {
            $('.err-wrap').css('display', 'block')
          }
        }
      } 
      
      else 
      {
        if (input[0].value == "" || input[1].value == "") 
        {
          alert("please fill out all field!");
        }
      }
    });

  });
});
