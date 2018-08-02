
anime({
  targets: 'div.logo1.box',
  rotate: [{
    value: 720,
    duration: 800,
    delay:3200,
    easing: 'easeInOutSine'
  },
  {
    value: 0,
    duration: 800,
    delay:3200,
    easing: 'easeInOutSine'
  }
],
  scale: [{
    value: 0,
    duration:0,
    delay:0,
    easing: 'easeInOutQuart'
  },
  {
    value: 1,
    duration: 800,
    delay: 3200,
    easing: 'easeInOutQuart'
  },
  {
    value: 0,
    duration: 800,
    delay:3200,
    easing: 'easeInOutQuart'
  }],
  delay: 200, // All properties except 'scale' inherit 250ms delay
  loop: 2
});



anime({
  targets: 'div.logo2.box',
  rotate: [{
    value:0,
    duration: 800,
    delay:200,
    easing: 'easeInOutSine'
  },
  {
    value: 720,
    duration: 800,
    delay:2000,
    easing: 'easeInOutSine'
  }],
  scale: [{
    value: 1,
    duration:0,
    delay:0,
    easing: 'easeInOutQuart'
  },
  {
    value: 0,
    duration: 800,
    delay: 3200,
    easing: 'easeInOutQuart'
  },
  {
    value: 1,
    duration: 800,
    delay:3200,
    easing: 'easeInOutQuart'
  }],
  delay: 200, // All properties except 'scale' inherit 250ms delay
  loop: 2
});
