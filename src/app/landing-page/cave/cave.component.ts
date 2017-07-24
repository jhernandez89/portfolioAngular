import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Typewriter, typewriter } from './../../../typewriter';

@Component({
  selector: 'app-cave',
  templateUrl: './cave.component.html',
  styleUrls: ['./cave.component.css']
})
export class CaveComponent implements OnInit {
  cave = '../assets/cave/cave/caveZero.png';
  pinkCrystal = '../assets/cave/crystal/crystalOne.png';
  blueCrystal = '../assets/cave/crystal/crystalTwo.png';
  redCrystal = '../assets/cave/crystal/crystalThree.png';
  greenCrystal = '../assets/cave/crystal/crystalFour.png';
  yellowCrystal = '../assets/cave/crystal/crystalFive.png';
  lightBlueCrystal = '../assets/cave/crystal/crystalSix.png';
  purpleCrystal = '../assets/cave/crystal/crystalSeven.png';
  index = 0;
  isFinished = true;
  subscription: Subscription;
  typewriter: Typewriter = {
    delay: 60,
    message: '',
  }
  mixNum = [0, 1, 2, 3, 4, 5, 6];
  generalMessage = [
    'Red Panda: In this section, you can learn more about the creator.',
    'Red Panda: Just hover your mouse over those objects on and over the desk',
  ]
  diplomaText = 'Jeff got his bachelor in Socioloy at the University of Texas at San Antonio.';
  TAText = 'Jeff has volunteered as a TA for javascript intro courses.  Teaching is the best way to solidify knowledge.'
  codingText = "Jeff went to Galvanize where he was certified as a full stack web developer where he learend "
  differentCaves = [
    '../assets/cave/cave/caveOne.png',
    '../assets/cave/cave/caveTwo.png',
    '../assets/cave/cave/caveThree.png',
    '../assets/cave/cave/caveFour.png',
    '../assets/cave/cave/caveFive.png',
    '../assets/cave/cave/caveSix.png',
    '../assets/cave/cave/caveSeven.png',
    '../assets/cave/cave/caveEight.png',
    '../assets/cave/cave/caveNine.gif'
  ]
  crystals = [
    '../assets/cave/crystal/crystalOne.png',
    '../assets/cave/crystal/crystalTwo.png',
    '../assets/cave/crystal/crystalThree.png',
    '../assets/cave/crystal/crystalFour.png',
    '../assets/cave/crystal/crystalFive.png',
    '../assets/cave/crystal/crystalSix.png',
    '../assets/cave/crystal/crystalSeven.png'
  ];
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
    diplomaChangeBox() {
      this.subscription = typewriter(this.diplomaText, this.typewriter).subscribe(
        () => undefined,
        () => undefined,
        () => {
          this.typewriter.delay = 10;
        }
      );
  }
      TAChangeBox() {
      this.subscription = typewriter(this.TAText, this.typewriter).subscribe(
        () => undefined,
        () => undefined,
        () => {
          this.typewriter.delay = 10;
        }
      );
  }
      codingChangeBox() {
      this.subscription = typewriter(this.codingText, this.typewriter).subscribe(
        () => undefined,
        () => undefined,
        () => {
          this.typewriter.delay = 10;
        }
      );
  }
  hurryUp() {
    this.typewriter.delay = 10;
  }
  randomPokemon() {
    const randomNum = Math.floor(Math.random() * 9)
    this.cave = this.differentCaves[randomNum];
  }
  randomCrystal() {
    // for (var j, x, i = this.mixNum.length; i; j = Number.(Math.random() * i), x = this.mixNum[--i], this.mixNum[i] = this.mixNum[j], this.mixNum[j] = x)
    var currentIndex = this.mixNum.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.mixNum[currentIndex];
      this.mixNum[currentIndex] = this.mixNum[randomIndex];
      this.mixNum[randomIndex] = temporaryValue;
      this.pinkCrystal = this.crystals[this.mixNum[0]];
      this.blueCrystal = this.crystals[this.mixNum[1]];
      this.redCrystal = this.crystals[this.mixNum[2]];
      this.greenCrystal = this.crystals[this.mixNum[3]];
      this.yellowCrystal = this.crystals[this.mixNum[4]];
      this.lightBlueCrystal = this.crystals[this.mixNum[5]];
      this.purpleCrystal = this.crystals[this.mixNum[6]];
    };
  }
  normalCrystals() {
    this.pinkCrystal = '../assets/cave/crystal/crystalOne.png';
    this.blueCrystal = '../assets/cave/crystal/crystalTwo.png';
    this.redCrystal = '../assets/cave/crystal/crystalThree.png';
    this.greenCrystal = '../assets/cave/crystal/crystalFour.png';
    this.yellowCrystal = '../assets/cave/crystal/crystalFive.png';
    this.lightBlueCrystal = '../assets/cave/crystal/crystalSix.png';
    this.purpleCrystal = '../assets/cave/crystal/crystalSeven.png';
  }
}
