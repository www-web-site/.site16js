const light = document.getElementById('light')
const dark = document.getElementById('dark')

light.onclick = function() {
    document.body.style.backgroundColor = 'rgba(196, 181, 165, 1)'
    document.querySelector('header h1').style.color = 'rgba(0, 0, 0, 1)'
    document.querySelectorAll('header ul li a').forEach(a => {
        a.style.color = 'rgba(0, 0, 0, 1)'
    })
    light.style.backgroundColor = 'rgba(251, 152, 47, 1)'
    light.style.color = 'rgba(0, 0, 0, 1)'
    dark.style.backgroundColor = 'rgba(0, 0, 0, 1)'
    dark.style.color = 'rgba(255, 255, 255, 1)'
    document.querySelector('.sectiondiv h2').style.color = 'rgba(0, 0, 0, 1)'
    document.querySelector('.sectiondiv p').style.color = 'rgba(0, 0, 0, 1)'
    document.querySelector('.sectiondiv button').style.color = 'rgba(0, 0, 0, 1)'
}

dark.onclick = function() {
    document.body.style.backgroundColor = 'rgba(2, 1, 0, 1)'
    document.querySelector('header h1').style.color = 'rgba(255, 255, 255, 1)'
    document.querySelectorAll('header ul li a').forEach(a => {
        a.style.color = 'rgba(255, 255, 255, 1)'
    })
    light.style.backgroundColor = 'rgba(196, 181, 165, 1)'
    light.style.color = 'rgba(255, 255, 255, 1)'
    dark.style.backgroundColor = 'rgba(250, 144, 33, 1)'
    dark.style.color = 'rgba(255, 255, 255, 1)'
    document.querySelector('.sectiondiv h2').style.color = 'rgba(255, 255, 255, 1)'
    document.querySelector('.sectiondiv p').style.color = 'rgba(255, 255, 255, 1)'
    document.querySelector('.sectiondiv button').style.color = 'rgba(255, 255, 255, 1)'
}