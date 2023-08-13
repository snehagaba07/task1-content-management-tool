document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('content-form');
    const contentList = document.getElementById('content-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        if (title && description) {
            const contentItem = document.createElement('div');
            contentItem.classList.add('content-item');
            contentItem.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
            contentList.appendChild(contentItem);

            // Clear form fields
            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');
    const uploadButton = document.getElementById('upload-button');
    const statusDiv = document.getElementById('status');
  
    uploadButton.addEventListener('click', function() {
      const files = fileInput.files;
  
      if (files.length === 0) {
        statusDiv.innerHTML = 'Please select a file to upload.';
        return;
      }
  
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
  
      statusDiv.innerHTML = 'Uploading...';
  
      // You would need to replace this URL with your server endpoint for handling file uploads
      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.text())
      .then(result => {
        statusDiv.innerHTML = result;
        fileInput.value = ''; // Clear the selected files
      })
      .catch(error => {
        statusDiv.innerHTML = 'An error occurred during upload.';
        console.error('Error:', error);
      });
    });
  });