window.addEventListener('load', start);
var current_r = 0;
var current_g = 100;
var current_b = 0;
var range_r = document.querySelector('#range_r');
var range_g = document.querySelector('#range_g');
var range_b = document.querySelector('#range_b');
var box_r = document.querySelector('#box_r');
var box_g = document.querySelector('#box_g');
var box_b = document.querySelector('#box_b');

function start() {
  console.log('Pagina Carregada com sucesso.');
  draw();
  range_r.addEventListener('input', preventEvent);
  range_g.addEventListener('input', preventEvent);
  range_b.addEventListener('input', preventEvent);
}

function draw() {
  var canvas = document.getElementById('circle');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var X = canvas.width / 2;
    var Y = canvas.height / 2;
    var R = 35;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, true);
    ctx.lineWidth = 170;
    ctx.strokeStyle = `rgb(${current_r},${current_g},${current_b})`;
    ctx.stroke();
  }
}

function preventEvent(event) {
  save_current(event.target.id, event.target.value);
}

function save_current(id, value) {
  if (id === 'range_r') {
    current_r = value;
    save_box_value(id, value);
  } else if (id === 'range_g') {
    current_g = value;
    save_box_value(id, value);
  } else if (id === 'range_b') {
    current_b = value;
    save_box_value(id, value);
  } else {
    return console.log('event.target null');
  }
  draw();
}

function save_box_value(id, value) {
  if (id === 'range_r') {
    box_r.placeholder = value;
  } else if (id === 'range_g') {
    box_g.placeholder = value;
  } else if (id === 'range_b') {
    box_b.placeholder = value;
  }
}
