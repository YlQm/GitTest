import { Component, OnInit } from '@angular/core';
import {stringify} from 'querystring';

@Component({
  selector: 'app-display-detail',
  templateUrl: './display-detail.component.html',
  styleUrls: ['./display-detail.component.css']
})
export class DisplayDetailComponent implements OnInit {

  buttonClicked = 0;
  displayMessage = 'WEll The secret is in your mind';
  buttonLog = [];
  changeColor = false;
  colorFlag = true;
  // myStyles = {
  //   'color': this.colorFlag ? 'black' : 'yellow',
  //   'font-size.em': this.isSmall ? this.small/5 : this.big/5,
  //   'background-image': !this.isBackgroundRed ? 'url(\'images/red.gif\')' : 'url(\'images/green.gif\')'
  // };
  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.buttonClicked++;
    this.buttonLog.push(this.buttonClicked);
    if (this.buttonClicked >= 5) {
      this.changeColor = true;
    }
  }
  getMyStyles() {
    let myStyles = {
      'color': this.colorFlag ? 'black' : 'yellow',
      'background-color': this.buttonClicked >= 4 ? 'red' : 'blue'
    };
    return myStyles;
  }

}
