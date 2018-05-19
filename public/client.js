console.log('Client-side code running');

const button = document.getElementById('triggerBtn');
const result = document.getElementById('result');

button.addEventListener('click', function(e) {
  console.log('button was clicked');
  fetch('/trigger_cmd', {method: 'GET'})
    .then(function(response) {
	if(response.ok) {
	  console.log("response ok:", response)
	  return response.json();
	}
	throw new Error('Request failed.');
    }).then(function(data) {
	result.value = data.result
	console.log(data)
    }).catch(function(error) {
	console.log(error);
    });
});
