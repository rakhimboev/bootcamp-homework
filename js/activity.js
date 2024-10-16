$(document).ready(function () {
  $("table tbody td").click(function () {
    if (!$(this).hasClass("not-available") && !$(this).is(":first-child")) {
      $(this).toggleClass("selected");
    }
  });

  $('table tbody td:contains("Not Available")').addClass("not-available");
});

$(document).ready(function () {
  $("td:not(:nth-child(1))").each(function () {
    if ($(this).text().trim() !== "Not Available") {
      $(this).css("cursor", "pointer");
      $(this).on("click", function () {
        $(this).toggleClass("highlight");
      });
    }
  });

  $("head").append(`
    <style>
      .highlight {
        background-color: lightgreen;
        color: white;
      }
    </style>
  `);
});

$(document).ready(function () {
  $("td:not(:nth-child(1))").click(function () {
    var content = $(this).text();
    var columnIndex = $(this).index();
    var cliffSite = $("th").eq(columnIndex).text();

    if (content != "Not Available") {
      $(this).toggleClass("tdhighlight");

      if ($(this).hasClass("tdhighlight")) {
        $("#displaySelected").css("visibility", "visible");
        $("#displaySelected").css("margin-top", "2em");

        if ($("#result").find("p:contains('" + content + "')").length === 0) {
          $("#result").append("<p>" + content + " at " + cliffSite + "</p>");
        }
      } else {
        $('#result p:contains("' + content + '")').remove();

        if ($("#result").children().length === 0) {
          $("#displaySelected").css("visibility", "hidden");
          $("#displaySelected").css("margin-top", "0");
        }
      }
    }
  });
});
