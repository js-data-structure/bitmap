import BitMap from './index';

function test() {
  const bitmap = new BitMap();
  for (let i = 0; i < 10000;) {
    bitmap.push(i);
    i += Math.floor(Math.random() * 5 + 10);
  }
  console.log(bitmap);
  for (let i = 0; i < 10000; i++) {
    if (bitmap.isExist(i)) {
      console.log(i);
    }
  }
}

test();
