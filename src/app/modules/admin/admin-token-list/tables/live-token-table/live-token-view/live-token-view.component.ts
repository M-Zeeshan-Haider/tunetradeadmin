import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-live-token-view',
  templateUrl: './live-token-view.component.html',
  styleUrls: ['./live-token-view.component.scss']
})
export class LiveTokenViewComponent implements OnInit {
  @Input() token: any;
  @Output() closeViewTrgger = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }
  closeView() {
    this.closeViewTrgger.emit(true);
  }
}
