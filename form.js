
  // Show the button when the user scrolls down 100px
  window.onscroll = function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.classList.add('show-back-to-top');
    } else {
      backToTopButton.classList.remove('show-back-to-top');
    }
  };

  // Scroll to the top when the button is clicked
  document.querySelector('.back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

