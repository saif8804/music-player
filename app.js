let arr = [
    {songName : "Arjan Vailley", url:"./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" },
    {songName : "jale 2", url:"./songs/jale 2.mp3", img: "./images/jale.jpg"},
    {songName : "Phle bhi mai", url:"./songs/pehle Bhi Main.mp3", img: "./images/animal.jpg"},
    {songName : "Ram sia Ram", url:"./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg"},

]

let allSongs = document.querySelector(".all-songs");

let audio = new Audio()
let selectedSong = 0;
let poster = document.querySelector(".left");
let play = document.querySelector(".play");
let forward = document.querySelector(".forward")
let backward = document.querySelector(".backward")


function mainFunction(){
    let clutter = "";

arr.forEach((elem ,idx)=>{
      clutter += `  <div class="songs-card" id=${idx}>
      <div class="part-1">
        <img
          src=${elem.img}
          alt="animal"
        />
        <h4>${elem.songName}</h4>
      </div>
      <h6>3:56</h6>
    </div>`
})

allSongs.innerHTML = clutter;

audio.src = arr[selectedSong].url;
poster.style.backgroundImage = `url(${arr[selectedSong].img})`

}

mainFunction();

allSongs.addEventListener("click",(dets)=>{
    selectedSong = dets.target.id ;
    play.innerHTML = `<i class="ri-pause-line"></i>`
    flag = 1 ;
    mainFunction();
    audio.play();
})

var flag = 0

play.addEventListener("click",()=>{
     if(flag == 0 ){
        play.innerHTML = `<i class="ri-pause-line"></i>`
        mainFunction()
        audio.play();
        flag = 1 
     }else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mainFunction();
        audio.pause();
         flag = 0;
     }
})


forward.addEventListener("click",()=>{

    if(selectedSong < arr.length -1 ){
        selectedSong++;
        mainFunction();
        audio.play();
    }else{
        forward.style.opacity = 0.4;
    }
})

backward.addEventListener("click",()=>{
    if(selectedSong > 0 ) {
        selectedSong--;
        mainFunction();
        audio.play();
    }else{
        backward.style.opacity = 0.4;
    }

})
