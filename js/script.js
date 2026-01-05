
document.addEventListener('DOMContentLoaded', function () {
	var numberButtons = document.querySelectorAll('.btn.number');

	function playForLabel(label) {
		if (!/^[0-9]$/.test(label)) return;
		var audio = new Audio('music/sample' + label + '.mp3');
		audio.volume = 0.8;
		audio.play().catch(function (err) { console.warn('Playback failed:', err); });


		var btn = Array.prototype.slice.call(numberButtons).find(function(b){ return b.textContent.trim() === label; });
		if (btn) {
			var prev = btn.style.backgroundColor;
			btn.style.backgroundColor = 'red';
			setTimeout(function () { btn.style.backgroundColor = prev || ''; }, 150);
		}
	}

	numberButtons.forEach(function (btn) {
		btn.addEventListener('click', function () {
			var label = btn.textContent.trim();
			playForLabel(label);
		});
	});

	var sampleButtons = document.querySelectorAll('.btn.circle');
	var currentLoopAudio = null;
	var currentLoopBtn = null;




	document.addEventListener('keydown', function (e) {
		var k = e.key;
		if (/^[0-9]$/.test(k)) {
			playForLabel(k);
		}
	});
});



