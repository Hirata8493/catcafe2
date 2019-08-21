$('.button').click(function () {

  $('#nav-main').toggleClass('open');
  $('#nav-color').toggleClass('color-2');
  $('.menu-trigger').toggleClass('active');
  $('.nav').toggleClass('nav-2');
  $('.nav-icon').toggleClass('fab-2');
  $('.button').toggleClass('button-3');
  $('.nav-cat').toggleClass('nav-cat-2');
  $('.nav-name').toggleClass('nav-name-2');
});
$(function () {
  $('.menu').click(function () {
    $('#nav-main').toggleClass('open');
    $('#nav-color').toggleClass('color-2');
    $('.menu-trigger').toggleClass('active');
    $('.nav').toggleClass('nav-2');
    $('.nav-icon').toggleClass('fab-2');
    $('.button').toggleClass('button-3');
    $('.nav-cat').toggleClass('nav-cat-2');
    $('.nav-name').toggleClass('nav-name-2');
  });
});
var element = document.getElementById("top");
var under = document.getElementById("under");
const scroll =
  document.querySelector('.no-scroll');
const load =
  document.querySelector('.load');

window.onload = function () {

  load.classList.add("load-2");
  setTimeout(function () {
    element.classList.add("top-2");
    under.classList.add("under-2");
  }, 2000); // 2秒後に実行
  setTimeout(function () {
    element.classList.add("none");
    under.classList.add("none");
    scroll.classList.add("no-scroll-2");
  }, 3000); // 3秒後に実行
}
$(function () {
  var countElm = $('.count'),
    countSpeed = 20;

  countElm.each(function () {
    var self = $(this),
      countMax = self.attr('data-num'),
      thisCount = self.text(),
      countTimer;

    function timer() {
      countTimer = setInterval(function () {
        var countNext = thisCount++;
        self.text(countNext);

        if (countNext == countMax) {
          clearInterval(countTimer);
        }
      }, countSpeed);
    }
    timer();
  });

});
var i = 0
var hogehoge = function(){
 // 一度全ての要素を非表示にする
  $(".slide-img").hide()
  // 特定の要素を表示する
  $(`.slide-img:eq(${i})`).show()
  // 次に表示する要素を算出する
  // 最後の要素の場合は最初に戻る
if (i == 3) {
    document.getElementById("video").play()
  }
  i < $(".slide-img").length - 1 ? i++ : i = 0

} 
hogehoge();
setInterval(function() {
hogehoge();
}, 7000)

$('.gray').css('visibility', 'hidden');
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $('.gray').each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight + 100) {
      $(this).addClass("gray-anm");
    }
  });
});
$('.gray-right').css('visibility', 'hidden');
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $('.gray-right').each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight + 0) {
      $(this).addClass("gray-right-anm");
    }
  });
});
$('.gray-left').css('visibility', 'hidden');
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $('.gray-left').each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight + 0) {
      $(this).addClass("gray-left-anm");
    }
  });
});
$('.table').css('visibility', 'hidden');
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $('.table').each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight + 100) {
      $(this).addClass("table-anm");
    }
  });
});
$('.up-anm').css('visibility', 'hidden');
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $('.up-anm').each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight + 100) {
      $(this).addClass("up-anm2");
    }
  });
});
$('.slide-left-anm').css('visibility', 'hidden');
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $('.slide-left-anm').each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight + 50) {
      $(this).addClass("slide-left-anm2");
    }
  });
});
$('.slide-right-anm').css('visibility', 'hidden');
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $('.slide-right-anm').each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight + 50) {
      $(this).addClass("slide-right-anm2");
    }
  });
});
$('.slide-right-anm-2').css('visibility', 'hidden');
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $('.slide-right-anm-2').each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight + 50) {
      $(this).addClass("slide-right-anm2-2");
    }
  });
});

$(function () {

  // paddingとborderとmarginも含めた高さを取得し、変数に格納

  var roomheight = $('.room-text').outerHeight(true);
  $('.room-box').css('padding-bottom', roomheight);
});

$('.anm').css('visibility', 'hidden');
$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $('.anm').each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight + 0) {
      $(this).addClass("anm-2");
    }
  });
});

