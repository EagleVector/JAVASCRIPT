function toggle(e) {
  e.target.classList.toggle('danger');
}

document.querySelector('button').addEventListener('click', toggle);

const posts = [
  { title: 'Post 1', body: 'This is Post One' },
  { title: 'Post 2', body: 'This is Post Two' }
];

function createPosts(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}


function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

createPosts({ title: 'Post 3', body: 'This is Post Three'}, getPosts);