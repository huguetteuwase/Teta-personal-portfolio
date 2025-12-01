document.addEventListener('DOMContentLoaded', function () {
  const titleElement = document.querySelector('.info-content .title');
  const textToType = "Full Stack Developer";
  let index = 0;
  let isDeleting = false;

  function typeWriter() {
    const currentText = titleElement.textContent;

    if (isDeleting) {
      // Deleting
      titleElement.textContent = textToType.substring(0, titleElement.textContent.length - 1);
    } else {
      // Typing
      titleElement.textContent = textToType.substring(0, titleElement.textContent.length + 1);
    }

    // Toggle between typing and deleting
    if (!isDeleting && titleElement.textContent === textToType) {
      // Pause at end
      setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && titleElement.textContent === '') {
      isDeleting = false;
    }

    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(typeWriter, typingSpeed);
  }

  titleElement.textContent = '';
  setTimeout(typeWriter, 500);
});