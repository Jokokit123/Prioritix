var JadIcon = document.getElementById('JadIcon');
var JadSprite = document.getElementById('JadSprite');
var Music = document.getElementById('AudioPlayer');
var ProgressBar = document.getElementById('SongProgress');
var NameOfSong = document.getElementById('NameOfSong');
var OSTs = ["After The Long Voyage", 
			"Crystalline Hollow", 
			"Harrowing Land Of Solitude", 
			"Thus Envelops The Night", 
			"The Will Of The Weak", 
			"Embrace The Movement", 
			"A Dance With Radiant Light", 
			"Umbral Showdown", 
			"Echoes Of The Salvific Ocean Depths", 
			"As Darkness Overshadows Light",
			"A Stance of Righteous Conviction",
			"Soar To Broader Horizons",
			"Watch Your Wings",
			"Flux Of Fractal Limbo",
			"Harmony Beyond The Mountains",
			"Of Sin And Jubilation"];
var Extensions = [".png" , ".gif"];
var IconState = "play";
var SpriteState = "JadF";
var MusicVolume = "volume";
var OptionSelected = 'none';
var Progress = 0;
var OSTsIndex = 0;
var OSTsPreviousIndex = 0;
var EasterEgg = true;
var FirstMove = true;
var x = -25, y = -125;
const Step = 100;

Music.addEventListener( 'timeupdate' , GetMusicProgress , false );
Music.addEventListener('ended', ExecuteOption, false);

document.addEventListener('DOMContentLoaded', function () {  
    const PlayPauseIcon = document.getElementById('PlayPauseIcon');
    PlayPauseIcon.addEventListener('mousemove', SwitchToGif, false);
    PlayPauseIcon.addEventListener('mouseout', SwitchToPng, false);
	PlayPauseIcon.addEventListener('click', SwitchState, false);
	Music.addEventListener('ended', SwitchStateCondition, false);
    function SwitchToGif() {
        PlayPauseIcon.setAttribute("src", "Icons/" + IconState + Extensions[1]);
    }
	function SwitchToPng() {
        PlayPauseIcon.setAttribute("src", "Icons/" + IconState + Extensions[0]);
    }
	function SwitchState() {
		if (IconState == "play") 
			IconState = "pause";
		else
			IconState = "play";
		PlayPauseIcon.setAttribute("src", "Icons/" + IconState + Extensions[0]);
    }
	function SwitchStateCondition() {
		if (OptionSelected == 'none') {
			SwitchState();
		}
	}
});

document.addEventListener('DOMContentLoaded', function () { 
    const ForwardIcon = document.getElementById('ForwardIcon');
    ForwardIcon.addEventListener('mousemove', SwitchToGif, false);
    ForwardIcon.addEventListener('mouseout', SwitchToPng, false);
	ForwardIcon.addEventListener('click', UpdateMusic, false);
    function SwitchToGif() {
        ForwardIcon.setAttribute("src", "Icons/forward" + Extensions[1]);
    }
	function SwitchToPng() {
        ForwardIcon.setAttribute("src", "Icons/forward" + Extensions[0]);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const BackwardIcon = document.getElementById('BackwardIcon');
    BackwardIcon.addEventListener('mousemove', SwitchToGif, false);
    BackwardIcon.addEventListener('mouseout', SwitchToPng, false);
	BackwardIcon.addEventListener('click', UpdateMusic, false);
    function SwitchToGif() {
        BackwardIcon.setAttribute("src", "Icons/backward" + Extensions[1]);
    }
	function SwitchToPng() {
        BackwardIcon.setAttribute("src", "Icons/backward" + Extensions[0]);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const VolumeIcon = document.getElementById('VolumeIcon');
    VolumeIcon.addEventListener('mousemove', SwitchToGif, false);
    VolumeIcon.addEventListener('mouseout', SwitchToPng, false);
	VolumeIcon.addEventListener('click', SwitchState, false);
    function SwitchToGif() {
        VolumeIcon.setAttribute("src", "Icons/" + MusicVolume + Extensions[1]);
    }
	function SwitchToPng() {
        VolumeIcon.setAttribute("src", "Icons/" + MusicVolume + Extensions[0]);
    }
	function SwitchState() {
		if (MusicVolume == "volume") 
			MusicVolume = "mute";
		else
			MusicVolume = "volume";
		VolumeIcon.setAttribute("src", "Icons/" + MusicVolume + Extensions[0]);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const SettingsIcon = document.getElementById('SettingsIcon');
    const SettingsOptions = document.getElementById('SettingsOptions');
    SettingsIcon.addEventListener('click', DisplaySettings, false);
	document.addEventListener('click', ClickOutsideToHide, false);
	function DisplaySettings() {
        if (SettingsOptions.style.display === 'flex') {
            SettingsOptions.style.display = 'none';
        } 
		else {
            SettingsOptions.style.display = 'flex';
        }
	}
	function ClickOutsideToHide(event) {
        if (!SettingsIcon.contains(event.target) && !SettingsOptions.contains(event.target)) {
            SettingsOptions.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
	const SettingsIcon = document.getElementById('SettingsIcon');
    const LoopIcon = document.getElementById('LoopIcon');
	const PlaylistIcon = document.getElementById('PlaylistIcon');
	const ShuffleIcon = document.getElementById('ShuffleIcon');
	LoopIcon.addEventListener('click', SelectLoop, false);
	PlaylistIcon.addEventListener('click', SelectPlaylist, false);
    ShuffleIcon.addEventListener('click', SelectShuffle, false);
	function SelectLoop() {
		if (OptionSelected != 'loop') {
			SelectOption('loop');
		}
		else {
			SelectOption('none');
		}
    }
	function SelectPlaylist() {
        if (OptionSelected != 'playlist') {
			SelectOption('playlist');
		}
		else {
			SelectOption('none');
		}
    }
	function SelectShuffle() {
        if (OptionSelected != 'shuffle') {
			SelectOption('shuffle');
		}
		else {
			SelectOption('none');
		}
    }
	
    function SelectOption(Option) {
        OptionSelected = Option;
		SwitchLoopToPng();
		SwitchPlaylistToPng();
		SwitchShuffleToPng();

        if (OptionSelected == 'loop') {
			SwitchLoopToGif();
        } 
		else {
			SwitchLoopToPng();
        }

        if (OptionSelected == 'playlist') {
			SwitchPlaylistToGif();
        } 
		else {
			SwitchPlaylistToPng();
        }

        if (OptionSelected == 'shuffle') {
			SwitchShuffleToGif();
        } 
		else {
			SwitchShuffleToPng();
        }
		
		if (OptionSelected == 'none') {
			SwitchSettingsToPng();
        } 
		else {
			SwitchSettingsToGif();
        }
    }
	
	function SwitchSettingsToGif() {
        SettingsIcon.setAttribute("src", "Icons/settings" + Extensions[1]);
    }
	function SwitchSettingsToPng() {
        SettingsIcon.setAttribute("src", "Icons/settings" + Extensions[0]);
    }
    function SwitchLoopToGif() {
        LoopIcon.setAttribute("src", "Icons/loop"	+ Extensions[1]);
    }
	function SwitchLoopToPng() {
        LoopIcon.setAttribute("src", "Icons/loop" + Extensions[0]);
    }
	function SwitchPlaylistToGif() {
        PlaylistIcon.setAttribute("src", "Icons/playlist" + Extensions[1]);
    }
	function SwitchPlaylistToPng() {
        PlaylistIcon.setAttribute("src", "Icons/playlist" + Extensions[0]);
    }
	function SwitchShuffleToGif() {
        ShuffleIcon.setAttribute("src", "Icons/shuffle" + Extensions[1]);
    }
	function SwitchShuffleToPng() {
        ShuffleIcon.setAttribute("src", "Icons/shuffle" + Extensions[0]);
    }
});

function GetMusicProgress() {
	if (!isNaN(Music.duration)) {
		Progress = (Music.currentTime / Music.duration) * 100;
		ProgressBar.style.width = Progress + '%';
    }
}

function PlayMusic() {
	if (Music.paused) {
		Music.play();
	}
	else {
		Music.pause();
	}
}

function NextMusic() {
	OSTsIndex = (OSTsIndex + 1) % OSTs.length;
    UpdateMusic();
}

function PreviousMusic() {
	OSTsIndex = (OSTsIndex - 1 + OSTs.length) % OSTs.length;
    UpdateMusic();
}

function UpdateMusic() {
    Music.setAttribute('src', "Tracks/" + OSTs[OSTsIndex] + '.mp3');
	NameOfSong.innerHTML = "-= " + OSTs[OSTsIndex] + " =-";
	if (IconState == "pause") {
		Music.play();
	}
	else {
		Music.pause();
		GetMusicProgress();
	}
	
}

function UpdateMusicByIndex(MusicIndex) {
	OSTsIndex = MusicIndex;
    Music.setAttribute('src', "Tracks/" + OSTs[OSTsIndex] + '.mp3');
	NameOfSong.innerHTML = "-= " + OSTs[MusicIndex] + " =-";
	if (IconState == "pause") {
		Music.play();
	}
	else {
		Music.pause();
		GetMusicProgress();
	}
	
}

function MuteMusic() {
	Music.muted = !Music.muted;
}

function ExecuteOption() {
    if (OptionSelected == 'loop') {
        LoopMusic();
    }
	else if (OptionSelected == 'playlist') {
        ContinuePlaylist();
    }
	else if (OptionSelected == 'shuffle') {
        ShufflePlaylist();
    } 
}

function LoopMusic() {
    Music.play();
}

function ContinuePlaylist() {
    OSTsIndex = (OSTsIndex + 1) % OSTs.length;
    Music.setAttribute('src', "Tracks/" + OSTs[OSTsIndex] + '.mp3');
	NameOfSong.innerHTML = "-= " + OSTs[OSTsIndex] + " =-";
    Music.play();
}

function ShufflePlaylist() {
    while (OSTsPreviousIndex == OSTsIndex) {
        OSTsIndex = Math.floor(Math.random() * OSTs.length);
    }
    OSTsPreviousIndex = OSTsIndex;
    Music.setAttribute('src', "Tracks/" + OSTs[OSTsIndex] + '.mp3');
	NameOfSong.innerHTML = "-= " + OSTs[OSTsIndex] + " =-";
    Music.play();
}

function ActivateEasterEgg() {
	if (EasterEgg) {
		EasterEgg = false;
		JadIcon.classList.add('IconActive');
		JadSprite.classList.add('SpriteActive');
		document.body.classList.add('CorruptionEffect');
		document.body.classList.remove('Background');
		document.body.style.overflow = "hidden";
	}
    EnableSpriteControl();
}

function EnableSpriteControl() {
	document.addEventListener('keyup', (event) => {
		const key = event.key.toLowerCase();
		SpriteMovement(key); 
	});
}

function SpriteMovement(key) {
    if (key === "w") { 
		SpriteState = "JadB"; 
	}
    else if (key === "s") { 
		SpriteState = "JadF"; 
	}
    else if (key === "a") {
		SpriteState = "JadL"; 
	}
    else if (key === "d") { 
		SpriteState = "JadR"; 
	}

    if (JadSprite.getAttribute("src") !== `Sprites/${SpriteState}${Extensions[1]}`) {
        JadSprite.setAttribute("src", "Sprites/" + SpriteState + Extensions[1]);
    }
	
    if (key === "w") {
		y -= Step; 
	}
    else if (key === "s") {
		y += Step; 
	}
    else if (key === "a" ) {
		x -= Step; 
	}
    else if (key === "d") { 
		x += Step; 
	}
	
    JadSprite.style.transform = `translate(${x}px, ${y}px)`;
	
    if (FirstMove) {
        FirstMove = false;
        document.body.classList.remove('CorruptionEffect');
        document.body.classList.add('Background');
        document.body.style.overflow = "";
		JadIcon.classList.remove('IconActive');
    }
}
