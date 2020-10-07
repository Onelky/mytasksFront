import { Component, OnInit } from '@angular/core';
import { Observable, timer, NEVER, BehaviorSubject, fromEvent, of } from 'rxjs';
import { map, tap, takeWhile, share, startWith, switchMap, filter } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { CancelTaskDialogComponent } from 'src/app/shared/cancel-task-dialog/cancel-task-dialog.component';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
// TODO: Hacer este reloj, que se inicie cuando se seleccione una tarea
  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {

    var pomodoro = {
      started : false,
      minutes : 0,
      seconds : 0,
      fillerHeight : 0,
      fillerIncrement : 0,
      interval : null,
      minutesDom : null,
      secondsDom : null,
      fillerDom : null,

      init : function(){
        var self = this;
        this.minutesDom = document.querySelector('#minutes');
        this.secondsDom = document.querySelector('#seconds');
        this.fillerDom = document.querySelector('#filler');
        this.interval = setInterval(function(){
          self.intervalCallback.apply(self);
        }, 1000);
        (<HTMLButtonElement>document.querySelector('#work')).onclick = function(){
          self.startWork.apply(self);
        };
        (<HTMLButtonElement>document.querySelector('#shortBreak')).onclick = function(){
          self.startShortBreak.apply(self);
        };
        (<HTMLButtonElement>document.querySelector('#longBreak')).onclick = function(){
          self.startLongBreak.apply(self);
        };
        (<HTMLButtonElement>document.querySelector('#stop')).onclick = function(){
          self.stopTimer.apply(self);
        };
      },
      resetVariables : function(mins, secs, started){
        this.minutes = mins;
        this.seconds = secs;
        this.started = started;
        this.fillerIncrement = 200/(this.minutes*60);
        this.fillerHeight = 0;
      },
      startWork: function() {
        this.resetVariables(25, 0, true);
      },
      startShortBreak : function(){
        this.resetVariables(5, 0, true);
      },
      startLongBreak : function(){
        this.resetVariables(15, 0, true);
      },
      stopTimer : function(){
        this.resetVariables(25, 0, false);
        this.updateDom();
      },
      toDoubleDigit : function(num){
        if(num < 10) {
          return "0" + parseInt(num, 10);
        }
        return num;
      },
      updateDom : function(){
        this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
        this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
        this.fillerHeight = this.fillerHeight + this.fillerIncrement;
        this.fillerDom.style.height = this.fillerHeight + 'px';
      },
      intervalCallback : function(){
        if(!this.started) return false;
        if(this.seconds == 0) {
          if(this.minutes == 0) {
            this.timerComplete();
            return;
          }
          this.seconds = 59;
          this.minutes--;
        } else {
          this.seconds--;
        }
        this.updateDom();
      },
      timerComplete : function(){
        this.started = false;
        this.fillerHeight = 0;
      }
  };
   pomodoro.init();
  }

  cancelTask(){
    const dialogCanceltask = this.dialog.open(CancelTaskDialogComponent);
    dialogCanceltask.afterClosed().subscribe( result => {
      console.log(result.value);
  });

  }

}



