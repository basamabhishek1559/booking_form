document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    let bookingData = '';
    for (const [key, value] of formData.entries()) {
        bookingData += `${key}: ${value}\n`;
    }
    
    alert(`Booking Data:\n${bookingData}`);
});
