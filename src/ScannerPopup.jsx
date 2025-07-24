import React, {useEffect} from 'react';

export default function QRScannerPopup() {
    const handleScan = () => {
        const tg = window.Telegram.WebApp;

        tg.showScanQrPopup(
            {text: 'Please scan your QR code'},
            (result) => {
                if (result) {
                    alert(`Scanned QR: ${result}`);
                    tg.sendData(result);
                } else {
                    alert('QR scanning canceled');
                }
            },
        );
    };

    useEffect(() => {
        handleScan();
    }, []);

    return (
        <div>

        </div>
    );
}
