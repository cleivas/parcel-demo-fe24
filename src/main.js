import anime from "animejs"

const img = document.createElement('img');
document.body.append(img);

const urlObj = new URL('./media/FullMoon2010.jpg', import.meta.url)

img.src = urlObj.href;

console.log(urlObj)
console.log(import.meta.url)

anime({
    targets: 'img',
    rotate: 360,
    duration: 8000,
    loop: true
})