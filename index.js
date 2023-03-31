let content = document.getElementById('content');
let input = document.getElementById('input-field');
let btn = document.getElementById('btn');
let about = document.getElementById('about');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  about.style.display = 'none';
  content.innerHTML = '';

  let userdata = input.value;
  fetch(`https://api.github.com/users/${userdata}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let detail = document.createElement('div');
      detail.id = 'detail';
      detail.innerHTML = `
      <img src="${data.avatar_url}" alt="${data.login}">
      <h1> ${data.login}</h1>
      ${data.location ? `<p> Location : ${data.location}</p>` : ''}
      ${data.bio ? `<p> Bio : ${data.bio}</p>` : ''}
      ${
        data.public_repos
          ? `<p> Public Repositories : ${data.public_repos}</p>`
          : ''
      }
      ${
        data.blog
          ? `<p> Blog : <a href="${data.blog}">${data.blog}</a></p>`
          : ''
      }
      ${data.company ? `<p> Company : ${data.company}</p>` : ''}
      ${data.created_at ? `<p> Since : ${data.created_at}</p>` : ''}
      ${data.following ? `<p> Following : ${data.following}</p>` : ''}
      ${data.followers ? `<p> Followers : ${data.followers}</p>` : ''}
      ${data.id ? `<p> ID : ${data.id}</p>` : ''}
      ${data.public_repos ? `<p> Repositories : ${data.public_repos}</p>` : ''}
      ${data.type ? `<p> Type : ${data.type}</p>` : ''}
      ${data.updated_at ? `<p> Last Update : ${data.updated_at}</p>` : ''}
      ${data.public_gists ? `<p> Gists : ${data.public_gists}</p>` : ''}
      ${data.email ? `<p> Email : ${data.email}</p>` : ''}
      ${
        data.twitter_username
          ? `<p> Twitter Username : ${data.twitter_username}</p>`
          : ''
      }
      ${
        data.organizations_url
          ? `<p> Organization : <a href="${data.organizations_url}">${data.organizations_url}</a></p>`
          : ''
      }
      <p> Profile Link : <a href="${data.html_url}">${data.html_url}</a></p>
      `;

      content.appendChild(detail);
      input.value = '';
    })
    .catch((error) => console.error(error));
});
