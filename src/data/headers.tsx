interface Headers {
  title: string;
  content: string;
  fullScreen: boolean;
}

const headers: Headers[] = [
  {
    "title": "Hello, I'm Jen.",
    "content": "I am a marketer turned web developer, living in New Hampshire. I spend my days building projects with HTML, CSS, and JavaScript. In my spare time you can find me making embroidery art.",
    "fullScreen": true
  },
  {
    "title": "My Portfolio",
    "content": "A selection of website designs, GitHub Repositories, web components, UX layouts, & more that I have developed and launched.",
    "fullScreen": false
  },
  {
    "title": "About Me",
    "content": "I am a digital marketer turned web developer, living in Manchester, New Hampshire, creating and developing websites and applications with HTML, CSS, JavaScript, and more.",
    "fullScreen": false
  },
  {
    "title": "Contact Me",
    "content": "Want to work with me? Send me a note, I would love to hear from you!",
    "fullScreen": false
  }
];

export default headers;