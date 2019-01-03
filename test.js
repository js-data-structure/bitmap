const sizeof = require('object-sizeof');
const BitMap = require('./index');

let bitmap = new BitMap();
let set = new Set();
let arr = [];

function init() {
  bitmap = new BitMap();
  set = new Set();
  arr = [];
}

function test(len) {
  init();
  console.log('\n');
  console.log('test len: ---------------------', len);
  for (let i = 0; i < len;) {
    bitmap.push(i);
    set.add(i);
    arr.push(i);
    i += Math.floor(Math.random() * 5 + 5);
  }

  console.log('bitmap size : ', sizeof(bitmap));
  console.log('set size : ', sizeof(set));
  console.log('arr size : ', sizeof(arr));


  console.time('bitmap');
  for (let i = 0; i < len; i++) {
    if (bitmap.isExist(i)) {
    }
  }
  console.timeEnd('bitmap');

  console.time('set');
  for (let i = 0; i < len; i++) {
    if (set.has(i)) {
    }
  }
  console.timeEnd('set');

  console.time('arr');
  if (len < 1000000) {
    for (let i = 0; i < len; i++) {
      if (~arr.indexOf(i)) {
      }
    }
  }
  console.timeEnd('arr');
}

test(1000);
test(10000);
test(100000);
test(1000000);
test(5000000);
