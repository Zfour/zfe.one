

		// how many bars do we want to draw? Max of 128.
		var bars = 128, hue=320;

		// add the bar elements to the container div:
		for (var i=0; i<bars; i++) {
			var bar = document.createElement("div");
			bar.className = "bar";
			container.appendChild(bar);
		}
		
		// create a new JAM instance:
		var jam = new JustAddMusic({
			 // default audio to load:
		
			paused:true,
			deltaT:150,
              avgT:150,
			// label text to include in the UI (bottom left)



			volume:0,
			// set the number of spectrum values we'd like to get back:
			spectrumBins: bars,

			// the ontick callback, called 60 time per second by default
			// with the latest audio data object as the only parameter
			ontick: function(o) {
				// change the base hue value on a bass hit:
				if (o.low.hit) { hue = (hue+100)%360; }

				for (var i=0; i<bars; i++) {
					// update bars based on the spectrum values:
					var style = container.childNodes[i].style, val = o.spectrum[i];
					style.height = val*20+"%";
					style.background = "hsl("+ (hue-val*180) +","+ (val*50+50) +"%,"+ (val*40+20) +"%)";
				}
			}
		});
 
setTimeout(function(){	 

jam.loadAudio(ap.audio.currentSrc);
$(".aplayer-list").click(function(){
	              ap.volume(0, true);
  				  setTimeout(function(){jam.loadAudio(ap.audio.currentSrc);console.log(ap.audio.currentSrc)},500);
				  setTimeout(function(){ap.play();ap.seek(0);jam.seek(0);ap.volume(1, true)},4000);
});

console.log(ap.audio.currentSrc)},1500);




console.log("\n %c JustAddMusic 30b23c7 %c https://github.com/gskinner/JustAddMusic \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;")