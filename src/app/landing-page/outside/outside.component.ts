import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outside',
  templateUrl: './outside.component.html',
  styleUrls: ['./outside.component.css']
})
export class OutsideComponent implements OnInit {
  currentText = '../assets/outside/textBoxes/welcome.gif';
  constructor() { }

  ngOnInit() {
  }
  
  changeBox() {
    if (this.currentText == '../assets/outside/textBoxes/welcome.gif') {
      this.currentText = '../assets/outside/textBoxes/clickablePartOne.gif';
    } else if (this.currentText == '../assets/outside/textBoxes/clickablePartOne.gif') {
      this.currentText = '../assets/outside/textBoxes/clickablePartTwo.gif';
    } else if (this.currentText == '../assets/outside/textBoxes/clickablePartTwo.gif') {
      this.currentText = '../assets/outside/textBoxes/dogTry.gif';
    } else if (this.currentText == '../assets/outside/textBoxes/dogTry.gif') {
      this.currentText = '../assets/outside/textBoxes/reallyDog.gif';
    }
  }
  
}