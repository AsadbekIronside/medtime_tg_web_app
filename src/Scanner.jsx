import React, {useEffect, useState} from 'react';
import {Html5Qrcode} from 'html5-qrcode';

// Access Telegram WebApp API
const tg = window.Telegram?.WebApp;

export default function Scanner() {
    const [result, setResult] = useState('');

    useEffect(() => {
        tg?.expand(); // Make Telegram WebApp full screen
        const html5QrCode = new Html5Qrcode('qr-reader');

        html5QrCode
            .start(
                {facingMode: 'environment'},
                {fps: 10, qrbox: 250},
                (qrCodeMessage) => {
                    setResult(qrCodeMessage);
                    tg?.sendData(qrCodeMessage);

                    html5QrCode.stop().then(() => tg?.close());
                },
                () => {
                },
            )
            .catch((err) => console.error('QR Code scanning failed.', err));

        return () => {
            html5QrCode.stop().catch(() => {
            });
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div id="qr-reader" className="w-72"></div>
            {result && (
                <p className="mt-4 text-lg text-gray-800">
                    Scanned QR: <strong>{result}</strong>
                </p>
            )}
        </div>
    );
}
