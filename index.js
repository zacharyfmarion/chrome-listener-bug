const handler = e => {
  console.log('Event handler', e);
};

setInterval(() => {
  console.log('Removing event listener');
  document.removeEventListener("click", handler);
}, 1000)