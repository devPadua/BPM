let bpm = 0
let batidas = []
let ultimaBatida = 0
let quintaBatida = 0

document.documentElement.addEventListener('click', function(){
    clique()
}, true)

document.addEventListener('keydown', function(){
    clique()
})

function clique(){
    batidas.push(Date.now())
    if (batidas.length >= 5){
        ultimaBatida = batidas[batidas.length-1]
        quintaBatida = batidas[batidas.length-4]
        bpm = 60/((ultimaBatida - quintaBatida)/1000)*3
    }
    resultado(bpm)
}

function resultado(bpm){
    let bpmHTML = document.getElementById('bpm')
    bpmHTML.innerHTML = `BPM: ${parseInt(bpm)}`
}