const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

const showNewPost = async (e) => {
  if(e.target.matches(".new-post")) {
  
    console.log('new post clicked')
  
    if (newPostContainer.style.display === 'none') {
      newPostContainer.style.display = 'flex';
    } else {
      newPostContainer.style.display = 'none';
    }
  
  }
}

const updatePost = async (e) => {
  const id = e.target.getAttribute('data-id')
  const container = e.target.closest('.container')
  const textarea = container.querySelector('.update-content')
  const content = textarea.value.trim()
  
  if (e.target.hasAttribute('data-id') && content) {

    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
}

const postForm = document.querySelector('.new-post-form')
postForm.addEventListener('submit', newFormHandler);

const newPostContainer = document.querySelector('.new-post-container');
const newPostButton = document.querySelector('.new-post');
newPostButton.addEventListener('click', showNewPost)

const deleteButton = document.querySelectorAll('.delete-post')
deleteButton.forEach(button => {
  button.addEventListener('click', delButtonHandler);
});

const updateButton = document.querySelectorAll('.update-post')
updateButton.forEach(button => {
  button.addEventListener('click', updatePost);
});