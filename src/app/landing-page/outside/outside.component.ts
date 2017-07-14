import { Subscription } from 'rxjs/Rx';
import { Typewriter, typewriter } from './../../../typewriter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outside',
  templateUrl: './outside.component.html',
  styleUrls: ['./outside.component.css']
})
export class OutsideComponent implements OnInit {
  currentText = '../assets/outside/textBoxes/welcome.gif';
  tetris = '../assets/outside/tetrisBanner.png';
  purpleT = '../assets/outside/purpleT.png';
  index = 0;
  howManyImages = 75;
  width = 500;
  screenWidth = 500;
  timeBetweenImages;
  marginTop;
  duration;
  imgNum;
  isFinished = true;
  subscription: Subscription;
  typewriter: Typewriter = {
    delay: 60,
    message: '',
  };
  generalMessage = [
    'Jeff: hello, welcome to my website! Click this textbox to continue',
    'Jeff: Click while the text is scrolling to speed it up',
    'Jeff: You can hover your mouse or click most of the images to cause different events to take place',
    'Jeff: Try clicking the purple tetris block or hovering over the pokeball below',
  ]
  flyingGif = ['../images/tetris/greenLOne.gif', '../images/tetris/greenLTwo.gif', '../images/tetris/greenLThree.gif', '../images/tetris/greenLFour.gif', '../images/tetris/greenLFive.gif', '../images/tetris/greenLSix.gif',
    '../images/tetris/purpleZOne.gif', '../images/tetris/purpleZTwo.gif', '../images/tetris/purpleZThree.gif', '../images/tetris/purpleZFour.gif', '../images/tetris/purpleZFive.gif', '../images/tetris/purpleZSix.gif',
    '../images/tetris/blueIOne.gif', '../images/tetris/blueITwo.gif', '../images/tetris/blueIThree.gif', '../images/tetris/blueIFour.gif', '../images/tetris/blueIFive.gif', '../images/tetris/blueISix.gif',
    '../images/tetris/redB.png', '../images/tetris/redB.png', '../images/tetris/redB.png', '../images/tetris/redB.png', '../images/tetris/redB.png', '../images/tetris/redB.png',
    '../images/tetris/purpleTOne.gif', '../images/tetris/purpleTTwo.gif', '../images/tetris/purpleTThree.gif', '../images/tetris/purpleTFour.gif', '../images/tetris/purpleTFive.gif', '../images/tetris/purpleTSix.gif',
    '../images/tetris/redLOne.gif', '../images/tetris/redLTwo.gif', '../images/tetris/redLThree.gif', '../images/tetris/redLFour.gif', '../images/tetris/redLFive.gif', '../images/tetris/redLSix.gif',
    '../images/tetris/yellowTTwo.gif', '../images/tetris/yellowTThree.gif', '../images/tetris/yellowTFour.gif', '../images/tetris/yellowTSix.gif',
    '../images/tetris/yellowIOne.gif', '../images/tetris/yellowITwo.gif', '../images/tetris/yellowIFour.gif', '../images/tetris/yellowIFive.gif']
  constructor() { }

  ngOnInit() {
    this.changeBox();
  }
  changeBox() {
    if (this.isFinished) {
      this.isFinished = false;
      this.subscription = typewriter(this.generalMessage[this.index++], this.typewriter).subscribe(
        () => undefined,
        () => undefined,
        () => {
          this.typewriter.delay = 40;
          this.isFinished = true;
        }
      );
    } else {
      this.hurryUp()
    }
  }
  hurryUp() {
    this.typewriter.delay = 10;
  }



  generateRandomMargin(milliseconds) {
    const num = Math.floor(Math.random() * milliseconds);
    return num;
  }

  /* this randomly generates the time it will take the images
  to cross the screen */
  generateRandomDuration(millisecStatic, millisecDynamic) {
    const num = (Math.floor(Math.random() * millisecDynamic)) + millisecStatic;
    return num;
  }

  /* this randomly selects a gif */
  chooseRandomGif(numOfGifs) {
    const num = (Math.floor(Math.random() * numOfGifs));
    return num;
  }

  /* this randomly generates the time between gifs.  The 'i' is needed
  because the delay in time is always referencing the beginning point.
  multiplying by 'i' allows the random number to continue increasing in size
  so each additional gif starts further and further away */
  timeBetween(range, i) {
    const num = Math.floor(Math.random() * range) * i;
    return num;
  }

  setImgDivAttributes(imgDiv) {
    // imgDiv.attr('src', `images/${this.flyingGif[this.imgNum]}`);
    imgDiv.attr('width', '90px');
    imgDiv.attr('height', 'auto');
    imgDiv.attr('left', '-100px');
    imgDiv.appendTo('.flyYouFools');
  }
  defineRandomVariables(i) {
    this.marginTop = this.generateRandomMargin(580);
    this.duration = this.generateRandomDuration(10000, 10000);
    this.imgNum = this.chooseRandomGif(this.flyingGif.length);
    this.timeBetweenImages = this.timeBetween(70, i);
  }

  putImagesIn(i) {
    return () => {
      this.defineRandomVariables(i);
      // const imgDiv = $(`<img id=flyingAnimal class=flying${i}>`);

      // this.setImgDivAttributes(imgDiv);

      // $(`.flying${i}`).css({
      //   'margin-top': `${this.marginTop}px`,
      // });

      // imgDiv.css('left', (-this.width)).animate({
      //   left: this.screenWidth + 3000,
      // }, this.duration);
    };
  }

  loopThroughImages() {
    for (let i = 0; i < this.howManyImages; i += 1) {
      this.defineRandomVariables(i);

      setTimeout(this.putImagesIn(i), this.timeBetweenImages);
    }
  }
}
