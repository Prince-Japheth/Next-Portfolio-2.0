document.addEventListener('DOMContentLoaded', () => {
  const cursorOuter = document.querySelector('.cursor-outer');
  const cursorInner = document.querySelector('.cursor-inner');
  
  let mouseX = 0;
  let mouseY = 0;
  let outerX = 0;
  let outerY = 0;
  let innerX = 0;
  let innerY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update inner cursor position immediately
    cursorInner.style.left = mouseX + 'px';
    cursorInner.style.top = mouseY + 'px';
  });
  
  // Smooth animation for outer cursor
  function animate() {
    // Calculate the distance between current and target positions
    const dx = mouseX - outerX;
    const dy = mouseY - outerY;
    
    // Move the outer cursor with easing
    outerX += dx * 0.7;
    outerY += dy * 0.7;
    
    // Update the outer cursor position
    cursorOuter.style.left = outerX + 'px';
    cursorOuter.style.top = outerY + 'px';
    
    requestAnimationFrame(animate);
  }
  
  animate();
  
  // Add hover effect for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursorOuter.classList.add('cursor-hover');
      cursorInner.classList.add('cursor-hover');
    });
    
    element.addEventListener('mouseleave', () => {
      cursorOuter.classList.remove('cursor-hover');
      cursorInner.classList.remove('cursor-hover');
    });
  });
}); 