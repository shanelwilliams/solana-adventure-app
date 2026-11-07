export const storyData = {
  1: {
    title: "Friday, 12:00 PM: The Noon Kickoff",
    text: "The hackathon clock is officially ticking! You open Git Bash right at noon, ready to conquer Web3, but your computer instantly screen-flashes a wall of red permission errors. Your coffee is still hot, but the stress is real.",
    backgroundImage: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    choices: [
      { text: "Spend 2 hours furiously searching StackOverflow for a fix", nextScene: 2, energyCost: 15, bugsFixed: 10 },
      { text: "Ignore the errors, bypass local setup, and open Solana Playground in your browser", nextScene: 3, energyCost: 5, bugsFixed: 25 }
    ]
  },
  2: {
    title: "Friday, 2:30 PM: Down the Rabbit Hole",
    text: "You accidentally uninstalled Node.js trying to fix a permissions bug. You feel slightly older and your eyes are bloodshot, but you found a working template folder.",
    backgroundImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    choices: [
      { text: "Fire up 'npm install' and push the boilerplate to GitHub", nextScene: 4, energyCost: 20, bugsFixed: 5 },
      { text: "Take a desperate late-lunch break and hope the problem fixes itself", nextScene: 5, energyCost: -10, bugsFixed: 0 }
    ]
  },
  3: {
    title: "Friday, 3:00 PM: The Cloud Savior",
    text: "Brilliant move! The browser playground compiles your code instantly with zero Windows path errors. Your confidence surges, but a strange automated ping goes off in the MLH Discord server.",
    backgroundImage: "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    choices: [
      { text: "Open Discord to see what's happening in the general chat", nextScene: 6, energyCost: 10, bugsFixed: 0 },
      { text: "Mute Discord notifications and start drafting your React front-end UI", nextScene: 4, energyCost: 15, bugsFixed: 20 }
    ]
  },
    4: {
    title: "Saturday, 11:00 AM: The Front-End Friction",
    text: "It is day two. Your local dev server is running, but your 'Connect Wallet' button keeps rendering completely invisible on the page. You are surviving entirely on energy drinks.",
    backgroundImage: "https://images.unsplash.com/photo-1626958390943-a70309376444?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    choices: [
      { text: "Open up your old portfolio code to copy-paste your working CSS layouts", nextScene: 7, energyCost: 10, bugsFixed: 30 },
      { text: "Try to write a brand new custom styling framework from scratch", nextScene: 8, energyCost: 35, bugsFixed: 5 }
    ]
  },
  5: {
    title: "Friday Night: The Post-Pizza Slump",
    text: "You ate too many slices. Carbs have completely compromised your cognitive function. You stare blankly at a blinking cursor for forty minutes.",
    backgroundImage: "https://plus.unsplash.com/premium_photo-1747047885638-513195510d00?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    choices: [
      { text: "Chug a cold beverage and force yourself to initialize your project folder", nextScene: 4, energyCost: 25, bugsFixed: 10 }
    ]
  },
  6: {
    title: "The Discord Distraction Trap",
    text: "You logged into Discord. Instead of finding help, you got sucked into a heated debate about whether light mode or dark mode is better for coding. You lost an hour of your life.",
    backgroundImage: "https://images.unsplash.com/photo-1763568258439-de52f4b4e7f9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    choices: [
      { text: "Close the chat window and get back to your React components", nextScene: 4, energyCost: 20, bugsFixed: 0 }
    ]
  },
  7: {
    title: "Saturday Night: The Master Stroke",
    text: "Your portfolio code worked flawlessly! The wallet connect button lights up beautifully and your logic is solid. The submission deadline is only a few hours away on Sunday morning. Time to record the demo video.",
    backgroundImage: "https://plus.unsplash.com/premium_photo-1731966821432-b79745a543e3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    choices: [
      { text: "Record a raw 2-minute live walkthrough of your working code", nextScene: 9, energyCost: 15, bugsFixed: 15 }
    ]
  },
  8: {
    title: "Saturday Night: Code Spaghetti",
    text: "Your custom framework broke everything. The page looks like a broken 1995 classifieds ad. Panic sets in as your clock ticks closer to midnight.",
    backgroundImage: "https://plus.unsplash.com/premium_photo-1753385251980-394b5f71d25a?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    choices: [
      { text: "Hit Ctrl+Z fifty times and frantically link your old portfolio files instead", nextScene: 7, energyCost: 30, bugsFixed: 20 }
    ]
  },
  9: {
    title: "Sunday Morning: The Dev Submission",
    text: "You did it! The GitHub repository is public, your README is clean, and your demo video is uploaded to Devpost. You click 'Submit Project' right as your eyes fully close from exhaustion.",
    backgroundImage: "https://images.unsplash.com/photo-1642901798329-b5ee89be133a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    choices: [] // The game concludes here!
  }
};
