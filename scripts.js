// Basic animations for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Example of dynamic cart interaction
  document.querySelectorAll('.btn-success').forEach(button => {
    button.addEventListener('click', () => {
      alert('Item added to cart!');
    });
  });
  