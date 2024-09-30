$(document).ready(function () {
  $("table tbody td").click(function () {
    if (!$(this).hasClass("not-available") && !$(this).is(":first-child")) {
      $(this).toggleClass("selected");
      $(this).css("cursor", "pointer");
    }
  });

  $('table tbody td:contains("Not Available")').addClass("not-available");
});
