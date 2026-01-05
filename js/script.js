
document.addEventListener('DOMContentLoaded', function () {
	var numberButtons = document.querySelectorAll('.btn.number');
	numberButtons.forEach(function (btn) {
		btn.addEventListener('click', function () {
			var label = btn.textContent.trim();
			if (/^[0-9]$/.test(label)) {
				var audio = new Audio('music/' + label + '.mp3');
				audio.volume = 0.8;
				audio.play().catch(function (err) { console.warn('Playback failed:', err); });

				btn.style.backgroundColor = 'red';
				setTimeout(function () { btn.style.backgroundColor = ''; }, 150);
			}
		});
	});
});



