// For Animation


const animate = (elementsToAnimate) => {
    let index = 0;
    const n = elementsToAnimate.length;
   
    setInterval(() => {
      prevIndex = index;
      nextIndex = (index + 1) % n;
      elementsToAnimate[prevIndex].classList.remove("add-animation");
      elementsToAnimate[nextIndex].classList.add("add-animation");
      prevIndex = nextIndex;
      index = (index + 1) % n;
    }, 2000);
  };
   
  const betaLeftElements = document.querySelectorAll(
    ".beta .left .features-regular .features"
  );
  animate(betaLeftElements);
   
  const betaRightElements = document.querySelectorAll(
    ".beta .right .features-onebanc .features"
  );
  animate(betaRightElements);
   
  const gammaElements = document.querySelectorAll(
    ".gamma .left .features-one .features"
  );
  animate(gammaElements);


// For Auto Removal

var ITEMS = [ 
    "INVESTMENT",
    "FOREX", 
    "ANALYTICS",
    "SAVING",
    "CARD",
    "REWARDS",
    "CASH",
    "LOAN",
    "SUPPORT",
];

var START = 0;
var START_INDEX = 0;
var INTERVAL_VAL;

var TEXT = document.querySelector("#text")

var CURSOR = document.querySelector("#cursor");


function Type() { 
    var text =  ITEMS[START].substring(0, START_INDEX + 1);
    TEXT.innerHTML = text;
    START_INDEX++;

    if(text === ITEMS[START]) {

        clearInterval(INTERVAL_VAL);
        setTimeout(function() {
            INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
}

function Delete() {
    var text =  ITEMS[START].substring(0, START_INDEX - 1);
    TEXT.innerHTML = text;
    START_INDEX--;

    if(text === '') {
        clearInterval(INTERVAL_VAL);

        if(START == (ITEMS.length - 1))
            START = 0;
        else
            START++;
        
        START_INDEX = 0;

        setTimeout(function() {
            CURSOR.style.display = 'inline-block';
            INTERVAL_VAL = setInterval(Type, 200);
        }, 10);
    }
}

INTERVAL_VAL = setInterval(Type, 100);