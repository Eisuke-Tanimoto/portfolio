// 以下、メニューイベント

const menuBtn = document.querySelector('.menu-btn');
const cover = document.querySelector('.cover')


menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('menu-open');
})

menuBtn.addEventListener('click', function() {
  cover.classList.toggle('menu-open');
})

cover.addEventListener('click', function() {
  cover.classList.toggle('menu-open');
  menuBtn.classList.toggle('menu-open');
})

// 以下、ローダー

$(function(){
	var loader = $('.loader-wrap');

	$(window).on('load',function(){
		loader.fadeOut();
	});

	setTimeout(function(){
		loader.fadeOut();
	},3000);
});

// 以下、ページスクロールイベント

  $('.worksBtn').click(function() {
    var worksTop = $('.works').offset().top;
    $('html,body').animate({scrollTop : worksTop + -50}, 500);
  });

  $('.skillBtn').click(function() {
    var skillTop = $('.skill').offset().top;
    $('html,body').animate({scrollTop : skillTop + -50}, 500);
  });

  $('.aboutBtn').click(function() {
    var aboutTop = $('.about').offset().top;
    $('html,body').animate({scrollTop : aboutTop + -50}, 500);
  });

  $('.profileBtn').click(function() {
    var profileTop = $('.profile').offset().top;
    $('html,body').animate({scrollTop : profileTop + -50}, 500);
  });

  $('.top').click(function() {
    $('html,body').animate({scrollTop : 0}, 500);
  })

  // 以下、スクロールオブザーバー

const topIcon = document.querySelector('.top')
const hero = document.querySelector('.hero');

const cbTop = (entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      topIcon.classList.add('inview');
    } else {
      topIcon.classList.remove('inview');
    }
  });
}

const options = {
  root : null,
  rootMargin: '0px',
  threshold: [0.25,0.5]
}

const io = new IntersectionObserver(cbTop, options);
io.observe(hero);

// 以下、フェードインイベント

var fadeIn = $('.fadeIn');
$(window).on('scroll', function () {
  $(fadeIn).each(function () {
    var offset = $(this).offset().top;
    var scroll = $(window).scrollTop(); 
    var windowHeight = $(window).height();
    if (scroll > offset - windowHeight + 150) {
      $(this).addClass("inview");
    }
  });
});