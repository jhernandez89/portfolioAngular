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
  index = 0;
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
}
