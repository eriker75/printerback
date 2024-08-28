import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as QRCode from 'qrcode';


@Controller('qr')
export class QrController {

    @Get('generate/production')
    async generateQRCode(@Res() res: Response) {
        const url = 'https://procodelearning.com/login?printer=dc40cc65-3e37-11ef-937f-00505651e5f9';

        try {
            const qrBuffer = await QRCode.toBuffer(url);

            res.set({
                'Content-Type': 'image/png',
                'Content-Length': qrBuffer.length,
            });

            res.end(qrBuffer);
        } catch (error) {
            console.error('Error generating QR code:', error);
            res.status(500).send('Error generating QR code');
        }
    }

    @Get('generate/development')
    async generateQR(@Res() res: Response) {
        const url = 'https://eribertmarquez.com/login?printer=dc40cc65-3e37-11ef-937f-00505651e5f9';

        try {
            const qrBuffer = await QRCode.toBuffer(url);

            res.set({
                'Content-Type': 'image/png',
                'Content-Length': qrBuffer.length,
            });

            res.end(qrBuffer);
        } catch (error) {
            console.error('Error generating QR code:', error);
            res.status(500).send('Error generating QR code');
        }
    }
}
