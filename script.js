document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    console.log('Card clicked', card);
    const title = card.getAttribute('data-title');
    const description = card.getAttribute('data-description');
    console.log('Title:', title);
    console.log('Description:', description);

    const row = card.closest('.row');
    console.log(row);
    const descriptionBox = row.nextElementSibling;
    const descriptionTitle = descriptionBox.querySelector('.description-title');
    const descriptionText = descriptionBox.querySelector('.description-text');

    // Set description content
    descriptionTitle.textContent = title;
    descriptionText.textContent = description;
    descriptionBox.style.display = 'block';

    // Calculate card position and adjust description box position dynamically
    const cardRect = card.getBoundingClientRect();
    const containerRect = document.querySelector('.card-container').getBoundingClientRect();

    const topOffset = cardRect.bottom - containerRect.top + window.scrollY; // Position description below the clicked card
    descriptionBox.style.top = `${topOffset}px`; // Adjust the top position based on the card clicked
    descriptionBox.style.left = `${cardRect.left}px`; // Align with the left side of the card

    // Show the description box with a smooth transition
    descriptionBox.classList.add('show-description');

    // Disable other cards
    document.querySelectorAll('.card').forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.add('disabled');
      }
    });

    const closeBtn = descriptionBox.querySelector('.description-close-btn');
    closeBtn.addEventListener('click', () => {
        descriptionBox.style.display = 'none';
  
        // Re-enable all cards
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('disabled');
        });
    });
  });
});
