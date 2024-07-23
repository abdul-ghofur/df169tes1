

function right(e) {
if (navigator.appName == 'Netscape' && 
(e.which == 3 || e.which == 2))
return false;
else if (navigator.appName == 'Microsoft Internet Explorer' && 
(event.button == 2 || event.button == 3)) {
alert("Hijriyah-Masehi Converter (C)2008 by Mutoha AR.");
return false;
}
return true;
}
document.onmousedown=right;
document.onmouseup=right;
if (document.layers) window.captureEvents(Event.MOUSEDOWN);
if (document.layers) window.captureEvents(Event.MOUSEUP);
window.onmousedown=right;
window.onmouseup=right;
// End -->

function weekDay(wdn){
					if(wdn==0){
						return "Senin"
						}
					if(wdn==1){
						return "Selasa"
						}
					if(wdn==2){
						return "Rabu"
						}
					if(wdn==3){
						return "Kamis"
						}
					if(wdn==4){
						return "Jumat"
						}
					if(wdn==5){
						return "Sabtu"
						}
					if(wdn==6){
						return "Minggu"
						}
	return ""

}

function pasarDay(pdn){
					if(pdn==0){
						return "Legi"
						}
					if(pdn==1){
						return "Pahing"
						}
					if(pdn==2){
						return "Pon"
						}
					if(pdn==3){
						return "Wage"
						}
					if(pdn==4){
						return "Kliwon"
						}
					
	return ""

}

function isnumeric(num)
  {
    var strlen = num.length
    var i
    for ( i = 0; i < strlen ; ++i )
    {
      //if (!((num.charAt(i) >= '0') && (num.charAt(i)<='9') || (num.charAt(i)=='.')))
      if (!((num.charAt(i) >= '0') && (num.charAt(i)<='9') || (num.charAt(i)=='.') || (num.charAt(i)=='-')))
      {
           return false;
      }
    }
  }

 function intPart(floatNum){
if (floatNum< -0.0000001){
	 return Math.ceil(floatNum-0.0000001)
	}
return Math.floor(floatNum+0.0000001)
}

function GregToIsl(arg) {

		if(gvalidate()==false){
		return false
		}

	d=parseInt(arg.CDay.value)
	m=parseInt(arg.CMonth.value)
	y=parseInt(arg.CYear.value)
	delta=0

					if ((y>1582)||((y==1582)&&(m>10))||((y==1582)&&(m==10)&&(d>14)))
						{
//added delta=0 on jd to comply isna rulling 2007
						jd=intPart((1461*(y+4800+intPart((m-14)/12)))/4)+intPart((367*(m-2-12*(intPart((m-14)/12))))/12)-
	intPart( (3* (intPart(  (y+4900+    intPart( (m-14)/12)     )/100)    )   ) /4)+d-32075+delta
						}
						else
						{
//added +1 on jd to comply isna rulling
						jd = 367*y-intPart((7*(y+5001+intPart((m-9)/7)))/4)+intPart((275*m)/9)+d+1729777+delta
						}
					arg.JD.value=jd
//added -1 on jd1 to comply isna rulling
					jd1=jd-delta
					arg.wd.value=weekDay(jd1%7)
					arg.pd.value=pasarDay(jd1%5)
					l=jd-1948440+10632
					n=intPart((l-1)/10631)
					l=l-10631*n+354
					j=(intPart((10985-l)/5316))*(intPart((50*l)/17719))+(intPart(l/5670))*(intPart((43*l)/15238))
					l=l-(intPart((30-j)/15))*(intPart((17719*j)/50))-(intPart(j/16))*(intPart((15238*j)/43))+29
					m=intPart((24*l)/709)
					d=l-intPart((709*m)/24)
					y=30*n+j-30

	arg.HDay.value=d
	arg.HMonth.value=m
	arg.HYear.value=y
}
function IslToGreg(arg) {

		if(hvalidate()==false){
		return false
		}

	d=parseInt(arg.HDay.value)
	m=parseInt(arg.HMonth.value)
	y=parseInt(arg.HYear.value)
//added - delta=0 on jd to comply isna rulling
	jd=intPart((11*y+3)/30)+354*y+30*m-intPart((m-1)/2)+d+1948440-385-delta
	arg.JD.value=jd
	arg.wd.value=weekDay(jd%7)
	arg.pd.value=pasarDay(jd%5)
					if (jd> 2299160 )
						{
						 l=jd+68569
						 n=intPart((4*l)/146097)
						l=l-intPart((146097*n+3)/4)
						 i=intPart((4000*(l+1))/1461001)
						l=l-intPart((1461*i)/4)+31
						 j=intPart((80*l)/2447)
						d=l-intPart((2447*j)/80)
						l=intPart(j/11)
						m=j+2-12*l
						y=100*(n-49)+i+l
						}
					else
						{
						 j=jd+1402
						 k=intPart((j-1)/1461)
						 l=j-1461*k
						 n=intPart((l-1)/365)-intPart(l/1461)
						 i=l-365*n+30
						j=intPart((80*i)/2447)
						d=i-intPart((2447*j)/80)
						i=intPart(j/11)
						m=j+2-12*i
						y=4*k+n+i-4716
						}

	arg.CDay.value=d
	arg.CMonth.value=m
	arg.CYear.value=y

}

//adji added
var cdays=new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var hdays=new Array(30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29);

function gvalidate()
{
	var yleap,d,m,y,m1,m2,m3,leap;
	d=document.Hijri.CDay.value;
	m=document.Hijri.CMonth.value;
	y=document.Hijri.CYear.value;

	if(document.Hijri.CYear.value=="")
	{
 		alert("Gregorian Year can be not empty");
		return false;
		document.Hijri.CYear.focus();
	}


	if(isnumeric(y)==false)
	{
		alert("Gregorian Year should be in numerics")
		document.Hijri.CYear.focus();
		return false;
	}

	m1=y%4;
	m2=y%100;
	m3=y%400;
	leap=((m==2)&&((m3==0)||((m1==0)&&(m2!=0))))?1:0;
	if(d>(cdays[m-1]+leap))
	{
		alert(m+"/"+d+"/"+y+" is not a valid Gregorian date.");
		return false;
		document.Hijri.CDay.focus();
	}

	return true;
}


//adji added
var hdays=new Array(30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29);
function hvalidate()
{
	var dh,mh,yh,m1h,leaph;
	dh=document.Hijri.HDay.value;
	mh=document.Hijri.HMonth.value;
	yh=document.Hijri.HYear.value;

	if(document.Hijri.HYear.value=="")
	{
		alert("Tahun harus diisi!!");
		return false;
		document.Hijri.HYear.focus();
	}

	if(isnumeric(yh)==false)
	{
		alert("Harus diisi dengan angka!!")
		document.Hijri.HYear.focus();
		return false;
	}
	m1h=yh%30;
   //the 2nd, 5th, 7th, 10th, 13th, 16th, 18th, 21st, 24th, 26th, and 29th years are leap years.
	leaph=((mh==12)&&(m1h==2||m1h==5||m1h==7||m1h==10||m1h==13||m1h==16||m1h==18||m1h==21||m1h==24||m1h==26||m1h==29))?1:0;
	if(dh>(hdays[mh-1]+leaph))
	{
		alert(mh+"/"+dh+"/"+yh+" Tanggal salah!!");
		return false;
		document.Hijri.HDay.focus();
	}

	return true;
}
//adji added

var fixd;
	function isGregLeapYear(year)
	{
		return year%4 == 0 && year%100 != 0 || year%400 == 0;
	}
	function gregToFixed(year, month, day)
	{
		var a = Math.floor((year - 1) / 4);
		var b = Math.floor((year - 1) / 100);
		var c = Math.floor((year - 1) / 400);
		var d = Math.floor((367 * month - 362) / 12);
		if (month <= 2)
			e = 0;
		else if (month > 2 && isGregLeapYear(year))
			e = -1;
		else
			e = -2;
		return 1 - 1 + 365 * (year - 1) + a - b + c + d + e + day;
	}
	function Hijri(year, month, day)
	{
		this.year = year;
		this.month = month;
		this.day = day;
		this.toFixed = hijriToFixed;
		this.toString = hijriToString;
	}
	function hijriToFixed()
	{
	return this.day + Math.ceil(29.5 * (this.month - 1)) + (this.year - 1) * 354 +
 			Math.floor((3 + 11 * this.year) / 30) + 227015 - 1;
	}
	function hijriToString()
	{
	var months = new Array("Muharram","Shafar","Rabiul Awwal","Rabiul Akhir","Jamadil Awwal","Jamadil Akhir","Rajab","Sya'ban","Ramadhan","Syawwal","Zulqaidah","Zulhijjah");
  	return this.day + " " + months[this.month - 1]+ " " + this.year;
	}
	function fixedToHijri(f)
	{
  	var i=new Hijri(1100, 1, 1);
   	i.year = Math.floor((30 * (f - 227015) + 10646) / 10631);
   	var i2=new Hijri(i.year, 1, 1);
   	var m = Math.ceil((f - 29 - i2.toFixed()) / 29.5) + 1;
   	i.month = Math.min(m, 12);
   	i2.year = i.year;
	 	i2.month = i.month;
	 	i2.day = 1;
   	i.day = f - i2.toFixed() + 1;
   	return i;
	}

	var tod=new Date();
	var weekday=new Array("Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu");
	var monthname=new Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember");
	var y = tod.getFullYear();
	var m = tod.getMonth();
	var d = tod.getDate();
	var dow = tod.getDay();
	document.write(weekday[dow] + ", " + d + " " + monthname[m] + " " + y);
	m++;
	fixd=gregToFixed(y, m, d);
	var h=new Hijri(1421, 11, 28);
	h = fixedToHijri(fixd);
	document.write("");
	

function myClock()
  {
    var t = new Date();
    var varJam = t.getHours();
    var varMenit = t.getMinutes();
    var varDetik = t.getSeconds();
    var tmp = document.getElementById("tmpAlert");
    varDetik++;
    if (varDetik == 60)
    {
      varMenit++;
      varDetik=0;
    }
    if (varMenit == 60)
    {
      if (varJam == 23){varJam=0}
      else {varJam++}
      varMenit=0;
    }
    varJam=varJam.toString();
    varMenit=varMenit.toString();
    varDetik=varDetik.toString();
    if (varJam.length==1) varJam="0" + varJam;
    if (varMenit.length==1) varMenit="0" + varMenit;
    if (varDetik.length==1) varDetik="0" + varDetik;
    tmp.innerHTML = varJam + ":" + varMenit + ":" + varDetik + "<input type=\"hidden\"     name=\"ClockView\" value=\""+varJam+':'+varMenit+':'+varDetik+"\">";
    setTimeout("myClock()", 1000);
  }
