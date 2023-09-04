const newComment = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#post-content').value.trim();

    console.log(content)
  
    if (content) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create comment');
      }
    }
  };

const showNewPost = async (e) => {
    if(e.target.matches(".new-comment")) {
    
      console.log('new post clicked')
    
      if (newPostContainer.style.display === 'none') {
        newPostContainer.style.display = 'flex';
      } else {
        newPostContainer.style.display = 'none';
      }
    
    }
}

  
const postForm = document.querySelector('.new-post-form')
postForm.addEventListener('submit', newComment);

const newPostContainer = document.querySelector('.new-comment-container');
const newPostButton = document.querySelector('.new-comment');
newPostButton.addEventListener('click', showNewPost)