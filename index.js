const transformer = gsap.utils.pipe (
  gsap.utils.clamp (0, 100),
  gsap.utils.mapRange (0, 100, 0, window.innerWidth),
  gsap.utils.snap (20)
);
const container = document.querySelector ('.container');
const canvas = document.querySelector ('.animation-window');
const play = document.querySelector ('#play');
const pause = document.querySelector ('#pause');
const otro = document.querySelector ('#otro');
const conjunto = document.createElement ('div');

conjunto.className = 'conjunto';
canvas.appendChild (conjunto);
for (let i = 0; i < 33; i++) {
  const element = document.createElement ('img');
  element.src = '/html/cloud.png';
  element.className = `cloud`;
  element.width = `${2400 / 30}`;
  element.height = `${1316 / 30}`;
  element.style.zIndex = `${i + 1}`;
  // const cloud = document.querySelector ('.cloud');

  element.addEventListener ('mouseover', e => {
    // console.log (e.target);

    if (e.target.className === 'cloud') {
      gsap.to (e.target, {
        rotation: `random(-33, 22)`,
        duration: `random(0.9, 1.3)`,
        scale: `random(1.1, 1.7)`,
        ease: 'power2.inOut',
        repeat: true,
        // overwrites: 'auto',
        yoyo: true,
        yoyoEase: 'elastic.out',
      });
    }

    // console.log (i);
  });

  conjunto.appendChild (element);
}

gsap.set ('.cloud', {opacity: 0, x: 30, y: -20});

function slideIn (x) {
  gsap.to (`${x}`, {
    opacity: 1,
    rotation: 'random(-7, 7)',
    x: 'random(-60, 70)',
    y: 'random(-10, 150)',
    duration: 'random(1.6, 2.9)',
    ease: 'elastic',
    stagger: 0.007,
    overwrite: true,
  });
  console.log ('Slide in');
}

function slideOut (x) {
  gsap.to (`${x}`, {
    opacity: 0,
    rotation: 'random(-22, 22)',
    x: 'random(-20, 20)',
    y: 'random(-10, 125)',
    duration: 1.4,
    ease: 'power2.in',
    overwrite: true,
  });
  console.log ('Slide Out');
}
const cloud = document.querySelector ('.cloud');
function microMovement (x, y) {
  gsap.to ('.cloud', {
    delay: 0.6,
    // rotation: 'random(-14, 15)',
    duration: 5.8,
    yoyo: true,
    ease: 'elastic.inOut',
    // yoyoEase: 'elastic.out',
    stagger: 0.007,
    // stagger: 1,
    repeat: -1,
    // overwrite:true,
  });
}

function contenedorAnim () {
  gsap.fromTo (
    '.conjunto',
    {
      scale: 1,
      x: 0,
      y: 0,
    },
    {
      scale: 1.06,
      x: 'random(-3, 3)',
      y: 'random(-3, 3)',
      duration: 'random(1.6, 2.9)',
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
    }
  );
}

play.addEventListener ('click', () => {
  slideIn ('.cloud');
  microMovement ();
  contenedorAnim ();

  console.log ('CLICK PLAY');
});

otro.addEventListener ('click', () => {
  slideOut ('.cloud');
  console.log ('CLICK OUT');
});

container.addEventListener ('mouseover', e => {
  let x = e.offsetX;
  let y = e.offsetY;

  transformer (x);
  transformer (y);
  const color = `rgba(${x / 2}, ${x / 3}, ${x / 2}, 19 )`;

  gsap.to (canvas, {
    backgroundColor: color,
    // skewY: e.offsetY,
    duration: 1.4,
  });

  console.log ('X es: ', e.screenX);
  console.log ('Y es: ', e.screenY);
});

canvas.addEventListener ('movementY', e => {
  console.log (e);
});
