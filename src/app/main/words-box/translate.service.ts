import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TranslateService {
    constructor(private http: Http) {}
    getTranslations(word: string) {
        return this.http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170602T222523Z.a4a65cbdd7635ce8.89d73119a4b6c128290f50ab4b0b6e2c8b369cca&text=' + word + '&lang=en-pl');
    }
}
