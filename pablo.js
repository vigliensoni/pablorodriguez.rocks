// const Hydra = require('hydra-synth')

// var myElement = document.createElement('img'); // <img />
// myElement.src = 'PabloPIMP.jpeg';    // <img src=" " />


window.onload = function () {
  const hydra = new Hydra()

  // by default, hydra makes everything global.
  // see options to change parameters
  // osc().out()
  
  shape(2,0.5,1.5)
  .scale(() => a.fft[0]*1.25 + 0.05)
  .color([0.5,2].smooth(1),0.3,0)
  .repeat(4,4)
  .modulateScale(osc(0.2,0.5),-0.6)
  .add(o0,0.8)
  .scale(0.9) 
  .out()

  // s0.init(
  //   {
  //     src: myElement , // variable that holds element
  //     dynamic: false   // set true for video
  //   }
  // );
  
  // src(
  //   s0
  // )
  

  // let t = document.createElement('div')
  // t.id = "header-text"
  // t.innerText = "53!"
  // t.style.color = "white"
  // // t.style.fontFamily = "Helvetica"
  // t.style.fontSize = "46px"

  // document.body.appendChild(t)

  c = document.getElementsByTagName('canvas')[0]


}

