let generateBtn = document.querySelector("#generateBtn");
let appendedParametersDivEl = document.querySelector(".appended-parameters")


let beatParameters = {
    key: ["AMinor", "BMajor", "CMajor"],
    progression: ["VI- V IV V", "VI- V IV III"],
    tempo: ["110BPM", "120BPM", "130BPM", "140BPM", "150BPM", "160BPM", "170BPM"],
    style: ["Trap", "lofi", "Pop", "Boom-Bap", "Emo-Rap", "RnB", "Folk", "Drill", "House", "BeatToSmokeTo Type Beat" ]
}


let generateInspiration = function() {
    // Clear div contents
    appendedParametersDivEl.textContent = ''
    //Randomly pull a key
    let randomKey = beatParameters.key[Math.floor(Math.random() * beatParameters.key.length)]
    let randomProgression = beatParameters.progression[Math.floor(Math.random() * beatParameters.progression.length)]
    let randomTempo = beatParameters.tempo[Math.floor(Math.random() * beatParameters.tempo.length)]
    let randomStyle = beatParameters.style[Math.floor(Math.random() * beatParameters.style.length)]

    // Create a title for the container
    let generatedTitle = document.createElement("h2")
    generatedTitle.textContent = "Here are your parameters:"

    appendedParametersDivEl.appendChild(generatedTitle)

    // Create an div with the random key content
    let randomKeyEl = document.createElement('span')
    randomKeyEl.textContent = "Key: " + randomKey;
    randomKeyEl.classList.add("parameters-style")
    // Append to container
    appendedParametersDivEl.appendChild(randomKeyEl)

    // Create an div with the random progression content
    let randomProgressionEl = document.createElement('span')
    randomProgressionEl.textContent = "Chords: " + randomProgression;
    randomProgressionEl.classList.add("parameters-style")

    // Append to container
    appendedParametersDivEl.appendChild(randomProgressionEl)

    // Create an div with the random tempo content
    let randomTempoEl = document.createElement('span')
    randomTempoEl.textContent = "Tempo: " + randomTempo;
    randomTempoEl.classList.add("parameters-style")

    // Append to container
    appendedParametersDivEl.appendChild(randomTempoEl)

    // Create an div with the random style content
    let randomStyleEl = document.createElement('span')
    randomStyleEl.textContent = "Genre: " + randomStyle;
    randomStyleEl.classList.add("parameters-style")

    // Append to container
    appendedParametersDivEl.appendChild(randomStyleEl)

    
    
 
}

generateBtn.addEventListener("click", generateInspiration)



