const newComment = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#post-content').value.trim();
    const postId = event.target.getAttribute('data-id');

    console.log(postId)
  
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id: postId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${postId}`);
      } else {
        alert('Failed to create comment');
      }
    }
};

const showNewPost = async (e) => {
    if(e.target.matches(".new-comment")) {
    
      if (newPostContainer.style.display === 'none') {
        newPostContainer.style.display = 'flex';
      } else {
        newPostContainer.style.display = 'none';
      }
    
    }
}

  
const postComment = document.querySelector('.new-comment-submit')
postComment.addEventListener('click', newComment);

const newPostContainer = document.querySelector('.new-comment-container');
const newPostButton = document.querySelector('.new-comment');
newPostButton.addEventListener('click', showNewPost)