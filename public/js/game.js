//Returns a promise
fetch('https://api.chucknorris.io/jokes/random')
.then(res => {
return res.json();
})
.then(data => {
    console.log(data.value);
})
.catch(err => console.log('some error'));