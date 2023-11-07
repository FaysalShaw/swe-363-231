const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const responses = {
  'hello': 'Hi',
  'how old are you': "im young thats all you need to know",
  'how do i achieve a high gpa': "idk im only a chatbot",
  'exit': 'Terminating',
};

function chat() {
  rl.question('You: ', (userInput) => {
    const input = userInput.toLowerCase();
    
    if (responses[input]) {
      console.log(`Chatbot: ${responses[input]}`);
    } else {
      console.log("prompt has no answer");
    }
    
    if (input !== 'exit') {
      chat();
    } else {
      rl.close();
    }
  });
}

console.log('Chatbot: type exit to quit.');
chat();
