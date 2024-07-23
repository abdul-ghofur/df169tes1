function degToDMS (deg, dplaces=0) {
  var d = Math.floor (deg);          // make degrees
  var m = Math.floor((deg-d)*60);    // make minutes
  var s = Math.round(((deg-d)*60-m)*60*Math.pow(10,dplaces))/Math.pow(10,dplaces); // Make sec rounded
  s == 60 && (m++, s=0 );            // if seconds rounds to 60 then increment minutes, reset seconds
  m == 60 && (d++, m=0 );            // if minutes rounds to 60 then increment degress, reset minutes
  return (d + "° " + m + "' " + s+'"');   // create output DMS string
}

// ----- tests ------
console.log(degToDMS(77.7777));         // 55° 14' 4"
console.log(degToDMS(55.23456   ,3));    // 55° 14' 4.416"
console.log(degToDMS(4 + 20/60  ,2));    // 4° 20' 0"
console.log(degToDMS(89.64789   ,2));    // 89° 38' 52.4"
console.log(degToDMS(-23.1234567,3));    // -24° 52' 35.556"