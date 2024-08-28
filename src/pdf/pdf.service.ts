import { Injectable } from '@nestjs/common';

@Injectable()
export class PdfService {

    async generatePdf() {
        console.log('generate pdf');
    }
}
