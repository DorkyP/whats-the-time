function showUTCTime(){
	var date = new Date();
	var h = date.getUTCHours(); 
	var m = date.getUTCMinutes(); 
	var s = date.getUTCSeconds(); 
	var session = "AM";
	
	if (h >= 12) {
		session = "PM";
	}
	
	if (h == 0){
		h = 12;
	} else if (h > 12) {
		h = h - 12;
	}
	
	h = h.toString().padStart(2, '0');
	m = m.toString().padStart(2, '0');
	s = s.toString().padStart(2, '0');
	
	var time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("utc").innerText = time;
	document.getElementById("utc").textContent = time;
	
	setTimeout(showUTCTime, 1000);
	
}

showUTCTime();