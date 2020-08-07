const songs = [
	"Across-The-Universe.mp3",
	"Bruce-Springsteen-Hello-Sunshine.mp3",
	"Cat-Stevens-Moon-Shadow.mp3",
	"Elton-John-Circle-of-Life.mp3",
	"I'll-Find-My-Way-Home.mp3",
	"Kris-Kristofferson-The-Pilgrim.mp3",
	"Simon&Garfunkel-If-I-Could.mp3",
	"Somewhere-Over-The-Rainbow.mp3",
	"The-Sound-of-Silence.mp3",
	"Wicked-Game.mp3",
	"Roxy-Music-More-Than-This.mp3",
	"John-Lennon-Nobody-Loves-You.mp3"
]

const createSongList = () => {
	const list = document.createElement('ol')
	for(let i = 0; i<songs.length; i++){
		const item = document.createElement('li')
		item.appendChild(document.createTextNode(songs[i]))

		list.appendChild(item)
	}
	return list
}

document.getElementById('songList').appendChild(createSongList())

songList.onclick = (e) =>{

	const clickedItem = e.target 
	const source = document.getElementById('source')
	source.src = 'songs/'+ clickedItem.innerText


	document.getElementById('currentlyPlayingSong').innerText = "Currently Playing: "
	document.getElementById('currentSong').innerText = clickedItem.innerText

	player.load()
	player.play()

}

const playAudio = ()=> {
	if(player.readyState){
		player.play()
	}
}

const pauseAudio = () =>{
	player.pause()
}

const slider = document.getElementById('volumeSlider')
slider.oninput = (e) => {
const volume = e.target.value 
player.volume = volume

}

const updateProgress = () => {
	if(player.currentTime > 0) {
		const progressBar = document.getElementById('progress')
	// Checking if progress bar func working
	// console.log(progressBar.value + "Progress bar value")
	// console.log(player.currentTime + "current time")
	// console.log(player.duration + "duration")
		progressBar.value = (player.currentTime / player.duration)	* 100

	}
	
}