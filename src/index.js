// scheduler.js

class TaskScheduler {
    constructor() {
      this.tasks = [];
      this.timer = null;
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    start() {
      if (this.timer === null) {
        this.timer = setInterval(() => {
          this.runTasks();
        }, 1000); // Run tasks every second
      } else {
        console.log("Scheduler is already running.");
      }
    }
  
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    }
  
    runTasks() {
      const currentTime = new Date();
      this.tasks.forEach(task => {
        if (task.nextRun <= currentTime) {
          task.action();
          if (task.recurring) {
            task.nextRun = new Date(currentTime.getTime() + task.interval);
          } else {
            this.removeTask(task);
          }
        }
      });
    }
  
    removeTask(taskToRemove) {
      this.tasks = this.tasks.filter(task => task !== taskToRemove);
    }
  }
  
  class Task {
    constructor(action, options = {}) {
      this.action = action;
      this.recurring = options.recurring || false;
      this.interval = options.interval || 0;
      this.nextRun = options.nextRun || new Date();
    }
  }
  
  module.exports = { TaskScheduler, Task };
  