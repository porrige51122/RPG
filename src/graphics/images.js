import bg from '../../assets/images/bg.png';

const bgImg = new Image();
bgImg.src = bg;

const spritesheets = {
  bg: {
    img: bgImg,
    rows: 1,
    columns: 1
  }
};

export default spritesheets;
