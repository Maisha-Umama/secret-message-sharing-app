document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();//to stop the default browser behaviour which is to submit the form
 
    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);
  
    document.querySelector('#link-input').value = encrypted;
});