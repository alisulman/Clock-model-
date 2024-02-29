
let hh = document.getElementById('hour')
let mm = document.getElementById('min')
let ss = document.getElementById('sec')

setInterval(() => {
    const time = new Date()
    let hr = time.getHours() * 30
    let mn = time.getMinutes() * 6
    let sc = time.getSeconds() * 6
    hh.style.transform = `rotate(${hr + mn / 12}deg)`
    mm.style.transform = `rotate(${mn}deg)`
    ss.style.transform = `rotate(${sc}deg)`
});
let hhh = document.getElementById('hour1')
let mmm = document.getElementById('min1')
let sss = document.getElementById('sec1')

setInterval(() => {
    const time = new Date()
    let hr = time.getHours() * 30
    let mn = time.getMinutes() * 6
    let sc = time.getSeconds() * 6
    hhh.style.transform = `rotate(${hr + mn / 12}deg)`
    mmm.style.transform = `rotate(${mn}deg)`
    sss.style.transform = `rotate(${sc}deg)`
});