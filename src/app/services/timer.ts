import { Injectable, signal, computed } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

export enum TimerMode {
  WORK = 'work',
  SHORT_BREAK = 'short_break',
  LONG_BREAK = 'long_break'
}

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  config = {
    [TimerMode.WORK]: 25, 
    [TimerMode.SHORT_BREAK]: 5,
    [TimerMode.LONG_BREAK]: 15,
  };

  timeLeft = signal(this.config[TimerMode.WORK] * 60);
  currentMode = signal<TimerMode>(TimerMode.WORK);
  isRunning = signal(false);

  private intervalId: any;
  
  private audio = new Audio('assets/beep.mp3'); 

  displayTime = computed(() => {
    const minutes = Math.floor(this.timeLeft() / 60);
    const seconds = this.timeLeft() % 60;
    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  });

  updateDuration(mode: TimerMode, minutes: number) {
    this.config[mode] = minutes;
    if (this.currentMode() === mode && !this.isRunning()) {
      this.resetTimer();
    }
  }

toggleTimer() {
    if (this.isRunning()) {
      this.pauseTimer();
    } else {
      this.audio.play().then(() => {
        this.audio.pause();
        this.audio.currentTime = 0;
      }).catch(e => console.error("Помилка аудіо:", e));
      this.startTimer();
    }
  }

  resetTimer() {
    this.pauseTimer();
    this.timeLeft.set(this.config[this.currentMode()] * 60);
  }

  setMode(mode: TimerMode) {
    this.currentMode.set(mode);
    this.resetTimer();
  }

  private startTimer() {
    this.isRunning.set(true);
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  private pauseTimer() {
    this.isRunning.set(false);
    clearInterval(this.intervalId);
  }

  private tick() {
    if (this.timeLeft() > 0) {
      this.timeLeft.update(v => v - 1);
    } else {
      this.completeSession();
    }
  }

  private async completeSession() {
    this.pauseTimer();
    
    try {
      this.audio.currentTime = 0;
      await this.audio.play();
    } catch (e) {
      console.error('Помилка відтворення звуку:', e);
    }

    try {
        await Haptics.vibrate({ duration: 1000 });
    } catch (e) {}

    if (this.currentMode() === TimerMode.WORK) {
      this.setMode(TimerMode.SHORT_BREAK);
    } else {
      this.setMode(TimerMode.WORK);
    }
  }

  private pad(val: number): string {
    return val < 10 ? `0${val}` : `${val}`;
  }
}