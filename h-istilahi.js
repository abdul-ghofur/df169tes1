
  // fungsi untuk menghitung nilai 
 const calculate = () => { 
  // ketika seseorang memasukan tahun dan hasilnya akan diproses. 
  let tahun = document.querySelector("#tahun").value; 
  // mengambil inputan tahun. */ 
  let totaltahun = parseFloat(tahun) 
 	// sisa pembagian tahun
 	let hasil = totaltahun % 8;
  // total tahun dikalikan 10 terlebih dahulu tapi tidak ditampilkan di halaman
  let thn = (totaltahun % 8) *10; 
  // tahun tersebut termasuk tahun apa?
  if (thn <= 89 && thn >= 79) { 
  	grades = "Baa"; 
  } else if (thn <= 79 && thn >= 69) { 
 	grades = "Dal"; 
  } else if (thn <= 69 && thn >= 59) { 
  	grades = "Zai"; 
  } else if (thn <= 59 && thn >= 49) { 
 	grades = "Jim"; 
  } else if (thn <= 49 && thn >= 39) { 
  	grades = "Haa"; 
  } else if (thn <= 39 && thn >= 29) { 
  	grades = "Alip"; 
  } else if (thn <= 29 && thn >= 19) { 
 	grades = "Jim"; 
  } else if (thn <= 19 && thn >= 9) { 
  	grades = "Wawu"; 	
   } else { 
  	grades = "Ba"; 
   } 
   // mengetahui masuknya hari
   let tahuntam = totaltahun -1;
   //fungsi int
   let b = tahuntam / 30;
   let B = Math.trunc(b);
   // kali10 agar menjadi angka puluhan&ratusan
   let C = tahuntam % 30;
   // munculkan hasil kabisah (di ambil dari nilai C)
   if (C <= 0) {          
  	gradeskabisah = "11"; 
   } else if (C <= 1) {   
 	gradeskabisah = "0"; 	
  } else if (C <= 2) {    
 	gradeskabisah = "1"; 
  } else if (C <= 3) {    
 	gradeskabisah = "1"; 
  } else if (C <= 4) {   
 	gradeskabisah = "1"; 
  } else if (C <= 5) {   
 	gradeskabisah = "2"; 
  } else if (C <= 6) {   
 	gradeskabisah = "2"; 
  } else if (C <= 7) {   
 	gradeskabisah = "3"; 
  } else if (C <= 8) {   
 	gradeskabisah = "3"; 
  } else if (C <= 9) {   
 	gradeskabisah = "3"; 
  } else if (C <= 10) {   
 	gradeskabisah = "4"; 
  } else if (C <= 11) {   
 	gradeskabisah = "4"; 
  } else if (C <= 12) {    
 	gradeskabisah = "4"; 
  } else if (C <= 13) {    
 	gradeskabisah = "5"; 
  } else if (C <= 14) {   
 	gradeskabisah = "5"; 
  } else if (C <= 15) {   
 	gradeskabisah = "5"; 
  } else if (C <= 16) {   
 	gradeskabisah = "6"; 
  } else if (C <= 17) {   
 	gradeskabisah = "6"; 
  } else if (C <= 18) {   
 	gradeskabisah = "7"; 
  } else if (C <= 19) {   
 	gradeskabisah = "7"; 
  } else if (C <= 20) {   
 	gradeskabisah = "7"; 
  } else if (C <= 21) {   
 	gradeskabisah = "8"; 
  } else if (C <= 22) {    
 	gradeskabisah = "8"; 
  } else if (C <= 23) {    
 	gradeskabisah = "8"; 
  } else if (C <= 24) {   
 	gradeskabisah = "9"; 
  } else if (C <= 25) {   
 	gradeskabisah = "9"; 
  } else if (C <= 26) {   
 	gradeskabisah = "10"; 
  } else if (C <= 27) {   
 	gradeskabisah = "10"; 
  } else if (C <= 28) {   
 	gradeskabisah = "10"; 
  } else if (C <= 29) {   
 	gradeskabisah = "11"; 
  } else if (C <= 30) {   
 	gradeskabisah = "11"; 
  } 
  // munculkan hasil basitoh (di ambil dari nilai C)
   if (C <= 0) {          
  	gradesbasitoh = "19"; 
   } else if (C <= 1) {   
 	gradesbasitoh = "1"; 	
  } else if (C <= 2) {    
 	gradesbasitoh = "1"; 
  } else if (C <= 3) {    
 	gradesbasitoh = "2"; 
  } else if (C <= 4) {   
 	gradesbasitoh = "3"; 
  } else if (C <= 5) {   
 	gradesbasitoh = "3"; 
  } else if (C <= 6) {   
 	gradesbasitoh = "4"; 
  } else if (C <= 7) {   
 	gradesbasitoh = "4"; 
  } else if (C <= 8) {   
 	gradesbasitoh = "5"; 
  } else if (C <= 9) {   
 	gradesbasitoh = "6"; 
  } else if (C <= 10) {   
 	gradesbasitoh = "6"; 
  } else if (C <= 11) {   
 	gradesbasitoh = "7"; 
  } else if (C <= 12) {    
 	gradesbasitoh = "8"; 
  } else if (C <= 13) {    
 	gradesbasitoh = "8"; 
  } else if (C <= 14) {   
 	gradesbasitoh = "9"; 
  } else if (C <= 15) {   
 	gradesbasitoh = "10"; 
  } else if (C <= 16) {   
 	gradesbasitoh = "10"; 
  } else if (C <= 17) {   
 	gradesbasitoh = "11"; 
  } else if (C <= 18) {   
 	gradesbasitoh = "11"; 
  } else if (C <= 19) {   
 	gradesbasitoh = "12"; 
  } else if (C <= 20) {   
 	gradesbasitoh = "13"; 
  } else if (C <= 21) {   
 	gradesbasitoh = "13"; 
  } else if (C <= 22) {    
 	gradesbasitoh = "14"; 
  } else if (C <= 23) {    
 	gradesbasitoh = "15"; 
  } else if (C <= 24) {   
 	gradesbasitoh = "15"; 
  } else if (C <= 25) {   
 	gradesbasitoh = "16"; 
  } else if (C <= 26) {   
 	gradesbasitoh = "16"; 
  } else if (C <= 27) {   
 	gradesbasitoh = "17"; 
  } else if (C <= 28) {   
 	gradesbasitoh = "18"; 
  } else if (C <= 29) {   
 	gradesbasitoh = "18"; 
  } else if (C <= 30) {   
 	gradesbasitoh = "19"; 
  } 
   // 
  let D = B * 5;  
  let E = gradeskabisah * 5; 
  let F = gradesbasitoh * 4; 
  let G = D + E + F + 5; 
  let H = G % 7;
   // Masuk tahun jatuh pada hari apa?
   // Munculkan hasil hitungan hari dari H
  if (H <= 0) {          
  	HMTH = "Sabtu"; 
   } else if (H <= 1) {   
 	HMTH = "Minggu"; 	
  } else if (H <= 2) {    
 	HMTH = "Senin"; 
  } else if (H <= 3) {    
 	HMTH = "Selasa"; 
  } else if (H <= 4) {   
 	HMTH = "Rabu"; 
  } else if (H <= 5) {   
 	HMTH = "Kamis"; 
  } else if (H <= 6) {   
 	HMTH = "Jum'at"; 
  } else if (H <= 7) {   
 	HMTH = "Sabtu"; 
  } 
   // Hari pasaran ahli Jawa
   // Masukan Hasil hari jawa 'di ambil dari nilai B & F'
   let I = B + F;
   let J = I % 5;
   // Hasilnya masuk pada pasaran apa?
   if (J <= 0) {          
  	HMP = "Kliwon"; 
   } else if (J <= 1) {   
 	HMP = "Legi"; 	
  } else if (J <= 2) {    
 	HMP = "Pahing"; 
  } else if (J <= 3) {    
 	HMP = "Pon"; 
  } else if (J <= 4) {   
 	HMP = "Wage"; 
  } else if (J <= 5) {   
 	HMP = "Kliwon"; 
  } 
   // Mengetahui apakah tahun tersebut termasuk kabisah atau basitoh???!
   let K = totaltahun % 30;
   if (K <= 0) {          
  	KBBS = "Basitoh"; 
   } else if (K <= 1) {   
 	KBBS = "Basitoh"; 	
  } else if (K <= 2) {    
 	KBBS = "Kabisah"; 
  } else if (K <= 3) {    
 	KBBS = "Basitoh"; 
  } else if (K <= 4) {   
 	KBBS = "Basitoh"; 
  } else if (K <= 5) {   
 	KBBS = "Kabisah"; 
  } else if (K <= 6) {   
 	KBBS = "Basitoh"; 	
  } else if (K <= 7) {    
 	KBBS = "Kabisah"; 
  } else if (K <= 8) {    
 	KBBS = "Basitoh"; 
  } else if (K <= 9) {   
 	KBBS = "Basitoh"; 
  } else if (K <= 10) {   
 	KBBS = "Kabisah"; 
  } else if (K <= 11) {   
 	KBBS = "Basitoh"; 	
  } else if (K <= 12) {    
 	KBBS = "Basitoh"; 
  } else if (K <= 13) {    
 	KBBS = "Kabisah"; 
  } else if (K <= 14) {   
 	KBBS = "Basitoh"; 
  } else if (K <= 15) {   
 	KBBS = "Kabisah"; 
  } else if (K <= 16) {   
 	KBBS = "Basitoh"; 	
  } else if (K <= 17) {    
 	KBBS = "Basitoh"; 
  } else if (K <= 18) {    
 	KBBS = "Kabisah"; 
  } else if (K <= 19) {   
 	KBBS = "Basitoh"; 
  } else if (K <= 20) {   
 	KBBS = "Basitoh"; 
  } else if (K <= 21) {   
 	KBBS = "Kabisah"; 
  } else if (K <= 22) {   
 	KBBS = "Basitoh"; 	
  } else if (K <= 23) {    
 	KBBS = "Basitoh"; 
  } else if (K <= 24) {    
 	KBBS = "Kabisah"; 
  } else if (K <= 25) {   
 	KBBS = "Basitoh"; 
  } else if (K <= 26) {   
 	KBBS = "Kabisah"; 
  } else if (K <= 27) {   
 	KBBS = "Basitoh"; 	
  } else if (K <= 28) {    
 	KBBS = "Basitoh"; 
  } else if (K <= 29) {    
 	KBBS = "Kabisah"; 
  } else if (K <= 30) {   
 	KBBS = "Basitoh"; 
  } 
   
   // check apakah sudah memasukan inputan tahun atau belum?
   // jika belum, maka "Harap masukan tahun"
  if (tahun == "") { 
  	document.querySelector("#showdata").innerHTML 
 		= "Mohon maaf, harap masukan tahun yang !"; 
   } 
   // tambahkan inputan javanscrip 
  	// if (tahun == "" || tahun2 == "" || tahun3 "")
  	// 
  	// jika sudah, keluarkan hasil
  	 else { 
  	document.querySelector( 
  		"#showdata"
  	).innerHTML = 
 		` 
 		<table>
 		
 		<tr>
 		  <td>Tahun</td>
        <td>:</td>
          <td> ${totaltahun} </td>
 	         	</tr>
 		
 		<tr>
 		   <td>A</td>
         <td>:</td>
           <td> ${hasil} </td>
 	           </tr>
 		
 		<tr>
 		    <td> Tahun Jawa </td>
          <td>:</td>
            <td> ${grades} </td>
 	          	</tr>
 		<tr>
 		   <td> Tahun Tam </td>
         <td>:</td>
           <td> ${tahuntam} </td>
 	           </tr>
 		
 		<tr>
 		    <td> B </td>
          <td>:</td>
            <td> ${B} </td>
 	          	</tr>
 	   <tr>
 		    <td> C </td>
          <td>:</td>
            <td> ${C} </td>
 	          	</tr>       	
 	     
 	     <tr>
 		    <td> Kabisah </td>
          <td>:</td>
            <td> ${gradeskabisah} </td>
 	          	</tr> 
 	          	
 	     <tr>
 		    <td> Basitoh </td>
          <td>:</td>
            <td>${gradesbasitoh}  </td>
 	          	</tr> 
 	        
 	        <tr>
 		       <td> D </td>
              <td>:</td>
                <td> ${D} </td>
 	              	</tr>
 	        
 	         <tr>
 		        <td> E </td>
              <td>:</td>
                <td> ${E} </td>
 	              	</tr>
 	        
 	        <tr>
 		       <td> F </td>
              <td>:</td>
                <td> ${F} </td>
 	              	</tr>
 	        
 	        <tr>
 		       <td> G </td>
              <td>:</td>
                <td> ${G} </td>
 	              	</tr>
 	        
 	        <tr>
 		       <td> H </td>
              <td>:</td>
                <td> ${H} </td>
 	              	</tr>
 	        
 	         <tr>
 		         <td> Hari </td>
               <td>:</td>
                 <td> ${HMTH} </td>
 	               	 </tr>
 	               	 
 	         <tr>
 		         <td> I </td>
               <td>:</td>
                 <td> ${I} </td>
 	               	 </tr>
 	               	 
 	         <tr>
 		         <td> J </td>
               <td>:</td>
                 <td> ${J} </td>
 	               	 </tr> 	 
 	               	 
 	          <tr>
 		         <td> Pasaran </td>
               <td>:</td>
                 <td> ${HMP} </td>
 	               	 </tr>     	 
 	          	
 	          	<tr>
 		         <td> K </td>
               <td>:</td>
                 <td> ${K} </td>
 	               	 </tr> 
 	          	
 	          		<tr>
 		         <td> KBBS </td>
               <td>:</td>
                 <td> ${KBBS} </td>
 	               	 </tr> 
 	               	 
 	         	</table>
 		
 		<h1 style="margin-top:20px"> Al-hasil <td>:</td> </h1>
 		       <tr>
 		         <td> Awal tahun ${totaltahun} jatuh pada hari </td>
               <td>:</td>
                 <td> ${HMTH} , ${HMP}</td>
 	               	 </tr> 
	  `; 
 	} 
  }; 
  