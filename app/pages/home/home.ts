import {Component} from '@angular/core';
import {MagicBall} from '../../providers/magic-ball/magic-ball';
 
@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [MagicBall]
})
export class HomePage {
 
  answer: any = "...";
  
 /*
  * Constructor
  */
  constructor(public magicBall: MagicBall) {
 
  }
 
  showAnswer(){
    this.answer = this.magicBall.getRandomAnswer();
  }
 
}
