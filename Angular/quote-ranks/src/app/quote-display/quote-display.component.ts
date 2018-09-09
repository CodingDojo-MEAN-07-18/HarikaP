import { Component, OnInit,Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {
  @Input() quotes;
  @Output() deleteQuoteEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  voteUp(quote) {
    quote.rating++;
  }

  voteDown(quote) {
    quote.rating--;
  }

  delete(quote) {
    this.deleteQuoteEvent.emit(quote);
  }
}
