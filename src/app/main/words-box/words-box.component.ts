import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'words-box',
  templateUrl: './words-box.component.html',
  styleUrls: ['./words-box.component.css']
})
export class WordsBoxComponent {
  isAnswerCorrect = null;
  answer: string;
  i: number;
  word: string;
  shouldShowNextWord: boolean;
  correctAnswers;

  dictionary: Array<string> = ['statement', 'numb', 'conducted', 'despite', 'invoke', 'bind', 'omit', 'embrace', 'eludes', 'belittling', 'lexical', 'avoid', 'digging', 'responsible', 'indeed', 'certainly', 'temptation', 'misconceptions', 'dispel', 'implicitly', 'explicitly', 'would', 'her', 'all', 'my', 'make', 'about', 'know', 'will', 'as', 'up', 'one', 'time', 'there', 'year', 'so', 'think', 'when', 'which', 'them', 'some', 'me', 'people', 'take', 'out', 'into', 'just', 'see', 'him', 'your', 'come', 'could', 'now', 'than', 'like', 'other', 'how', 'then', 'its', 'our', 'two', 'more', 'these', 'want', 'way', 'look', 'first', 'also', 'new', 'because', 'day', 'more', 'use', 'no', 'man', 'find', 'here', 'thing', 'give', 'many', 'well', 'only', 'those', 'tell', 'one', 'very', 'her', 'even', 'back', 'any', 'good', 'woman', 'through', 'us', 'life', 'child', 'there', 'work', 'down', 'may', 'after', 'should', 'call', 'world', 'over', 'school', 'still', 'try', 'in', 'as', 'last', 'ask', 'need', 'too', 'feel', 'three', 'when', 'state', 'never', 'become', 'between', 'high', 'really', 'something', 'most', 'another', 'much', 'family', 'own', 'out', 'leave', 'put', 'old', 'while', 'mean', 'on', 'keep', 'student', 'why', 'let', 'great', 'same', 'big', 'group', 'begin', 'seem', 'country', 'help', 'talk', 'where', 'turn', 'problem', 'every', 'start', 'hand', 'might', 'American', 'show', 'part', 'about', 'against', 'place', 'over', 'such', 'again', 'few', 'case', 'most', 'week', 'company', 'where', 'system', 'each', 'right', 'program', 'hear', 'so', 'question', 'during', 'work', 'play', 'government', 'run', 'small', 'number', 'off', 'always', 'move', 'like', 'night', 'live', 'Mr', 'point', 'believe', 'hold', 'today', 'bring', 'happen', 'next', 'without', 'before', 'large', 'all', 'million', 'must', 'home', 'under', 'water', 'room', 'write', 'mother', 'area', 'national', 'money', 'story', 'young', 'fact', 'month', 'different', 'lot', 'right', 'study', 'book', 'eye', 'job', 'word', 'though', 'business', 'issue', 'side', 'kind', 'four', 'head', 'far', 'black', 'long', 'both', 'little', 'house', 'yes', 'after', 'since', 'long', 'provide', 'service', 'around', 'friend', 'important', 'father', 'sit', 'away', 'until', 'power', 'hour', 'game', 'often', 'yet', 'line', 'political', 'end', 'among', 'ever', 'stand', 'bad', 'lose', 'however', 'member', 'pay', 'law', 'meet', 'car', 'city', 'almost', 'include', 'continue', 'set', 'later', 'community', 'much', 'name', 'five', 'once', 'white', 'least', 'president', 'learn', 'real', 'change', 'team', 'minute', 'best', 'several', 'idea', 'kid', 'body', 'information', 'nothing', 'ago', 'right', 'lead', 'social', 'understand', 'whether', 'back', 'watch', 'together', 'follow', 'around', 'parent', 'only', 'stop', 'face', 'anything', 'create', 'public', 'already', 'speak', 'others', 'read', 'level', 'allow', 'add', 'office', 'spend', 'door', 'health', 'person', 'art', 'sure', 'such', 'war', 'history', 'party', 'within', 'grow', 'result', 'open', 'change', 'morning', 'walk', 'reason', 'low', 'win', 'research', 'girl', 'guy', 'early', 'food', 'before', 'moment', 'himself', 'air', 'teacher', 'force', 'offer', 'enough', 'both', 'education', 'across', 'although', 'remember', 'foot', 'second', 'boy', 'maybe', 'toward', 'able', 'age', 'off', 'policy', 'everything', 'love', 'process', 'music', 'including', 'consider', 'appear', 'actually', 'buy', 'probably', 'human', 'wait', 'serve', 'market', 'die', 'send', 'expect', 'home', 'sense', 'build', 'stay', 'fall', 'oh', 'nation', 'plan', 'cut', 'college', 'interest', 'death', 'course', 'someone', 'experience', 'behind', 'reach', 'local', 'kill', 'six', 'remain', 'effect', 'use', 'yeah', 'suggest', 'class', 'control', 'raise', 'care', 'perhaps', 'little', 'late', 'hard', 'field', 'else', 'pass', 'former', 'sell', 'major', 'sometimes', 'require', 'along', 'development', 'themselves', 'report', 'role', 'better', 'economic', 'effort', 'up', 'decide', 'rate', 'strong', 'possible', 'heart', 'drug', 'show', 'leader', 'light', 'voice', 'wife', 'whole', 'police', 'mind', 'finally', 'pull', 'return', 'free', 'military', 'price', 'report', 'less', 'according', 'decision', 'explain', 'son', 'hope', 'even', 'develop', 'view', 'relationship', 'carry', 'town', 'road', 'drive', 'arm', 'TRUE', 'federal', 'break', 'better', 'difference', 'thank', 'receive', 'value', 'international', 'building', 'action', 'full', 'model', 'join', 'season', 'society', 'because', 'tax', 'director', 'early', 'position', 'player', 'agree', 'especially', 'record', 'pick', 'wear', 'paper', 'special', 'space', 'ground', 'form', 'support', 'event', 'official', 'whose', 'matter', 'everyone', 'center', 'couple', 'site', 'end', 'project', 'hit', 'base', 'activity', 'star', 'table', 'need', 'court', 'produce', 'eat', 'American', 'teach', 'oil', 'half', 'situation', 'easy', 'cost', 'industry', 'figure', 'face', 'street', 'image', 'itself', 'phone', 'either', 'data', 'cover', 'quite', 'picture', 'clear', 'practice', 'piece', 'land', 'recent', 'describe', 'product', 'doctor', 'wall', 'patient', 'worker', 'news', 'test', 'movie', 'certain', 'north', 'love', 'personal', 'open', 'support', 'simply', 'third', 'technology', 'catch', 'step', 'baby', 'computer', 'type', 'attention', 'draw', 'film', 'Republican', 'tree', 'source', 'red', 'nearly', 'organization', 'choose', 'cause', 'hair', 'look', 'point', 'century', 'evidence', 'window', 'difficult', 'listen', 'soon', 'culture', 'billion', 'chance', 'brother', 'energy', 'period', 'course', 'summer', 'less', 'realize', 'hundred', 'available', 'plant', 'likely', 'opportunity', 'term', 'short', 'letter', 'condition', 'choice', 'place', 'single', 'rule', 'daughter', 'administration', 'south', 'husband', 'Congress', 'floor', 'campaign', 'material', 'population', 'well', 'call', 'economy', 'medical', 'hospital', 'church', 'close', 'thousand', 'risk', 'current', 'fire', 'future', 'wrong', 'involve', 'defense', 'anyone', 'increase', 'security', 'bank', 'myself', 'certainly', 'west', 'sport', 'board', 'seek', 'per', 'subject', 'officer', 'private', 'rest', 'behavior', 'deal', 'performance', 'fight', 'throw', 'top', 'quickly', 'past', 'goal', 'second', 'bed', 'order', 'author', 'fill', 'represent', 'focus', 'foreign', 'drop', 'plan', 'blood', 'upon', 'agency', 'push', 'nature', 'color', 'no', 'recently', 'store', 'reduce', 'sound', 'note', 'fine', 'before', 'near', 'movement', 'page', 'enter', 'share', 'than', 'common', 'poor', 'other', 'natural', 'race', 'concern', 'series', 'significant', 'similar', 'hot', 'language', 'each', 'usually', 'response', 'dead', 'rise', 'animal', 'factor', 'decade', 'article', 'shoot', 'east', 'save', 'seven', 'artist', 'away', 'scene', 'stock', 'career', 'central', 'eight', 'thus', 'treatment', 'beyond', 'happy', 'exactly', 'protect', 'approach', 'lie', 'size', 'dog', 'fund', 'serious', 'occur', 'media', 'ready', 'sign', 'thought', 'list', 'individual', 'simple', 'quality', 'pressure', 'accept', 'answer', 'hard', 'resource', 'identify', 'left', 'meeting', 'determine', 'prepare', 'disease', 'whatever', 'success', 'argue', 'cup', 'particularly', 'amount', 'ability', 'staff', 'recognize', 'indicate', 'character', 'growth', 'loss', 'degree', 'wonder', 'attack', 'herself', 'region', 'television', 'box', 'TV', 'training', 'pretty', 'trade', 'deal', 'election', 'everybody', 'physical', 'lay', 'general', 'feeling', 'standard', 'bill', 'message', 'fail', 'outside', 'arrive', 'analysis', 'benefit', 'name', 'sex', 'forward', 'lawyer', 'present', 'section', 'environmental', 'glass', 'answer', 'skill', 'sister', 'PM', 'professor', 'operation', 'financial', 'crime', 'stage', 'ok', 'compare', 'authority', 'miss', 'design', 'sort', 'one', 'act', 'ten', 'knowledge', 'gun', 'station', 'blue', 'state', 'strategy', 'little', 'clearly', 'discuss', 'indeed', 'force', 'truth', 'song', 'example', 'democratic', 'check', 'environment', 'leg', 'dark', 'public', 'various', 'rather', 'laugh', 'guess', 'executive', 'set', 'study', 'prove', 'hang', 'entire', 'rock', 'design', 'enough', 'forget', 'since', 'claim', 'note', 'remove', 'manager', 'help', 'close', 'sound', 'enjoy', 'network', 'legal', 'religious', 'cold', 'form', 'final', 'main', 'science', 'green', 'memory', 'card', 'above', 'seat', 'cell', 'establish', 'nice', 'trial', 'expert', 'that', 'spring', 'firm', 'Democrat', 'radio', 'visit', 'management', 'care', 'avoid', 'imagine', 'tonight', 'huge', 'ball', 'no', 'close', 'finish', 'yourself', 'talk', 'theory', 'impact', 'respond', 'statement', 'maintain', 'charge', 'popular', 'traditional', 'onto', 'reveal', 'direction', 'weapon', 'employee', 'cultural', 'contain', 'peace', 'head', 'control', 'base', 'pain', 'apply', 'play', 'measure', 'wide', 'shake', 'fly', 'interview', 'manage', 'chair', 'fish', 'particular', 'camera', 'structure', 'politics', 'perform', 'bit', 'weight', 'suddenly', 'discover', 'candidate', 'top', 'production', 'treat', 'trip', 'evening', 'affect', 'inside', 'conference', 'unit', 'best', 'style', 'adult', 'worry', 'range', 'mention', 'rather', 'far', 'deep', 'past', 'edge', 'individual', 'specific', 'writer', 'trouble', 'necessary', 'throughout', 'challenge', 'fear', 'shoulder', 'institution', 'middle', 'sea', 'dream', 'bar', 'beautiful', 'property', 'instead', 'improve', 'stuff', 'detail'];

  constructor(private translateService: TranslateService) {
    this.i = 0;
    this.shouldShowNextWord = true;
    this.word = this.dictionary[0];
    this.getAnswers(this.word);
  }

  public check() {
    this.answer = this.answer ? this.answer : '';
    this.isAnswerCorrect = (this.correctAnswers.indexOf(this.answer.toLocaleLowerCase()) > -1);

    console.log({ isAnswerCorrect: this.isAnswerCorrect, correctAnswers: this.correctAnswers, answer: this.answer });

    if (this.isAnswerCorrect) {
      this.answer = '';
      setTimeout(() => {
        this.getNextWord();
      }, 500);
    } else {
      setTimeout(() => {
        this.isAnswerCorrect = null;
      }, 700);
    }

    return this.isAnswerCorrect;
  }

  public skip() {
    if (this.shouldShowNextWord) {
      this.showCorrectAnswer();
      this.shouldShowNextWord = false;
    } else {
      this.showNextWord();
    }
  }

  public showNextWord() {
    this.isAnswerCorrect = true;
    this.shouldShowNextWord = true;

    return setTimeout(() => {
      this.getNextWord();
    }, 500);
  }

  public showCorrectAnswer() {
    const correctAnswer = this.correctAnswers[0];

    for (let i = 0; i < correctAnswer.length; ++i) {
      setTimeout(() => {
        this.answer = this.answer ? this.answer : '';
        this.answer += correctAnswer[i];
      }, i * 50);
    }

    return this.answer;
  }

  public getNextWord() {
    this.i++;
    this.i = (this.i > this.dictionary.length - 1) ? 0 : this.i;
    this.isAnswerCorrect = null;
    this.shouldShowNextWord = true;
    this.word = this.dictionary[this.i];
    this.getAnswers(this.word);
  }

  public isBoolean(value) {
    return (typeof(value) === 'boolean');
  }

  private getAnswers(word: string) {
    this.translateService.getTranslations(word)
      .subscribe((response) => {
        console.log(response);
        this.correctAnswers = response.json().text;
        console.log(this.correctAnswers);
      });
  }
}