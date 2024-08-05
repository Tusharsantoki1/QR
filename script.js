function generateQRCode() {
    var url = document.getElementById("urlInput").value;
    if (url) {
        // Clear the previous QR code
        document.getElementById("qrcode").innerHTML = "";
        // Create a new QR code
        new QRCode(document.getElementById("qrcode"), {
            text: url,
            width: 128,
            height: 128,
        });
    } else {
        alert("Please enter a URL");
    }
}
