  $(window)
    .scroll(function () {
      var windscroll = $(window).scrollTop();
      if (windscroll >= 100) {
        $(".sidebar").addClass("fixed");
        $(".main-content section").each(function (i) {
          if ($(this).position().top <= windscroll + 20) {
            $(".sidebar li.sidebar-active").removeClass("sidebar-active");
            $(".sidebar li").eq(i).addClass("sidebar-active");
          }
        });

        $("nav").addClass("fixed");
        $(".main-content section").each(function (i) {
          if ($(this).position().top <= windscroll + 20) {
            $(".navbar-nav a.nav-active").removeClass("nav-active");
            $(".navbar-nav a").eq(i).addClass("nav-active");
          }
        });
      } else {
        $("nav").removeClass("fixed");
        $(".navbar-nav a.nav-active").removeClass("active");
        $(".navbar-nav a:first").addClass("active");

        $(".sidebar").removeClass("fixed");
        $(".sidebar li.sidebar-active").removeClass("sidebar-active");
        $(".sidebar li:first").addClass("sidebar-active");
      }
    })
    .scroll();
  
    $(".sidebar a").on("click", function (e) {
    var scrollAnchor = $(this).attr("data-scroll"),
      scrollPoint =
        $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 10;
    e.preventDefault();
    $(".sidebar-active").removeClass("sidebar-active");
    $(e.target).parent().addClass("sidebar-active");
    $("body,html").animate(
      {
        scrollTop: scrollPoint,
      },
      200
    );
    return false;
  });

// $('.sidebar a').on('click', function (e) {
//   var scrollAnchor = $(this).attr('data-scroll'),
//       scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 10;
//   e.preventDefault();
//   $(".sidebar-active").removeClass("sidebar-active");
//   $(e.target).parent().addClass('sidebar-active');
//   $('body,html').animate({
//       scrollTop: scrollPoint
//   }, 200);
//   return false;
// })