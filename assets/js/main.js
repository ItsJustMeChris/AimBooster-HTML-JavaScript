var map = document.getElementById("aimmap");
var score = document.getElementById("score");

map.addEventListener('click', function(e) {
    let div = document.createElement('div')
    div.setAttribute('class', 'click')
    div.style.position = "absolute";
    div.style.left = e.clientX-5+'px';
    div.style.top = e.clientY-5+'px';
    map.appendChild(div)
    setInterval(function() {
        div.remove()
    }, 100);
    score.innerHTML = parseInt(score.innerHTML) - 1
})

var speed = 1000
var iterations = 0

setInterval(function() {
    if (iterations < speed) {
        return iterations += 100
    }
    iterations = 0
    let div = document.createElement('div')
    div.setAttribute('class', 'target')
    div.style.position = "absolute";
    let x = Math.floor(Math.random() * ((500-1)+1) + 1);
    let y = Math.floor(Math.random() * ((500-1)+1) + 1);
    div.style.left = x+'px';
    div.style.top = y+'px';
    map.appendChild(div)
    div.addEventListener('click', function() {
        let t = this
        setInterval(function() {
            t.remove()
        }, 100)
        speed -= 10
        score.innerHTML = parseInt(score.innerHTML) + 2
    })
}, 100);
