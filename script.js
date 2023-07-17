document.getElementById('emailForm').addEventListener('submit', (event) => {
     event.preventDefault();

     var email = document.getElementById('email').value;

     console.log('Email', email);
     event.target.reset();
})