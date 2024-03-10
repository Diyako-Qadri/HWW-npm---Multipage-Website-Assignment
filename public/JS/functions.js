$(() => {
  $('.programs').on('click', () => $('.submenu.programs').toggleClass('open'));
  $('.exercise').on('click', () => $('.submenu.exercise').toggleClass('open'));


  $(".burger-icon").on("click", function () {
    $("body").toggleClass("open")
    $(this).siblings('aside').toggleClass("open");
  })

});
