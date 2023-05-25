var map = L.map('map', {
    center: [40.75, -74.2],
    zoom: 13
  });
  
  var imageUrl = './assets/orbis_map.svg',
    imageBounds = [
      [40.712216, -74.22655],
      [40.773941, -74.12544]
    ];
  
  L.imageOverlay(imageUrl, imageBounds).addTo(map);

function toggle(name) {
    var text = document.getElementById(name);
    if (text.hidden) {
        text.hidden = false;
    } else {
        text.hidden = true;
    }
}