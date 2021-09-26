// GENERAL VARIABLES
let ball = document.querySelectorAll('.ball'); // ARRAY
let info = document.querySelector('.info');
let uplata = document.querySelector('[data-id="uplata"]');
let uplataVal;
let howMuchBalls = 0;
let betBalls = [];
let pickedBall;
let countSame;
let sameBall;
let arr;
let ballValue;
let checkedRed = false;
let checkedGreen = false;
let checkedBlue = false;
let checkedPurple = false;
let checkedBrown = false;
let checkedYellow = false;
let checkedOrange = false;
let checkedGray = false;
let allColorPicked = [];

// ALL BALLS SELECTED
let allRed = document.querySelector('.allRed');
let allGreen = document.querySelector('.allGreen');
let allBlue = document.querySelector('.allBlue');
let allPurple = document.querySelector('.allPurple');
let allBrown = document.querySelector('.allBrown');
let allYellow = document.querySelector('.allYellow');
let allOrange = document.querySelector('.allOrange');
let allGray = document.querySelector('.allGray');

// BET BUTTON
let betBtn = document.querySelector('.add-bet button');
let resBtn = document.querySelector('restart-btn');
// VIEW
let firstView = document.querySelector('.firstView');
let secondView = document.querySelector('.secondView');

// SELECT ALL BUTTONS IN SAME COLOR
allRed.addEventListener('click', checkRed);
allGreen.addEventListener('click', checkGreen);
allBlue.addEventListener('click', checkBlue);
allPurple.addEventListener('click', checkPurple);
allBrown.addEventListener('click', checkBrown);
allYellow.addEventListener('click', checkYellow);
allOrange.addEventListener('click', checkOrange);
allGray.addEventListener('click', checkGray);


for (var i = 0; i < ball.length; i++) {
  ball[i].addEventListener('click', pickBall);
  ball[i].addEventListener('click', pickBallCheck);
}

function pickBallCheck(){
  if (howMuchBalls > 0){
    remELall();
  }else{
    addELall();
  }
};

function pickBall() {
  if (howMuchBalls == 6){
    pickedBall = this.innerHTML;
    for (var i = 0; i < betBalls.length; i++) {
      if(betBalls[i] == pickedBall){
        howMuchBalls--;
        removeBall(betBalls, pickedBall);
        break;
      }
    }
  }
  
  if (howMuchBalls <= 5) {
    countSame = 0;
    pickedBall = this.innerHTML;
    betBalls.push(pickedBall);
    howMuchBalls++;
    if (pickedBall == 1 || pickedBall == 9 || pickedBall == 17 || pickedBall == 25 || pickedBall == 33 || pickedBall == 41) {
      this.style.border = '3px solid #DD1F1F';
      this.style.color = '#DDDDDD';
    } else if (pickedBall == 2 || pickedBall == 10 || pickedBall == 18 || pickedBall == 26 || pickedBall == 34 || pickedBall == 42) {
      this.style.border = "3px solid #1CC31C";
      this.style.color = '#DDDDDD';
    } else if (pickedBall == 3 || pickedBall == 11 || pickedBall == 19 || pickedBall == 27 || pickedBall == 35 || pickedBall == 43) {
      this.style.border = "3px solid #0087FF";
      this.style.color = '#DDDDDD';
    } else if (pickedBall == 4 || pickedBall == 12 || pickedBall == 20 || pickedBall == 28 || pickedBall == 36 || pickedBall == 44) {
      this.style.border = "3px solid #A82DEF";
      this.style.color = '#DDDDDD';
    } else if (pickedBall == 5 || pickedBall == 13 || pickedBall == 21 || pickedBall == 29 || pickedBall == 37 || pickedBall == 45) {
      this.style.border = "3px solid #63380b";
      this.style.color = '#DDDDDD';
    } else if (pickedBall == 6 || pickedBall == 14 || pickedBall == 22 || pickedBall == 30 || pickedBall == 38 || pickedBall == 46) {
      this.style.border = "3px solid #EFC82D";
      this.style.color = '#DDDDDD';
    } else if (pickedBall == 7 || pickedBall == 15 || pickedBall == 23 || pickedBall == 31 || pickedBall == 39 || pickedBall == 47) {
      this.style.border = "3px solid #CB5B00";
      this.style.color = '#DDDDDD';
    } else if (pickedBall == 8 || pickedBall == 16 || pickedBall == 24 || pickedBall == 32 || pickedBall == 40 || pickedBall == 48) {
      this.style.border = "3px solid #000000";
      this.style.color = '#DDDDDD';
    }

    for (var i = 0; i < betBalls.length; i++) {
      if(betBalls[i]==pickedBall && betBalls.length > 1){
        countSame++;
        if(countSame == 2){
            sameBall = betBalls[i];
            betBalls.pop();
            removeBall(betBalls, sameBall);
            this.style.border = "3px solid #646464";
            this.style.color = '#646464';
            howMuchBalls = howMuchBalls - 2;
          
        }
      }
        
    };
    
    if (howMuchBalls == 6) {
      
      availableBetClick();
    }
  }
  
};


function removeBall(arr, ballValue) {
  var index = arr.indexOf(ballValue);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function betButton() {
  if (allColorPicked.length > 1){
    betBalls = allColorPicked;
  }
  firstView.style.display = 'none';
  secondView.style.display = 'block';
  startWheel();
}


function availableBetClick() {
  betBtn.style.background = '#1CC31C';
  betBtn.style.color = '#DDDDDD';
  betBtn.addEventListener('click', betButton);
}

function unAvailableBetClick() {
  betBtn.style.background = '#DDDDDD';
  betBtn.style.color = '#000000';
  betBtn.removeEventListener('click', betButton);
}

function startWheel() {
  
  let bubanjBalls = document.querySelectorAll('.bubanj-balls');
  let i = 0;
  let arrayWheel = [];
  let randomBall;
  uplataVal = uplata.value;
  let newBalls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
     17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
      34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];
  
  let loopWheel = setInterval(function () {
    randomBall = Math.floor(Math.random() * newBalls.length);
    bubanjBalls[i].innerHTML = newBalls[randomBall];
    arrayWheel.push(bubanjBalls[i].innerHTML);
    newBalls.splice(randomBall, 1);
    
    bubanjBalls[i].style.position = 'relative';
    bubanjBalls[i].style.right = '50px';
    
    if (bubanjBalls[i].innerHTML == 1 || bubanjBalls[i].innerHTML == 9 || bubanjBalls[i].innerHTML == 17 || bubanjBalls[i].innerHTML == 25 || bubanjBalls[i].innerHTML == 33 || bubanjBalls[i].innerHTML == 41) {
      bubanjBalls[i].style.border = '3px solid #DD1F1F';
      bubanjBalls[i].style.color = '#DDDDDD';
      
    } else if (bubanjBalls[i].innerHTML == 2 || bubanjBalls[i].innerHTML == 10 || bubanjBalls[i].innerHTML == 18 || bubanjBalls[i].innerHTML == 26 || bubanjBalls[i].innerHTML == 34 || bubanjBalls[i].innerHTML == 42) {
      bubanjBalls[i].style.border = '3px solid #1CC31C';
      bubanjBalls[i].style.color = '#DDDDDD';
    } else if (bubanjBalls[i].innerHTML == 3 || bubanjBalls[i].innerHTML == 11 || bubanjBalls[i].innerHTML == 19 || bubanjBalls[i].innerHTML == 27 || bubanjBalls[i].innerHTML == 35 || bubanjBalls[i].innerHTML == 43) {
      bubanjBalls[i].style.border = '3px solid #0087FF';
      bubanjBalls[i].style.color = '#DDDDDD';
    } else if (bubanjBalls[i].innerHTML == 4 || bubanjBalls[i].innerHTML == 12 || bubanjBalls[i].innerHTML == 20 || bubanjBalls[i].innerHTML == 28 || bubanjBalls[i].innerHTML == 36 || bubanjBalls[i].innerHTML == 44) {
      bubanjBalls[i].style.border = '3px solid #A82DEF';
      bubanjBalls[i].style.color = '#DDDDDD';
    } else if (bubanjBalls[i].innerHTML == 5 || bubanjBalls[i].innerHTML == 13 || bubanjBalls[i].innerHTML == 21 || bubanjBalls[i].innerHTML == 29 || bubanjBalls[i].innerHTML == 37 || bubanjBalls[i].innerHTML == 45) {
      bubanjBalls[i].style.border = '3px solid #63380b';
      bubanjBalls[i].style.color = '#DDDDDD';
    } else if (bubanjBalls[i].innerHTML == 6 || bubanjBalls[i].innerHTML == 14 || bubanjBalls[i].innerHTML == 22 || bubanjBalls[i].innerHTML == 30 || bubanjBalls[i].innerHTML == 38 || bubanjBalls[i].innerHTML == 46) {
      bubanjBalls[i].style.border = '3px solid #EFC82D';
      bubanjBalls[i].style.color = '#DDDDDD';
    } else if (bubanjBalls[i].innerHTML == 7 || bubanjBalls[i].innerHTML == 15 || bubanjBalls[i].innerHTML == 23 || bubanjBalls[i].innerHTML == 31 || bubanjBalls[i].innerHTML == 39 || bubanjBalls[i].innerHTML == 47) {
      bubanjBalls[i].style.border = '3px solid #CB5B00';
      bubanjBalls[i].style.color = '#DDDDDD';
    } else if (bubanjBalls[i].innerHTML == 8 || bubanjBalls[i].innerHTML == 16 || bubanjBalls[i].innerHTML == 24 || bubanjBalls[i].innerHTML == 32 || bubanjBalls[i].innerHTML == 40 || bubanjBalls[i].innerHTML == 48) {
      bubanjBalls[i].style.border = '3px solid #000000';
      bubanjBalls[i].style.color = '#DDDDDD';
    }

    i++;

    if (i == 35) {
      clearInterval(loopWheel);

      if (arrayWheel.indexOf(betBalls[0]) != -1 && arrayWheel.indexOf(betBalls[1]) != -1 && arrayWheel.indexOf(betBalls[2]) != -1 && arrayWheel.indexOf(betBalls[3]) != -1 && arrayWheel.indexOf(betBalls[4]) != -1 && arrayWheel.indexOf(betBalls[5]) != -1) {
        let givenBall = [];
        givenBall.push(arrayWheel.indexOf(betBalls[0]),arrayWheel.indexOf(betBalls[1]),arrayWheel.indexOf(betBalls[2]),arrayWheel.indexOf(betBalls[3]),arrayWheel.indexOf(betBalls[4]),arrayWheel.indexOf(betBalls[5]));
        let kvota = Math.max.apply(null, givenBall);
        let stringKvota = kvota.toString();
        
        info.style.background = '#1CC31C';
        info.style.color = '#DDDDDD';
        info.style.display = 'block';
        
        if (uplataVal == '') {
          uplataVal = 0;
        }

        if (stringKvota == 34) {
          info.innerHTML = `Povratili ste novac koji ste ulozili!`;
        } else if (stringKvota == 33) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 2} dinara`;
        } else if (stringKvota == 32) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 3} dinara`;
        } else if (stringKvota == 31) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 4} dinara`;
        } else if (stringKvota == 30) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 5} dinara`;
        } else if (stringKvota == 29) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 6} dinara`;
        } else if (stringKvota == 28) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 7} dinara`;
        } else if (stringKvota == 27) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 8} dinara`;
        } else if (stringKvota == 26) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 9} dinara`;
        } else if (stringKvota == 25) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 10} dinara`;
        } else if (stringKvota == 24) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 15} dinara`;
        } else if (stringKvota == 23) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 20} dinara`;
        } else if (stringKvota == 22) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 25} dinara`;
        } else if (stringKvota == 21) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 30} dinara`;
        } else if (stringKvota == 20) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 40} dinara`;
        } else if (stringKvota == 19) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 50} dinara`;
        } else if (stringKvota == 18) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 60} dinara`;
        } else if (stringKvota == 17) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 70} dinara`;
        } else if (stringKvota == 16) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 80} dinara`;
        } else if (stringKvota == 15) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 90} dinara`;
        } else if (stringKvota == 14) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 100} dinara`;
        } else if (stringKvota == 13) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 150} dinara`;
        } else if (stringKvota == 12) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 200} dinara`;
        } else if (stringKvota == 11) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 300} dinara`;
        } else if (stringKvota == 10) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 500} dinara`;
        } else if (stringKvota == 9) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 1000} dinara`;
        } else if (stringKvota == 8) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 2500} dinara`;
        } else if (stringKvota == 7) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 5000} dinara`;
        } else if (stringKvota == 6) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 7500} dinara`;
        } else if (stringKvota == 5) {
          info.innerHTML = `Cestitamo, osvojili ste ${uplataVal * 10000} dinara`;
        }
      } else {
        info.innerHTML = 'Niste pogodili izabrane loptice';
        info.style.background = 'tomato';
        info.style.color = '#fff';
        info.style.display = 'block';
      }

      
    }
  }, 1200);
}

function checkRed() {
  let redColumn = [ball[0], ball[8], ball[16], ball[24], ball[32], ball[40]];
    if (checkedRed){
      allColorPicked = [];
      addELsingles()
      addELall();
      colorBalls(redColumn, '#646464', '#646464');
      allRed.style.background = '#222222';
      checkedRed = false;
      unAvailableBetClick();
    
  }else{
    remELallRed();
    remELsingles()
    checkedRed = true;
    allColorPicked.push(ball[0].innerHTML, ball[8].innerHTML, ball[16].innerHTML, ball[24].innerHTML, ball[32].innerHTML, ball[40].innerHTML);
    allRed.style.background = '#DD1F1F';
    colorBalls(redColumn, '#DD1F1F', '#DDDDDD');
    availableBetClick();
  }
}

function checkGreen() {
  let greenColumn = [ball[1], ball[9], ball[17], ball[25], ball[33], ball[41]];
  if (checkedGreen){
    allColorPicked = [];
    addELsingles()
    addELall();
    colorBalls(greenColumn, '#646464', '#646464');
    allGreen.style.background = '#222222';
    checkedGreen = false;
    unAvailableBetClick()
  }else{
    remELallGreen();
    remELsingles()
    allColorPicked.push(ball[1].innerHTML, ball[9].innerHTML, ball[17].innerHTML, ball[25].innerHTML, ball[33].innerHTML, ball[41].innerHTML);
    allGreen.style.background = '#1CC31C';
    colorBalls(greenColumn, '#1CC31C', '#DDDDDD');
    availableBetClick();
    checkedGreen = true;
  }
}

function checkBlue() {
  let blueColumn = [ball[2], ball[10], ball[18], ball[26], ball[34], ball[42]];
  if (checkedBlue){
    allColorPicked = [];
    addELsingles()
    addELall();
    colorBalls(blueColumn, '#646464', '#646464');
    allBlue.style.background = '#222222';
    checkedBlue = false;
    unAvailableBetClick()
  }else{
    remELallBlue();
    remELsingles()
    allColorPicked.push(ball[2].innerHTML, ball[10].innerHTML, ball[18].innerHTML, ball[26].innerHTML, ball[34].innerHTML, ball[42].innerHTML);
    allBlue.style.background = '#0087FF';
    colorBalls(blueColumn, '#0087FF', '#DDDDDD');
    availableBetClick();
    checkedBlue = true;
  }
}

function checkPurple() {
  let purpleColumn = [ball[3], ball[11], ball[19], ball[27], ball[35], ball[43]];
  if (checkedPurple){
    allColorPicked = [];
    addELsingles()
    addELall();
    colorBalls(purpleColumn, '#646464', '#646464');
    allPurple.style.background = '#222222';
    checkedPurple = false;
    unAvailableBetClick()
  }else{
    remELallPurple();
    remELsingles()
    allColorPicked.push(ball[3].innerHTML, ball[11].innerHTML, ball[19].innerHTML, ball[27].innerHTML, ball[35].innerHTML, ball[43].innerHTML);
    allPurple.style.background = '#A82DEF';
    colorBalls(purpleColumn, '#A82DEF', '#DDDDDD');
    availableBetClick();
    checkedPurple = true;
  }
}

function checkBrown() {
  let brownColumn = [ball[4], ball[12], ball[20], ball[28], ball[36], ball[44]];
  if (checkedBrown){
    allColorPicked = [];
    addELsingles()
    addELall();
    colorBalls(brownColumn, '#646464', '#646464');
    allBrown.style.background = '#222222';
    checkedBrown = false;
    unAvailableBetClick()
  }else{
    remELallBrown();
    remELsingles()
    allColorPicked.push(ball[4].innerHTML, ball[12].innerHTML, ball[20].innerHTML, ball[28].innerHTML, ball[36].innerHTML, ball[44].innerHTML);
    allBrown.style.background = '#63380b';
    colorBalls(brownColumn, '#63380b', '#DDDDDD');
    availableBetClick();
    checkedBrown = true;
  }
}

function checkYellow() {
  let yellowColumn = [ball[5], ball[13], ball[21], ball[29], ball[37], ball[45]];
  if (checkedYellow){
    allColorPicked = [];
    addELsingles()
    addELall();
    colorBalls(yellowColumn, '#646464', '#646464');
    allYellow.style.background = '#222222';
    checkedYellow = false;
    unAvailableBetClick()
  }else{
    remELallYellow();
    remELsingles()
    allColorPicked.push(ball[5].innerHTML, ball[13].innerHTML, ball[21].innerHTML, ball[29].innerHTML, ball[37].innerHTML, ball[45].innerHTML);
    allYellow.style.background = '#EFC82D';
    colorBalls(yellowColumn, '#EFC82D', '#DDDDDD');
    availableBetClick();
    checkedYellow = true;
  }
}

function checkOrange() {
  let orangeColumn = [ball[6], ball[14], ball[22], ball[30], ball[38], ball[46]];
  if (checkedOrange){
    allColorPicked = [];
    addELsingles()
    addELall();
    colorBalls(orangeColumn, '#646464', '#646464');
    allOrange.style.background = '#222222';
    checkedOrange = false;
    unAvailableBetClick()
  }else{
    remELallOrange();
    remELsingles()
    allColorPicked.push(ball[6].innerHTML, ball[14].innerHTML, ball[22].innerHTML, ball[30].innerHTML, ball[38].innerHTML, ball[46].innerHTML);
    allOrange.style.background = '#CB5B00';
    colorBalls(orangeColumn, '#CB5B00', '#DDDDDD');
    availableBetClick();
    checkedOrange = true;
  }
}

function checkGray() {
  let grayColumn = [ball[7], ball[15], ball[23], ball[31], ball[39], ball[47]];
  if (checkedGray){
    allColorPicked = [];
    addELsingles()
    addELall();
    colorBalls(grayColumn, '#646464', '#646464');
    allGray.style.background = '#222222';
    checkedGray = false;
    unAvailableBetClick()
  }else{
    remELallGray();
    remELsingles()
    allColorPicked.push(ball[7].innerHTML, ball[15].innerHTML, ball[23].innerHTML, ball[31].innerHTML, ball[39].innerHTML, ball[47].innerHTML);
    allGray.style.background = '#000000';
    colorBalls(grayColumn, '#000000', '#DDDDDD');
    availableBetClick();
    checkedGray = true;
  }
}

function remELallBlue() {
  allRed.removeEventListener('click', checkRed);
  allGreen.removeEventListener('click', checkGreen);
  allPurple.removeEventListener('click', checkPurple);
  allBrown.removeEventListener('click', checkBrown);
  allYellow.removeEventListener('click', checkYellow);
  allOrange.removeEventListener('click', checkOrange);
  allGray.removeEventListener('click', checkGray);

};

function remELallRed() {
  allGreen.removeEventListener('click', checkGreen);
  allBlue.removeEventListener('click', checkBlue);
  allPurple.removeEventListener('click', checkPurple);
  allBrown.removeEventListener('click', checkBrown);
  allYellow.removeEventListener('click', checkYellow);
  allOrange.removeEventListener('click', checkOrange);
  allGray.removeEventListener('click', checkGray);

};

function remELallGreen() {
  allRed.removeEventListener('click', checkRed);
  allBlue.removeEventListener('click', checkBlue);
  allPurple.removeEventListener('click', checkPurple);
  allBrown.removeEventListener('click', checkBrown);
  allYellow.removeEventListener('click', checkYellow);
  allOrange.removeEventListener('click', checkOrange);
  allGray.removeEventListener('click', checkGray);

};

function remELallPurple() {
  allRed.removeEventListener('click', checkRed);
  allGreen.removeEventListener('click', checkGreen);
  allBlue.removeEventListener('click', checkBlue);
  allBrown.removeEventListener('click', checkBrown);
  allYellow.removeEventListener('click', checkYellow);
  allOrange.removeEventListener('click', checkOrange);
  allGray.removeEventListener('click', checkGray);

};

function remELallBrown() {
  allRed.removeEventListener('click', checkRed);
  allGreen.removeEventListener('click', checkGreen);
  allBlue.removeEventListener('click', checkBlue);
  allPurple.removeEventListener('click', checkPurple);
  allYellow.removeEventListener('click', checkYellow);
  allOrange.removeEventListener('click', checkOrange);
  allGray.removeEventListener('click', checkGray);

};

function remELallYellow() {
  allRed.removeEventListener('click', checkRed);
  allGreen.removeEventListener('click', checkGreen);
  allBlue.removeEventListener('click', checkBlue);
  allPurple.removeEventListener('click', checkPurple);
  allBrown.removeEventListener('click', checkBrown);
  allOrange.removeEventListener('click', checkOrange);
  allGray.removeEventListener('click', checkGray);

};

function remELallOrange() {
  allRed.removeEventListener('click', checkRed);
  allGreen.removeEventListener('click', checkGreen);
  allBlue.removeEventListener('click', checkBlue);
  allPurple.removeEventListener('click', checkPurple);
  allYellow.removeEventListener('click', checkYellow);
  allBrown.removeEventListener('click', checkBrown);
  allGray.removeEventListener('click', checkGray);

};

function remELallGray() {
  allRed.removeEventListener('click', checkRed);
  allGreen.removeEventListener('click', checkGreen);
  allBlue.removeEventListener('click', checkBlue);
  allPurple.removeEventListener('click', checkPurple);
  allYellow.removeEventListener('click', checkYellow);
  allBrown.removeEventListener('click', checkBrown);
  allOrange.removeEventListener('click', checkOrange);

};

function addELall(){
  allRed.addEventListener('click', checkRed);
  allGreen.addEventListener('click', checkGreen);
  allBlue.addEventListener('click', checkBlue);
  allPurple.addEventListener('click', checkPurple);
  allBrown.addEventListener('click', checkBrown);
  allYellow.addEventListener('click', checkYellow);
  allOrange.addEventListener('click', checkOrange);
  allGray.addEventListener('click', checkGray);
};

function remELall(){
  remELallRed();
  remELallBlue();
  remELallGreen();
  remELallPurple();
  remELallBrown();
  remELallYellow();
  remELallOrange();
  remELallGray();
};

function remELsingles(){
  for (var i = 0; i < ball.length; i++) {
    ball[i].removeEventListener('click', pickBall);
  }
}

function addELsingles(){
  for (var i = 0; i < ball.length; i++) {
    ball[i].addEventListener('click', pickBall);
  }
}

function colorBalls(balls, border, color) {
  for (var i = 0; i < balls.length; i++) {
    balls[i].style.border = '3px solid ' + border;
    balls[i].style.color = color;
  }
}