import React, {useEffect} from 'react';

export default function QRScannerPopup() {
    useEffect(() => {
        const tg = window.Telegram.WebApp;

        // Open the Telegram built-in QR scanner
        tg.showScanQrPopup({
            text: 'Klinikadagi ma\'lumotlaringizni olish uchun skaner qiling',
        });

        // Handle QR code scanning using qrTextReceived
        const onQrTextReceived = (qrText) => {
            if (qrText) {
                tg.sendData(qrText);
            }
            tg.closeScanQrPopup(); // Close popup
            tg.close(); // Close the WebApp
        };

        tg.onEvent('qrTextReceived', onQrTextReceived);

        return () => {
            // Cleanup: remove event listener if component unmounts
            tg.offEvent('qrTextReceived', onQrTextReceived);
        };
    }, []);

    return <div></div>;
}
