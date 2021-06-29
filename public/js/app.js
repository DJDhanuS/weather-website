
fetch('http://puzzle.mead.io/puzzle').then((response) => {
   response.json().then((data) => {
       console.log(data)
   })
});




const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const msg_1 = document.querySelector('#msgOne');
const msg_2 = document.querySelector('#msgTwo');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    msg_1.textContent = 'Loading...';
    msg_2.textContent = '';
    fetch('/weather?address='+searchElement.value).then((response) => {
        response.json().then((data = {} ) => {
            if(data.error){
                console.log(data.error);
            }else{
                // console.log(data.location);
                // console.log(data);
                // msg_1.textContent = data.location;
                // msg_2.textContent = data;
                msg_1.textContent = 'Tumkur' ;
                msg_2.textContent = 'Weather testing';
            }
        })
    });
});
