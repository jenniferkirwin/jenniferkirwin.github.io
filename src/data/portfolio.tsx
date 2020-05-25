import PortfolioProps from '../interfaces/PortfolioProps';

const imgPath:string = "https://jenniferkirwin.com/assets/images/" 

const portfolio: PortfolioProps[] = [
  {
    "projectName":"Hamburger Builder",
    "projectOver":"This application runs in node.js, using Sequelize to create and update a mySQL database, Express as a server, and is deployed on Heroku.",
    "projectDescr":"This application runs in node.js, using Sequelize to create and update a mySQL database, Express as a server, and is deployed on Heroku.",
    "projectURL":"https://glacial-castle-26522.herokuapp.com/",
    "githubURL":"https://github.com/jenniferkirwin/hamburger-builder",
    "imgSrc":`${imgPath}hamburger.jpg`,
    "filePath":`${imgPath}`,
  },
  {
    "projectName":"Note Taker",
    "projectOver":"A note taking application utilizing node.js, sass, express.js and is deployed on Heroku",
    "projectDescr":"A note taking application utilizing node.js, sass, express.js and is deployed on Heroku",
    "projectURL":"https://immense-beyond-55172.herokuapp.com/note",
    "githubURL":"https://github.com/jenniferkirwin/note-taker",
    "imgSrc":`${imgPath}note-taker.jpg`,
    "filePath":`${imgPath}`,
  },
  {
      "projectName":"Password Generator",
      "projectOver":"Creates a password with lowercase, uppercase, numeric, and special characters.",
      "projectDescr":"Creates a password with lowercase, uppercase, numeric, and special characters.",
      "projectURL":"https://jenniferkirwin.github.io/password-generator2/",
      "githubURL":"https://github.com/jenniferkirwin/password-generator2",
      "imgSrc":`${imgPath}pass-gen.jpg`,
      "filePath":`${imgPath}`,
  },
  {
      "projectName":"JavaScript Quiz",
      "projectOver":"A short 4 question timed quiz testing JavaScript fundamentals and allows the user to store their score to local storage.",
      "projectDescr":"A short 4 question timed quiz testing JavaScript fundamentals and allows the user to store their score to local storage.",
      "projectURL":"https://jenniferkirwin.github.io/code-quiz/",
      "githubURL":"https://github.com/jenniferkirwin/code-quiz",
      "imgSrc":`${imgPath}quiz.jpg`,
      "filePath":`${imgPath}`,
  },
  {
      "projectName":"Day Planner",
      "projectOver":"A simple day planner that takes user input and stores it into local storage.",
      "projectDescr":"A simple day planner that takes user input and stores it into local storage.",
      "projectURL":"https://jenniferkirwin.github.io/scheduling-app/",
      "githubURL":"https://github.com/jenniferkirwin/scheduling-app",
      "imgSrc":`${imgPath}scheduler.jpg`,
      "filePath":`${imgPath}`,
  },
  {
      "projectName":"SuperEats",
      "projectOver":"An application to help you meal plan for any holiday. Developed as a group, with myself as team lead.",
      "projectDescr":"An application to help you meal plan for any holiday. Developed as a group, with myself as team lead.",
      "projectURL":"https://nwsanfor24.github.io/holiday-meal-planner//",
      "githubURL":"https://github.com/nwsanfor24/holiday-meal-planner",
      "imgSrc":`${imgPath}supereats.jpg`,
      "filePath":`${imgPath}`,
  },
  {
    "projectName":"Give Me a Break",
    "projectOver":"A positive distraction app that allows the user to discover relaxing music, inspiring artwork, and mindful meditation sounds to brighten their day.",
    "projectDescr":"A positive distraction app that allows the user to discover relaxing music, inspiring artwork, and mindful meditation sounds to brighten their day.",
    "projectURL":"https://nameless-earth-27554.herokuapp.com/",
    "githubURL":"https://github.com/nwsanfor24/project-2",
    "imgSrc":`${imgPath}give-me-a-break.jpg`,
    "filePath":`${imgPath}`,
  }
];

export default portfolio;