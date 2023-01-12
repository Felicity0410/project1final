const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
        entry.target.classList.add('fade-up');
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove('fade-up');
        observer.observe(entry.target);
      }
    });
  });
  
  const animatedElements = document.querySelectorAll('.animated-element');
  animatedElements.forEach(animatedElement => {
    observer.observe(animatedElement);
  });

  function scrollToContact () {
    const contact = document.getElementById('contact')
    contact.scrollIntoView({behavior: "smooth"})
  }