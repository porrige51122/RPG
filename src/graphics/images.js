import background from '../assets/images/background.png';

const bgImg = new Image();
bgImg.src = background;

const spritesheets = {
  outside: {
    img: bgImg,
    rows: 90,
    columns: 8
  }
};

export default spritesheets;
