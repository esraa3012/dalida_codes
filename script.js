var xx = window.matchMedia("(max-width: 800px)")
  var divView = document.querySelector('.view');
  divView.addEventListener("click",() =>{
    const box = document.getElementsByClassName('nav_links');
    if (xx.matches) { // If media query matches
      box[0].style.visibility = "hidden";
      //box[0].style.transition = "1000ms";
    } else {
      box[0].style.visibility = "visible";
      //box[0].style.transition = "1000ms";
    }
})
var divVieww = document.querySelector('.vieww');
divVieww.addEventListener("click",() =>{
  const box = document.getElementsByClassName('nav_links');
  if (xx.matches) { 
    box[0].style.visibility = "hidden";
    //box[0].style.transition = "1000ms";
  } else {
    box[0].style.visibility = "visible";
    //box[0].style.transition = "1000ms";
  }
})
var divVieew = document.querySelector('.vieew');
divVieew.addEventListener("click",() =>{
  const box = document.getElementsByClassName('nav_links');
  if (xx.matches) {
    box[0].style.visibility = "hidden";
    //box[0].style.transition = "1000ms";
  } else {
    box[0].style.visibility = "visible";
    //box[0].style.transition = "1000ms";
  }
})
var divViiew = document.querySelector('.viiew');
divViiew.addEventListener("click",() =>{
  const box = document.getElementsByClassName('nav_links');
  if (xx.matches) { 
    box[0].style.visibility = "hidden";
    //box[0].style.transition = "1000ms";
  } else {
    box[0].style.visibility = "visible";
    //box[0].style.transition = "1000ms";
  }
})
var divVview = document.querySelector('.vview');
divVview.addEventListener("click",() =>{
  const box = document.getElementsByClassName('nav_links');
  if (xx.matches) {
    box[0].style.visibility = "hidden";
    //box[0].style.transition = "500ms";
  } else {
    box[0].style.visibility = "visible";
    //box[0].style.transition = "500ms";
  }
})

var divLogo = document.querySelector('.logo');
divLogo.addEventListener("click",() =>{
    const box = document.getElementsByClassName('nav_links');
    if (xx.matches) {
      box[0].style.visibility = "hidden";
      //box[0].style.transition = "500ms";
    } else {
      box[0].style.visibility = "visible";
      //box[0].style.transition = "500ms";
    }
})

var divLabel = document.querySelector('label');
  divLabel.addEventListener("click",() =>{
      const box = document.getElementsByClassName('nav_links');
      box[0].style.visibility = "visible";
      //box[0].style.transition = "1000ms";
  })
//Footer
const formNewsletter = document.querySelector('#newsletter');
const inputNewsletter = document.querySelector('#newsletter_email');
const pNewsResult = document.querySelector('#newsletter_result');

formNewsletter.addEventListener('submit', function(e) {
    e.preventDefault();
    ajaxNewsletter();
});

inputNewsletter.addEventListener('focusin', function() {
    inputNewsletter.classList.remove("newsletter_invalid");
    pNewsResult.removeAttribute('class');
    pNewsResult.textContent = " ";
})

inputNewsletter.addEventListener('focusout', function() {
    checkNewsletter();
});

function checkNewsletter() {
    if (inputNewsletter.validity.valueMissing || inputNewsletter.validity.typeMismatch) {
        inputNewsletter.classList.add("newsletter_invalid");
        pNewsResult.classList.add("newsletter_p_invalid");
        if (inputNewsletter.validity.valueMissing) {
            pNewsResult.textContent = "The field is empty.";
        } else if (inputNewsletter.validity.typeMismatch) {
            pNewsResult.textContent = inputNewsletter.value + " Isn't a valid email address.";
        }
    } else {
        inputNewsletter.classList.remove("newsletter_invalid");
        pNewsResult.removeAttribute('class');
        pNewsResult.textContent = " ";
        return true;
    }
}

function ajaxNewsletter() {
    if (checkNewsletter()) {
        const data = new FormData(formNewsletter);

        fetch("contactform.php", { method: "POST", body: data })
            .then(response => response.json())
            .then((result) => {
                if (result.responseServer === true && result.responseDB === true) {
                    formNewsletter.reset();
                    pNewsResult.textContent = "Your email address has been registered.";
                    pNewsResult.classList.add("newsletter_p_validd");
                } else if (result.responseServer === true && result.responseDB === "23000") {
                    inputNewsletter.classList.add("newsletter_invalid");
                    pNewsResult.classList.add("newsletter_p_invalid");
                    pNewsResult.textContent = "This email address is already registered.";
                } else {
                    inputNewsletter.classList.add("newsletter_invalid");
                    pNewsResult.classList.add("newsletter_p_invalid");
                    pNewsResult.textContent = "An error has occurred.";
                }
            });
        return false;
    }
}
// const inpEmail = document.querySelector("form input:first-child");
// const requirementsEmail = document.querySelector("form p");
// const form = document.querySelector("form");

// function myFunction() {

//     if (!inpEmail.checkValidity()) {
//       requirementsEmail.setAttribute("class", "requirements_visible");
//       inpEmail.setAttribute("class", "input_error");
//     } else {
//       requirementsEmail.setAttribute("class", "requirements");
//       inpEmail.removeAttribute("class");
//     }
// }
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//   });

//-------------------------------------------------

var btn = document.querySelector('#Gallery p button');
var img_tracker = 'befor';
btn.addEventListener("click",() =>{
  const img = document.getElementById('dalida_left');
  const img1 = document.getElementById('dalida_center_top');
  const img2 = document.getElementById('dalida_center_bottom');
  const img3 = document.getElementById('dalida_right');
  const img4 = document.getElementById('dalida_bottom_left');
  const img5 = document.getElementById('dalida_bottom_right');
  if(img_tracker=='befor'){
     img.src = "dalida_leftjs.png";
     img1.src = "dalida_center_topjs.png";
     img2.src = "dalida_center_bottomjs.png";
     img3.src = "dalida_rightjs.png";
     img4.src = "dalida_bottom_leftjs.png";
     img5.src = "dalida_bottom_rightjs.png";
     img_tracker = 'after';
}else{
  img.src = 'dalida_left.png';
  img1.src = 'dalida_center_top.png';
  img2.src = "dalida_center_bottom.png";
  img3.src = "dalida_right.png";
  img4.src = "dalida_bottom_left.png";
  img5.src = "dalida_bottom_right.png";
  img_tracker = 'befor';
}

})
//------------------------------------------------------
var btn = document.querySelector('#Cinema p button');
btn.addEventListener("click",() =>{
  const box = document.getElementById('replacce-me');
  const boxx = document.getElementById('replaccee-me');
  const img = document.getElementById('dalida_cinema');
  if(img_tracker=='befor'){
    boxx.style.display = "block";
    box.style.display = "none";
     img.src = "dalida_cinemajs.png";
     img_tracker = 'after';
}else{
  img.src = 'dalida_cinema.png';
  boxx.style.display = "none";
  box.style.display = "block";
  img_tracker = 'befor';
}
})
var btnn = document.querySelector('#musics p button');
btnn.addEventListener("click",() =>{
  const box = document.getElementById('replace-me');
  const boxx = document.getElementById('replacee-me');
  const imgg = document.getElementById('dalida_musics');
  if(img_tracker=='befor'){
    boxx.style.display = "block";
    box.style.display = "none";
     imgg.src = "dalida_musicsjs.png";
     img_tracker = 'after';
}else{
  imgg.src = 'dalida_musics.png';
  boxx.style.display = "none";
  box.style.display = "block";
  img_tracker = 'befor';
}
})
//-------------------------------
var Slice = function(){
     var sliceDiv = document.getElementById('slice');
     var gridx = 4;
     var w = sliceDiv.offsetWidth;
     var h = sliceDiv.offsetHeight;
     var img = document.querySelectorAll('#slice img')[0].src;
     var delay = 0.05;

     console.log(w, h, img);

     this.create = function(){
        
      for(x = 0; x < gridx; x++){
        var width = x * w /gridx + "px";
        var div = document.createElement("div");
        document.getElementById('slice').appendChild(div);
        div.style.left = width;
        div.style.top = 0;
        div.style.width = w / gridx + "px";
        div.style.height = h +"px";
        div.style.backgroundImage = "url("+img+")";
        div.style.backgroundPosition = "-" + width;
        div.style.backgroundSize = w + "px";
        div.style.transitionDelay = x * delay + "s";
      }
     }

     this.create();

     document.getElementById('slice').onmouseover = function(){
      mouseOver();
     }

     document.getElementById('slice').onmouseout = function(){
      mouseOut();
     }

     function mouseOver(){
      sliceDiv.classList.add('active');
     }

     function mouseOut(){
      sliceDiv.classList.remove('active');
     }
}
window.onload = function(){
  var slice = Slice();
}
// //----------------------------------------------
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.2em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  //----------------------------------------------
  var texttWrapper = document.querySelector('.ml3 .lettters');
texttWrapper.innerHTML = texttWrapper.textContent.replace(/\S/g, "<span class='lettter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .lettter',
    translateY: ["1.2em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  //-------------------------------------------------
  var texxtWrapper = document.querySelector('.ml4 .leetters');
  texxtWrapper.innerHTML = texxtWrapper.textContent.replace(/\S/g, "<span class='leetter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml4 .leetter',
      translateY: ["1.2em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    }).add({
      targets: '.ml4',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
    //--------------------------------------
    var teextWrapper = document.querySelector('.ml5 .lletters');
  teextWrapper.innerHTML = teextWrapper.textContent.replace(/\S/g, "<span class='lletter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml5 .lletter',
      translateY: ["1.2em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    }).add({
      targets: '.ml5',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
    //---------------------------------------
    var ttextWrapper = document.querySelector('.ml7 .letteers');
    ttextWrapper.innerHTML = ttextWrapper.textContent.replace(/\S/g, "<span class='letteer'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '.ml7 .letteer',
        translateY: ["1.2em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
      }).add({
        targets: '.ml7',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
      //------------------------------------------
      var textttWrapper = document.querySelector('.ml8 .letterrs');
      textttWrapper.innerHTML = textttWrapper.textContent.replace(/\S/g, "<span class='letterr'>$&</span>");
      
      anime.timeline({loop: true})
        .add({
          targets: '.ml8 .letterr',
          translateY: ["1.2em", 0],
          translateZ: 0,
          duration: 750,
          delay: (el, i) => 50 * i
        }).add({
          targets: '.ml8',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
       //--------------------------------------------
      //  import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
      //  const animatedImage = document.querySelector(".testimg");
      //  const animatedImageTimeLine = new ScrollTimeLine({
      //   scrollOffsets: [
      //     { target: animatedImage, edge: "end", threshold: "1"},
      //     { target: animatedImage, edge: "start", threshold: "1"},
      //   ],
      //  });
      //  animatedImage.animate(
      //   {
      //     transform: ["rotateX(90deg)", "rotate(0)"],
      //   },
      //   {
      //     duration:1,
      //     timeline:animatedImageTimeLine,
      //   }
      //  );
      //---------------------------------------
      const sliders = document.querySelectorAll(".slide-in");

      const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -150px 0px"
      };


      const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
          if(!entry.isIntersecting){
            return;
          }else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
          }
        })
      }, appearOptions);


      sliders.forEach(slider => {
        appearOnScroll.observe(slider);

      });
      //-----------------------------
      // window.addEventListener(scroll, ()=>{

      // })