
document.addEventListener('DOMContentLoaded', function () {
	var numberButtons = document.querySelectorAll('.btn.number');
	var modeToggleBtn = document.querySelector('.btn.square.small');
	var chopBtn = Array.prototype.find.call(document.querySelectorAll('.btn'), function(btn) {
		return (btn.textContent || btn.innerText || '').trim() === 'Chop';
	});


	if (modeToggleBtn) {
		modeToggleBtn.addEventListener('click', function () {
			var audio = new Audio('music/halfstep.mp3');
			audio.volume = 0.8;
			audio.play().catch(function (err) { console.warn('Playback failed:', err); });
		});
	}


	if (chopBtn) {
		chopBtn.addEventListener('click', function () {
			var audio = new Audio('music/chop.mp3');
			audio.volume = 0.8;
			audio.play().catch(function (err) { console.warn('Playback failed:', err); });
		});
	}

	function playForLabel(label) {
		if (!/^[0-9]$/.test(label)) return;
		var audio = new Audio('music/sample' + label + '.mp3');
		audio.volume = 0.8;
		audio.play().catch(function (err) { console.warn('Playback failed:', err); });

		highlightForDigit(label);
	}

	function playDrumSound(label) {
		if (!/^[1-4]$/.test(label)) return;
		var audio = new Audio('music/fx' + label + '.mp3');
		audio.volume = 0.8;
		audio.play().catch(function (err) { console.warn('Playback failed:', err); });
	}

	function highlightForDigit(d) {

		if (/^[1-3]$/.test(d)) {
			var target = Array.prototype.slice.call(sampleButtons).find(function(b){
				var t = (b.textContent||b.innerText||'').trim();
				var m = t.match(/(\d+)/);
				return m && m[1] === d;
			});
			if (target) {
				var prev = target.style.backgroundColor;
				target.style.backgroundColor = '#d63384';
				setTimeout(function(){ target.style.backgroundColor = prev || ''; }, 150);
			}
			return;
		}

		var map = { '4': 'Kick', '5': 'Hat', '6': 'Clap' };
		if (map[d]) {
			var name = map[d];

			var allBtns = document.querySelectorAll('.btn');
			var target = Array.prototype.slice.call(allBtns).find(function(b){
				return (b.textContent||b.innerText||'').trim().toLowerCase() === name.toLowerCase();
			});
			if (target) {
				var prev = target.style.backgroundColor;
				target.style.backgroundColor = '#d63384';
				setTimeout(function(){ target.style.backgroundColor = prev || ''; }, 150);
			}
		}
	}

	numberButtons.forEach(function (btn) {
		btn.addEventListener('click', function () {
			var label = btn.textContent.trim();
			playDrumSound(label);
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



