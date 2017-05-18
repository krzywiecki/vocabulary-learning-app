import { Component } from '@angular/core';
import {variable} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'words-box',
  templateUrl: './words-box.component.html',
  styleUrls: ['./words-box.component.css']
})
export class WordsBoxComponent{
  isAnswerCorrect = null;
  answer:string = '';
  i:number = 0;
  word:string = '';

  dictionary: Array<{original: string, translations: {pl: Array<string>}}> = [
    { original: 'attitude', translations: { pl: ['postawa'] } },
    { original: 'coal', translations: { pl: ['węgiel'] } },
    { original: 'reasonably', translations: { pl: ['rozsądnie'] } },
    { original: 'flimsy', translations: { pl: ['słaby'] } }
  ];

  constructor() {
    this.word = this.dictionary[0].original;
  }

  check() {
    const self = this;
    this.isAnswerCorrect = (this.dictionary[this.i].translations.pl.indexOf(this.answer.toLocaleLowerCase()) > -1);
    console.log(this.isAnswerCorrect, this.answer.toLocaleLowerCase());

    if(this.isAnswerCorrect) {
      this.answer = '';
      setTimeout(function () {
        self.getNextWord();
      }, 500);
    } else {
      setTimeout(function () {
        self.isAnswerCorrect = null;
      }, 700);
    }

    return this.isAnswerCorrect;
  }

  skip() {
    const self = this;
    this.isAnswerCorrect = true;
    setTimeout(function () {
      self.getNextWord();
    }, 500);

  }

  getNextWord() {
    this.i++;
    this.i = (this.i > this.dictionary.length-1) ? 0 : this.i;
    this.isAnswerCorrect = null;
    this.word = this.dictionary[this.i].original;
  }

  isBoolean(value) {
    return (typeof(value) === 'boolean');
  }
}
