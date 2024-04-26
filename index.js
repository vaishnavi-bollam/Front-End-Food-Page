document.addEventListener("DOMContentLoaded", function() {
    const images = ['firstimage.png', 'secondimage.png', 'thirdimage.png', 'fourthimage.png'];
    const container = document.getElementById('image-container');
  
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image;
      imgElement.classList.add('image');
      container.appendChild(imgElement);
    });
  });
  