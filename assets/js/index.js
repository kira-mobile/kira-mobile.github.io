  // Scroll Screen 
  const toTop = document.querySelector(".go-to-top")

  window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
          toTop.classList.add("active");
      }
      else {
          toTop.classList.remove("active");
      }
  })

  //Add to cart
    $(document).on('click', '.container-product__item-btn',function(e){
        e.preventDefault()
        $('.no-product').addClass('display-none')
        $('.have-product').removeClass('display-none')
        var parent = $(this).parents('.container-product__item')
        var src = parent.find('.container-product__item-img').css('background-image')
        src = src.replace('url(','').replace(')','').replace(/\"/gi, "");
        var name = parent.find('.container-product__item-name').text()
        var price = parent.find('.container-product__item-price').text()
        var parTop = parent.offset().top
        var parLeft = parent.offset().left
  
        var cart = $(document).find('.ti-shopping-cart')
        $('<img/>', {
            class:'overlay-fly',
            src:src
        }).appendTo('body').css({
            'top': parTop,
            'left':parseInt(parLeft) + parseInt(parent.width()) - 50 
        })
  
        setTimeout(function(){
          $(document).find('.overlay-fly').css({
              'top': cart.offset().top,
              'left': cart.offset().left
          })
  
          setTimeout(function(){
              $(document).find('.overlay-fly').remove()
          },1000)
        },500)

        addCart(name,src,price)
    })
//   })

  function  addCart(name,src,price) {
      var addTr = document.createElement("tr")
      var trContent = '<tr class="header__noti-item header__noti-item--viewed"><a href="" class="header__noti-link"><span class="header__noti-img" style="background-image:url('+src+');"></span><div class="header__noti-info"><span class="header__noti-name">'+name+'</span><span class="header__noti-descriotion">'+price+'</span><i class="fa-solid fa-trash-can header__noti-icon"></i></div></a></tr>'
      addTr.innerHTML = trContent
      var trContent = price
      var cartTb = document.querySelector('tbody')
      cartTb.append(addTr)
      console.log(cartTb)
  }
  
