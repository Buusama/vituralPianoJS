import { NotesMap } from './notes.js';

let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');


const pianoKeys = document.querySelectorAll(".piano-keys .key"),
    volumeSlider = document.querySelector(".volume-slider input"),
    keysCheckbox = document.querySelector(".keys-checkbox input");
let mapFile = (name) => {
    let file = ''
    NotesMap.forEach(note => {
        if (note.name == name) {
            file = note.file
        }
    })
    return file
}
let allKeys = [];

const playTune = (key) => {
    const audio = new Audio(); // creating audio object
    audio.src = `assets/tunes/piano/${mapFile(key)}`; // passing audio src based on key pressed
    audio.play(); // playing audio
    const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
    clickedKey.classList.add("active"); // adding active class to the clicked key element
    setTimeout(() => { // removing active class after 150 ms from the clicked key element
        clickedKey.classList.remove("active");
    }, 200);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // adding data-key value to the allKeys array
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}
pianoKeys.forEach(key => key.classList.toggle("hide"));

const showHideKeys = () => {
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}


keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);




for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

//function to convert  like C3 -> Tab
function convertToKeyCode(key) {
    let keyCode = ''
    NotesMap.forEach(note => {
        if (note.name == key) {
            keyCode = note.key
        }
    })
    return keyCode
}


window.addEventListener('keydown', function (e) {

    for (let i = 0; i < keys.length; i++) {
        if (e.code == convertToKeyCode(keys[i].getAttribute('keyname'))) {
            keys[i].classList.add('active')
            e.preventDefault();
        }
        if (e.code == 'Space') {
            spaceKey.classList.add('active')
            e.preventDefault();
        }
        if (e.code == 'ShiftLeft') {
            shift_right.classList.add('active')
            e.preventDefault();
        }
        if (e.code == 'ShiftRight') {
            shift_left.classList.add('active')
            e.preventDefault();
        }
        if (e.code == 'CapsLock') {
            caps_lock_key.classList.add('active');
            e.preventDefault();
        }
    }
    let key = ''
    NotesMap.forEach(note => {
        if (note.key == e.code) {
            key = note.name
        }
    })
    // if the pressed key is in the allKeys array, only call the playTune function
    if (allKeys.includes(key)) playTune(key);
})

window.addEventListener('keyup', function (e) {
    for (let i = 0; i < keys.length; i++) {
        if (e.code == convertToKeyCode(keys[i].getAttribute('keyname'))) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if (e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if (e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
            shift_right.classList.add('remove')
        }
        if (e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
            shift_left.classList.add('remove')
        }
        if (e.code == 'CapsLock') {
            caps_lock_key.classList.remove('active');
            caps_lock_key.classList.add('remove');
        }
        setTimeout(() => {
            keys[i].classList.remove('remove')
        }, 200)
    }
})
