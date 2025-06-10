    function DownloadQRCode() {
        const qrCodeImage = document.querySelector("#qrcode img");
        const link = document.createElement('a');
        link.href = qrCodeImage.src;
        link.download = 'qrcode.png';
        document.body.appendChild(link);
        link.click();

    }