const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let location = search.value;
  console.log('location-->', location);
  messageOne.textContent = 'Loading....';
  messageTwo.textContent = '';
  fetch(`http://localhost:3000/weather?address="${location}"`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error)
          return (
            (messageOne.textContent = data.error), (messageTwo.textContent = '')
          );
        console.log('Success response-->', data);
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      });
    },
  );
});
