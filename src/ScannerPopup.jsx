import React from "react";

export default function QRScannerPopup() {
    const handleScan = () => {
        const tg = window.Telegram.WebApp;

        tg.showScanQrPopup(
            { text: "Please scan your QR code" },
            (result) => {
                if (result) {
                    alert(`Scanned QR: ${result}`);
                    tg.sendData(result);
                } else {
                    alert("QR scanning canceled");
                }
            }
        );
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <button
                onClick={handleScan}
                className="px-4 py-2 text-white bg-blue-500 rounded"
            >
                Open Telegram QR Scanner
            </button>
        </div>
    );
}
