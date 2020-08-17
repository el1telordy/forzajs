var season = Array("Winter", "Spring", "Summer", "Autumn");
var cartype = Array("Sports Utility Heroes",
            "Offroad",
            "Offroad Buggies",
            "Extreme Offroad",
            "Cult Classics",
            "Rods and Customs",
            "Classic Muscle",
            "Retro Muscle",
            "Modern Muscle",
            "Vans & Utility",
            "Retro Saloons",
            "Super Saloons",
            "Classic Rally",
            "Rally Monsters",
            "Retro Rally",
            "Modern Rally",
            "Retro Hot Hatch",
            "Hot Hatch",
            "Super Hot Hatch",
            "European Sports Cars",
            "Asian Sports Cars",
            "Classic Racers",
            "Rare Classics",
            "Retro Supercars",
            "GT Cars",
            "Super GT",
            "Modern Super Cars",
            "Hypercars",
            "Extreme Track Toys");
var classli = Array("C", "B", "A", "S1", "S2", "X");
var race = Array("Drift", "Roadrace", "Cross-Country");

function randomInteger(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min;  
} 

function randomish() {
  var st = season[Math.floor(Math.random() * season.length)];
  document.getElementById("st").innerHTML = st;
  var ct = cartype[Math.floor(Math.random() * cartype.length)];
  document.getElementById("ct").innerHTML = ct;
  var clst = classli[Math.floor(Math.random() * classli.length)];
  document.getElementById("clst").innerHTML = clst;
  var rt = race[Math.floor(Math.random() * race.length)];
  document.getElementById("rt").innerHTML = rt;
  var fnum = 0;
  switch(clst) {
  case 'C':
    fnum = 5;
    break;
  case 'B':
    fnum = 6;
    break;
  case 'A':
    fnum = 7;
    break;
  case 'S1':
    fnum = 8;
    break;
  case 'S2':
    fnum = 9;
    break;
  case 'X':
    fnum = 9;
    break;
  }
  var rating;
  if (clst == "S2") {
    rating = String(fnum)+String(randomInteger(80, 98));
  } else {
    if (clst == "X") {
      rating = 999;
    } else {
      rating = String(fnum)+String((randomInteger(80, 99)));
    }
  }
  document.getElementById("rate").innerHTML = rating;
}

randomish();