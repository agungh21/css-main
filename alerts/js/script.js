$("#btn-alert1").click(function () {
  $(".alert").removeClass("hide");
  $(".alert").addClass("show");
  $(".alert").addClass("showAlert");
  setTimeout(function () {
    $(".alert").addClass("hide");
    $(".alert").removeClass("show");
  }, 5000); // hide alert automatically after 5sec
});

$(".close-btn").click(function () {
  $(".alert").addClass("hide");
  $(".alert").removeClass("show");
});
