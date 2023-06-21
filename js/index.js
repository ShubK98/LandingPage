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
