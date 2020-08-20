"use strict";

class CountTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
  }

  start() {
    this.selectRefs();
    const timerId = setInterval(() => {
      const currentDate = Date.now();
      const time = this.targetDate - currentDate;
      if (time < 0) {
        clearInterval(timerId);
        return console.log("Your date is ago!");
      }
      this.updateTimerFace(time);
    }, 1000);
  }

  selectRefs() {
    this.timerFace = document.querySelector(this.selector);
    this.days = this.timerFace.querySelector(".value[data-value=days]");
    this.hours = this.timerFace.querySelector(".value[data-value=hours]");
    this.mins = this.timerFace.querySelector(".value[data-value=mins]");
    this.secs = this.timerFace.querySelector(".value[data-value=secs]");
  }

  updateTimerFace(time) {
    const daysValue = this.calculateForDays(time);
    const hoursValue = this.calculateForHours(time);
    const minsValue = this.calculateForMins(time);
    const secsValue = this.calculateForSecs(time);

    this.updateTextContent(this.days, daysValue);
    this.updateTextContent(this.hours, hoursValue);
    this.updateTextContent(this.mins, minsValue);
    this.updateTextContent(this.secs, secsValue);
  }

  updateTextContent(elem, value) {
    elem.textContent = `${value}`;
  }

  calculateForDays(time) {
    return this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  }

  calculateForHours(time) {
    return this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
  }

  calculateForMins(time) {
    return this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  }

  calculateForSecs(time) {
    return this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }

  pad(value) {
    return String(value).padStart(2, 0);
  }
}

const currentTime = Date.now();
const clockTime = currentTime + 345600000;

const newTimer = new CountTimer("#timer-1", new Date(clockTime));

newTimer.start();