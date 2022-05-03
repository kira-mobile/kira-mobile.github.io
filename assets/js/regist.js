
$(document).ready(function () {
    // Xem mật khẩu
  var passInput = $(".input");
  var eyeOpen = $(".eye-open");
  var eyeClose = $(".eye-close");
  eyeOpen.eq(0).click(function () {
    eyeOpen.eq(0).addClass("hidden");
    eyeClose.eq(0).removeClass("hidden");
    passInput.eq(0).attr("type", "password");
  });

  eyeClose.eq(0).click(function () {
    eyeOpen.eq(0).removeClass("hidden");
    eyeClose.eq(0).addClass("hidden");
    passInput.eq(0).attr("type", "text");
  });

  eyeOpen.eq(1).click(function () {
    eyeOpen.eq(1).addClass("hidden");
    eyeClose.eq(1).removeClass("hidden");
    passInput.eq(1).attr("type", "password");
  });

  eyeClose.eq(1).click(function () {
    eyeOpen.eq(1).removeClass("hidden");
    eyeClose.eq(1).addClass("hidden");
    passInput.eq(1).attr("type", "text");
  });


//   load thông tin
  var btn = $("#log-in");
  var input = $("input");
 
  btn.click(function () {
      if((input.eq(0).val() != "") && (input.eq(1).val() != "") && (input.eq(2).val() != "") && (input.eq(3).val() != "") && (input.eq(2).val() === input.eq(3).val()) && (input.eq(2).val().length > 4))
      {
        $.ajax({
            // Post dữ liệu
            url: "https://6268ffffaa65b5d23e7df656.mockapi.io/ThienAntable",
            type: "POST",
            data: {
              name: input.eq(0).val(),
              email: input.eq(1).val(),
              pass: input.eq(2).val(),
            },
          }).done(function (result) {
      
            console.log(result);
            window.location.href="/registed.html" 
          });
         
      }
      
    //   Check login
      if (input.eq(2).val() != input.eq(3).val() && input.eq(3).val() != "" )
      {
          alert('Please enter the correct password')
      }

      if (input.eq(2).val().length <= 4 && input.eq(2).val() != "")
      {
          alert('Password must be longer than 4 characters')
      }

  });
});

function renderResult(result) {}
