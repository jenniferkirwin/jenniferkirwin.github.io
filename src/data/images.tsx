interface Images {
  id: number;
  src: string;
  title: string;
  description: string;
}

const images: Images[] = [
  
  { id: 1, src: '../assets/images/hamburger.jpg', title: 'foo', description: 'bar' },
  { id: 2, src: '../assets/images/hamburger.jpg', title: 'foo', description: 'bar' },
];

function imageLoader() {
  return images;
}

export default imageLoader;