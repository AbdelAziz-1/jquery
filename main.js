$(document).ready(function () {
  $("body").animate({ height: "980px" }, 2000, function () {
    $(".navbar").animate({ height: "100px" }, 1000, function () {
      $(".left img").animate({ height: "70px" }, 1000, function () {
        $("h1").slideDown(1000, function () {
          $(".navbar .right").css({ opacity: "1" });
          $(".container .card")
            .eq(0)
            .slideDown(1000, function () {
              $(".container .card")
                .eq(1)
                .slideDown(1000, function () {
                  $(".container .card").eq(2).slideDown(1000);
                });
            });
        });
      });
    });
  });
});
