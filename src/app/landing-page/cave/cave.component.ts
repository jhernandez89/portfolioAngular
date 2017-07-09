import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Typewriter, typewriter } from './../../../typewriter';

@Component({
  selector: 'app-cave',
  templateUrl: './cave.component.html',
  styleUrls: ['./cave.component.css']
})
export class CaveComponent implements OnInit {
  cave = '../assets/cave/cave/caveZero.png'
  index = 0;
  isFinished = true;
  subscription: Subscription;
  typewriter: Typewriter = {
    delay: 60,
    message: '',
  }
  generalMessage = [
    'Red Panda: In this section, you can learn more about the creator.',
    'Red Panda: Just hover your mouse over those objects on and over the desk',
  ]
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
  randomPokemon() {
    const randomNum = Math.floor(Math.random() * 9)
    this.cave = this.differentCaves[randomNum];
  }
}
