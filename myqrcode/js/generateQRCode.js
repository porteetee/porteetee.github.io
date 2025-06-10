        function generateQRCode() {
        const qrContainer = document.getElementById("qrcode");
        qrContainer.innerHTML = "";
        const text = document.getElementById("text").value;
        if (text.trim() === "") {
            alert("Required field cannot be empty");
            return;
        }
        new QRCode(qrContainer, {
            text: text,
            width: 256,
            height: 256,
        });
        document.getElementById("btn-download").style.display = "inline-block";
        }