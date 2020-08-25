function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };


  function showPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var positionInfo = "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude ;
            document.getElementById("address").value = positionInfo;
        });
    } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}

