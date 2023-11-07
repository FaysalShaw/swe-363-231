const customEmitter = require('./eventEmitter');

function getRandomDelay() {
  return Math.random() * (2 - 0.1) + 0.1; 
}

let userCount = 1;

function simulateUserLogin() {
  const delay = getRandomDelay() * 1000; 
  setTimeout(() => {
    const timestamp = new Date().toLocaleTimeString();
    const username = `USER_${userCount++}`;
    console.log(`${timestamp}: ${username} logged in`);
    customEmitter.emit('userLoggedIn', username, timestamp);
    if (userCount <= 10) {
      simulateUserLogin();
    }
  }, delay);
}

customEmitter.on('userLoggedIn', (username, timestamp) => {
  console.log(`Event: ${timestamp}: ${username} logged in`);
});

customEmitter.on('userLoggedOut', (username, timestamp) => {
  console.log(`Event: ${timestamp}: ${username} logged out`);
});

simulateUserLogin();


setTimeout(() => {
  const timestamp = new Date().toLocaleTimeString();
  const username = `USER_1`; 
  console.log(`${timestamp}: ${username} logged out`);
  customEmitter.emit('userLoggedOut', username, timestamp);
}, 5000);
