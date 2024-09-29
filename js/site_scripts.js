var partnerImages = [
  "partner-bustour.png",
  "partner-cabinrental.png",
  "partner-campingadv.png",
  "partner-collegetours.png",
  "partner-rentalbike.png",
  "partner-tourgroup.png",
];

var imageList = [];

for (var i = 0; i < partnerImages.length; i++) {
  var listItem =
    '<li class="partner"><img src="images/partners/' +
    partnerImages[i] +
    '" alt="Partner ' +
    (i + 1) +
    '"></li>';
  imageList.push(listItem);
}

document.getElementById("partners-list").innerHTML = imageList.join("");
