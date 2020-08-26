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
    document.getElementById("outshow").src=URL.createObjectURL(event.target.files[0]);
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



function createresume(){
  document.getElementById("nameshow").innerHTML=
 document.getElementById("name").value;

 document.getElementById("addressshow").innerHTML=
 document.getElementById("address").value;

 document.getElementById("phoneshow").innerHTML="+91 "+
 document.getElementById("phone").value;

 document.getElementById("emailshow").innerHTML=
 document.getElementById("email").value;

 document.getElementById("aboutshow").innerHTML="\""+
 document.getElementById("about").value +"\"";

 document.getElementById("careershow").innerHTML=
 document.getElementById("career").value;
 
 document.getElementById("edushow").innerHTML=
 document.getElementById("education").value;

 document.getElementById("recentshow").innerHTML="<strong>Date:</strong> " +
 document.getElementById("job-1__start").value+" To "+document.getElementById("job-1__end").value;

 document.getElementById("positionshow1").innerHTML="<strong>Position:</strong> " +
 document.getElementById("job-1__details").value;

 document.getElementById("pastshow").innerHTML="<strong>Date:</strong> " +
 document.getElementById("job-2__start").value+ " To " +document.getElementById("job-2__end").value ;

 document.getElementById("positionshow2").innerHTML="<strong>Position:</strong> " +
 document.getElementById("job-2__details").value;
 
 document.getElementById("anotherpastshow").innerHTML="<strong>Date:</strong> " +
 document.getElementById("job-3__start").value+" To "+document.getElementById("job-3__end").value;

 document.getElementById("positionshow3").innerHTML="<strong>Position:</strong> " +
 document.getElementById("job-3__details").value;

 document.getElementById("referenceshow").innerHTML=
 document.getElementById("references").value;
}