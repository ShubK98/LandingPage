//menu on Right slides in

var MenuRTogg = document.querySelector('.aboutme');

MenuRTogg.addEventListener('click', () => {
        document.body.classList.toggle ('RtoL');
      
    });





//menu on Left slides in

    var MenuLTogg = document.querySelector('.resumeMenu');

    MenuLTogg.addEventListener('click', () => {
        document.body.classList.toggle ('LtoR');
      
    });

//back button toggle

    var toggleBackR = document.querySelector('.backbtnR');

    toggleBackR.addEventListener('click', () => {
        document.body.classList.toggle ('RtoL');
        document.getElementById("MenuR").style.transitionDuration = "0.5s";
      
    });

//back button toggle

var toggleBackL = document.querySelector('.backbtnL');

toggleBackL.addEventListener('click', () => {
    document.body.classList.toggle ('LtoR');
    document.getElementById("MenuL").style.transitionDuration = "0.5s";
    
});


//Hovbbies Menu on right
var MenuR2Togg = document.querySelector('.hobbi');

MenuR2Togg.addEventListener('click', () => {
        document.body.classList.toggle ('R2toL');
        
    });

    var toggleBackR2 = document.querySelector('.backbtnR2');

    toggleBackR2.addEventListener('click', () => {
        document.body.classList.toggle ('R2toL');
        document.getElementById("MenuR2").style.transitionDuration = "0.5s";
      
    });

//Skills menu on left2
var MenuSkill = document.querySelector('.skillll');

MenuSkill.addEventListener('click', () => {
        document.body.classList.toggle ('R3toL');
        
    });

    var toggleBackski = document.querySelector('.backbtnsk');

    toggleBackski.addEventListener('click', () => {
        document.body.classList.toggle ('R3toL');
        document.getElementById("MenuR3").style.transitionDuration = "0.5s";
      
    });


    //Code to animate resume Menu width 0 to 1
    const buttn = document.querySelector(".but1");
    const buttn2 = document.querySelector(".but2");
    const buttntitle = document.querySelector(".resDown");

    const wrap = document.querySelector(".wrp");



    MenuLTogg.addEventListener('click', () => {
        buttn.classList.toggle ('addedclass');
      
    });

    MenuLTogg.addEventListener('click', () => {
        buttn2.classList.toggle ('addedclass');
      Animation.transitionDuration
    });

    MenuLTogg.addEventListener('click', () => {
        wrap.classList.toggle ('addedclass2');
      
    });

    //to toggle back the class so we can re animate the resume Menu
    toggleBackL.addEventListener('click', () => {
        buttn.classList.toggle ('addedclass');
      
    });

    toggleBackL.addEventListener('click', () => {
        buttn2.classList.toggle ('addedclass');
      Animation.transitionDuration
    });

    toggleBackL.addEventListener('click', () => {
        wrap.classList.toggle ('addedclass2');
      
    });