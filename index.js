const handler = e => {
  console.log('Event handler', e);
};

setInterval(() => {
  console.log('Removing');
  document.removeEventListener("pointerdown", pointerDown);
}, 1000)