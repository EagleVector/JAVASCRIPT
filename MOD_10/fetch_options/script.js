// {JSON} Placeholder
// jsonplaceholder.typicode.com
// fake api -> No modification into the database but we get the response
// Dive into the networks tab

// Sending a POST request
function createPost({title, body}) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body
      }),
      headers: {
        'Content-Type': 'application/json',
        token: 'abc123'
      }
    }).then(res => res.json())
      .then(data => console.log(data));
}

createPost({ title: 'My Post', body: 'This is my post'});