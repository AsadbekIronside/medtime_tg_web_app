import React, {useEffect} from 'react';

export default function QRScannerPopup() {
    const handleScan = () => {
        const tg = window.Telegram.WebApp;

        tg.showScanQrPopup(
            {text: 'Klinikadagi ma\'lumotlaringizni olish uchun skaner qiling'},
            (result) => {
                if (result) {
                    tg.sendData(result);

                    // Close WebApp after sending data
                    tg.close();
                    tg.closeScanQrPopup();
                } else {
                    tg.close(); // Optionally close if canceled
                    tg.closeScanQrPopup();
                }
            },
        );
    };

    useEffect(() => {
        handleScan();
    }, []);

    return <div></div>;
}
