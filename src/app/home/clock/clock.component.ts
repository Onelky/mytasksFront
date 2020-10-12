import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CancelTaskDialogComponent } from 'src/app/shared/cancel-task-dialog/cancel-task-dialog.component';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  pomodoro = {
    elapsedTime: 0,
    started : false,
    minutes : 0,
    seconds : 0,
    fillerHeight : 0,
    fillerIncrement : 0,
    interval : null,
    minutesDom : null,
    secondsDom : null,
    fillerDom : null,
    isWork : false,

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
      (<HTMLButtonElement>document.querySelector('#close-btn')).onclick = function(){
        self.stopTimer.apply(self);
        return self.elapsedTime; // HEREEEE
      };

      return this.elapsedTime;

    },
    resetVariables : function(mins, secs, started){
      this.minutes = mins;
      this.seconds = secs;
      this.started = started;
      this.fillerIncrement = 200/(this.minutes*60);
      this.fillerHeight = 0;

    },
    startWork: function() {
      this.isWork = true;
      this.resetVariables(25, 0, true);

    },
    startShortBreak : function(){
      this.isWork = false;
      this.resetVariables(5, 0, true);
    },
    startLongBreak : function(){
      this.isWork = false;
      this.resetVariables(15, 0, true);
    },
    stopTimer : function(){
      this.resetVariables(25, 0, false);
      //this.elapsedTime = this.updateDom()
      this.updateDom()
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

      if(this.isWork){
        this.elapsedTime++;
        console.log('total: '+ this.elapsedTime);
        return this.elapsedTime;
      }

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
  constructor(public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<ClockComponent>) {

  }
  ngOnInit(): void {
    this.pomodoro.init();
  }

  close(){
    this.dialogRef.close({data: this.pomodoro.elapsedTime})
  }

  cancelTask(){
    const dialogCanceltask = this.dialog.open(CancelTaskDialogComponent);
    dialogCanceltask.afterClosed().subscribe( result => {
      console.log('close' + result.value);
      console.log();
  });
  }


}



