const heroRef = document.querySelector(".hero");
const textRef = document.querySelector("h1");
const walk = 100;

heroRef.addEventListener("mousemove", shadow);

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = heroRef;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / height) * walk - walk / 2;

  textRef.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(0, 0, 255, .5),
  ${xWalk}px ${yWalk * -1}px 0 rgba(0, 255, 0, .5),
  ${yWalk * -1}px ${xWalk}px 0 rgba(255, 255, 0, .5),
  ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 255, .5)
    `;
}
