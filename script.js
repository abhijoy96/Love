document.getElementById('revealButton').addEventListener('click', function() {
    // Reveal the heartfelt message with animation
    document.getElementById('heartfeltMessage').classList.remove('hidden');
    
    // Show the "Relive the Past" button
    document.getElementById('reliveButton').classList.remove('hidden');
    
    // Heart animation
    document.querySelector('.heart').style.opacity = '1';
    document.querySelector('.heart').style.animation = 'floatingHearts 5s ease-in-out infinite';
    
    this.textContent = "I love you ❤️";  // Change button text
    this.disabled = true;  // Disable button after click
});

document.getElementById('reliveButton').addEventListener('click', function() {
    // Display pictures with animation
    const pictures = document.getElementById('pictures');
    pictures.classList.remove('hidden');
    
    // Trigger pictures animation
    const allPictures = document.querySelectorAll('.picture');
    allPictures.forEach((pic, index) => {
        pic.style.animation = `pictureAnimation 2s ease-in-out forwards ${index * 0.5}s`;
    });
});
