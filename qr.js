// script.js
document.getElementById('generate-btn').addEventListener('click', function() {
    var input = document.getElementById('qr-input').value;
    var qrCodeContainer = document.getElementById('qr-code');
    
    // Clear previous QR code
    qrCodeContainer.innerHTML = '';

    if (input.trim() === '') {
        alert('Please enter some text');
        return;
    }

    // Generate QR code
    $(qrCodeContainer).qrcode({
        text: input,
        width: 200,
        height: 200
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var qrCodeContainer = document.getElementById('qr-code');

    // Generate default QR code with text "hello"
    $(qrCodeContainer).qrcode({
        text: 'https://github.com/hungthinh04',
        width: 200,
        height: 200
    });
});
