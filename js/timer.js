class CountdownTimer {
  constructor({selector,targetDate,onTic}) {
    this.targetDate = targetDate;
    this.onTic = onTic;
    const timerRef = document.querySelector(selector);
    this.refs = {
  days: timerRef.querySelector('span[data-value="days"]'),
  hours: timerRef.querySelector('span[data-value="hours"]'),
  mins: timerRef.querySelector('span[data-value="mins"]'),
  secs: timerRef.querySelector('span[data-value="secs"]')
}
  }

  start() {
      setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate-currentTime;
      const time = createTimeConponents(deltaTime);
      
      this.onTic(time,this.refs)
    }, 1000);
}
};

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
  onTic: updateTimerInterfase
});

countdownTimer.start();

function updateTimerInterfase({ days, hours, mins, secs }, refs) {

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`
}

function createTimeConponents(time) {
  
  const days = Math.floor(time / (1000 * 60 * 60 * 24));  
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));  
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return { days, hours, mins, secs };

}
