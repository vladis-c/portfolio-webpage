export const projects = [  
  {
    title: "A full-stack Booking app (at work)",
    description: `Video appointment booking app with chat and photos. Firebase as database and Redux as state-management. Stripe for payments, Finnish Trust Network for authentication, Voucherify for validating and redeeming vouchers. Sentry is wrapping the app to monitor life-time errors, Agora for video calls
    I was a leading developer of this app at my recent workplace, I worked on UX and the whole overlook of the app, code structure and selecting of the services and libraries.
    App is available on AppStore and Google Play store.
    App goes together with Admin portal.`,
    image: "/images/RNHHApp.jpeg",
    tags: ["TypeScript", "React Native", "Firebase", "Express",],
    source: "",
    visit: "",
    id: 6,
  },
  {
    title: "A full-stack admin portal for a booking app (at work)",
    description: `Admin portal for video appointment booking app with chat and photos. Firebase as database and Redux as state-management. Firebase Auth for authentication, Agora for video calls, Voucherify for issuing vouchers.
    Admin portal has customised calendar from DevExpress, search functionalities and filters, tables with appointments and detailed information. Admin portal is has responsive design.
    Portal goes together with Booking app.`,
    image: "/images/NextHHPortal.jpeg",
    tags: ["TypeScript", "Next.js", ,"Firebase", "Express", "MaterialUI"],
    source: "",
    visit: "",
    id: 7,
  },
  {
    title: "Own Youtube courses",
    description: `Planning to launch own Youtube channel, where I teach technologies I had issues with to show the easy solutions for others. Follow my github for upcoming information, and check repositories.`,
    image: "",
    tags: [],
    source: "",
    visit: "",
    id: 6,
  },
  {
    title: "TODO app with SCSS",
    description: `Classic TODO app for practicing pure JavaScript Code. This is my first project with SCSS styling, however`,
    image: "/images/to-do.PNG",
    tags: ["JavaScript", "SCSS"],
    source: "",
    visit: "https://github.com/vladis-c/to-do-scss",
    id: 8,
  },
  {
    title: "Expenses App",
    description:
      "This application is a tool for two people leaving in one household, who share the expenses half-half and would like to track the monthly transactions. The users must login with Google Account to use the app",
    image: "/images/ExpensesAppScreenshot.png",
    tags: ["React", "CSS", "Firebase"],
    source: "",
    visit: "https://github.com/vladis-c/expenses-app-public",
    id: 0,
  },
  {
    title: "Weather App",
    description:
      "Simple weather app that shows current weather in current location. If user wants, there is a search by city to find other location weather. Weather is displayed for current day and next 5 days",
    image: "/images/WeatherAppScreenshot.PNG",
    tags: ["React", "JavaScript", "OpenWeather API", "CSS"],
    source: "",
    visit: "https://github.com/vladis-c/weather-app",
    id: 1,
  },
  {
    title: "Rock-Paper-Scissors Games Results",
    description:
      "This is a pre-assignment task from Reaktor. The task was to implement a web application that displays rock-paper-scissors match results. The web application displays the games as they are in progress and historical results of individual players. ",
    image: "/images/GamesResultsScreenshot.PNG",
    tags: ["React", "WebSokcet", "Open API", "Node.js", "CSS"],
    source: "https://reaktor-task-vladislav.herokuapp.com",
    visit: "https://github.com/vladis-c/reaktor-games-results",
    id: 2,
  },
  {
    title: "Breweries App",
    description: `This is a pre-assignment to Integrify academy.

      The task was to show:
      
      a homepage with some info about the brewery companies. Data fetched from Brewery API. And a Second page opens the detailed data about the company.
      
      In this app some React features are used: Functional React Component, React hooks (useState, useEffect), React Router (useParams, useHistory). Basic CSS by templates on open sources, modified.`,
    image: "/images/BreweriesAPIScreenshot.PNG",
    tags: ["React", "CSS open source template", "Router"],
    source: "https://vigilant-jones-b2f7fd.netlify.app/",
    visit: "https://github.com/vladis-c/brewery-list",
    id: 3,
  },
  {
    title: "MRI Pictures Processing App",
    description: `The task is to build a data model and a simple GUI for creating configurations for this image processing software package. It should allow any valid combination of inputs and steps to be created. In the GUI, the user shall be able to configure two things:

      input image types to use (a single T1 image, a single FLAIR image, or an image pair with both T1 and FLAIR images) and
      which steps should be run given the input images.
      The user must not be able to create invalid configurations.
      
      The app supposed to show more of the valid code, configurations and task performance, than design and styles.`,
    image: "/images/MRIAppScreenshot.PNG",
    tags: ["React", "JavaScript"],
    source: "https://mri-processing-images.herokuapp.com/",
    visit: "https://github.com/vladis-c/mri-processing-images",
    id: 4,
  },
  {
    title: "Randomizer Game",
    description: `My very first project build on plain JavaScript. It is a randomiser game. Rules are simple: give range of numbers, the computer will generate a random number. The task of the user is to guess from 5 guesses`,
    image: "",
    tags: ["JavaScript", "CSS"],
    source: "",
    visit: "https://github.com/vladis-c/randomizergame",
    id: 5,
  },
]
//Change to months timeline
export const TimeLineData = [
  {
    date: "Summer 2021",
    text: "Started my journey with JavaScript, HTML and CSS",
  },
  { date: "Autumn 2021", text: "Online Courses on JS and React" },
  { date: "Autumn 2021", text: "First JS and React projects" },
  {
    date: "January 2022",
    text: "Starting a new journey as a student of coding school",
  },
  {
    date: "March 2022",
    text: "First Full-stuck Developer role at Hammashelppi, Finland",
  },
  { date: "November 2022", text: "Own Youtube courses on coding" },
  { date: "end 2022 - beginning 2023", text: "New challenges... New role..." },
  { date: "Spring 2023", text: "Certified AWS cloud developer" },
]
