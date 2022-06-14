// Scroll Screen
const toTop = document.querySelector(".go-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});




//Add to cart
var dem = 0;
$(document).on("click", ".container-product__item-sale-icon", function (e) {
  //e.preventDefault();
  
  // Nếu click vào 1 sản phẩm thì các sp khác ko được click
  if ($(this).hasClass("disable")) {
    return false;
  }
  $(document).find(".container-product__item-sale-icon").addClass("disable");

  // Chuyển từ ko sp => có sp
  $(".no-product").addClass("display-none");
  $(".have-product").removeClass("display-none");

  // Click vào 1 sp thì biến dem + 1
  dem++;

  //Khai báo các biến để lấy src + tên + giá + vị trí + đổi màu icon thành đỏ nếu đã click
  var parent = $(this).parents(".container-product__item");
  var src = parent.find(".container-product__item-img").css("background-image");
  src = src.replace("url(", "").replace(")", "").replace(/\"/gi, "");
  var name = parent.find(".container-product__item-name").text();
  var price = parent.find(".container-product__item-price").text();
  var parTop = parent.offset().top;
  var parLeft = parent.offset().left;
  parent.find(".container-product__item-sale-icon").css("color", "red");

  // Xử lý đưa sản phẩm bay vào giỏ hàng
  var cart = $(document).find(".ti-shopping-cart"); //tạo biến giỏ hàng
  // Tạo thẻ img
  $("<img/>", {
    class: "overlay-fly",
    src: src,
  })
    //Thêm vào body
    .appendTo("body")
    .css({
      top: parTop,
      left: parseInt(parLeft) + parseInt(parent.width()) - 50,
    });

  //Bay lên phía trên bên trái
  setTimeout(function () {
    $(document).find(".overlay-fly").css({
      top: cart.offset().top,
      left: cart.offset().left,
    });

    //Bay vào giỏ hàng
    setTimeout(function () {
      $(document).find(".overlay-fly").remove();
      $(document)
        .find(".container-product__item-sale-icon")
        .removeClass("disable");
    }, 1000);
  }, 500);

  addCart(name, src, price);
});

// Hàm xử lý thêm sản phẩm nếu click vào icon giỏ hàng
function addCart(name, src, price) {
  var addTr = document.createElement("tr");
  var cartItem = document.querySelectorAll("tbody tr");
  // Check xem có trùng sp kh?
  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".header__noti-name");
    if (productT[i].innerHTML == name) {
      alert("Sản phẩm của bạn đã có trong giỏ hàng");
      dem--;
      return;
    }
  }

  var trContent =
    '<tr class="header__noti-item header__noti-item--viewed"><a href="#" class="header__noti-link"><span class="header__noti-img" style="background-image:url(' +
    src +
    ');"></span><div class="header__noti-info"><span class="header__noti-name">' +
    name +
    '</span><span class="header__noti-descriotion">' +
    price +
    '</span></div></a><div class="sale-closing"><button class="pay btn btn-primary">Thanh Toán</button><i class="fa-solid fa-trash-can header__noti-icon"></i></div></tr>';
  addTr.innerHTML = trContent;
  var trContent = price;
  var cartTb = document.querySelector("tbody");
  cartTb.append(addTr);

  // Xóa tất cả
  $(document).on("click", ".delete-all", function (e) {
    // Xóa tất cả sản phẩm
    addTr.remove();
    // Chuyển từ có sp về ko có sp
    $(".no-product").removeClass("display-none");
    $(".have-product").addClass("display-none");
    //Reset biến dem
    dem = 0;
  });
}

// Delete product
$(document).on("click", ".header__noti-icon", function (e) {
  e.preventDefault();
  //Click vào xóa sp nào thì xáo sp ấy
  $(this).parents("tr").remove();
  //Giảm biến dem
  dem--;

  //Xét điều kiện biến dem để đặt trạng thái phù hợp
  if (dem == 0) {
    $(".no-product").removeClass("display-none");
    $(".have-product").addClass("display-none");
  }
});

// Click vào giỏ hàng hiện lên menu cart
const cartClose = document.querySelector('.cart-close')
const cartShow = document.querySelector('.ti-shopping-cart') 
//Show
cartShow.addEventListener('click', function(){
  if(screen.width >= 1024)
  {
    $('.overlay-product').css('display', 'block')
  }
  document.querySelector('.sub-product').style.transform="translateX(0)"
})

//Close
cartClose.addEventListener('click', function(){
  $('.overlay-product').css('display', 'none')
  document.querySelector('.sub-product').style.transform="translateX(100%)"
})

$('.overlay-product').click(function(){
  $('.overlay-product').css('display', 'none')
  document.querySelector('.sub-product').style.transform="translateX(100%)"
})


