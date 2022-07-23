const startButton = document.querySelector('#start');
const add = document.querySelector('#add');
const addInput = document.querySelector('#addInput');
const race = document.querySelector('#race');
// const players = document.querySelectorAll('.player');
const names = [];

startButton.addEventListener('click', () => {
  event.preventDefault();
  names.map((name, index) => {
    const entry = document.createElement('div');
    entry.setAttribute('class', 'position-relative');
    race.append(entry);

    const icon = document.createElement('div');
    icon.setAttribute('class', 'bg-dark m-3 player');
    icon.setAttribute('id', index);
    icon.setAttribute('style', 'top: 100px; left:1px; height:100px; width:100px');
    entry.append(icon);
    return entry;
  });

});

add.addEventListener('click', () => {
  names.push({ name: addInput.value });
  addInput.value = '';
  // console.log(names);
});
