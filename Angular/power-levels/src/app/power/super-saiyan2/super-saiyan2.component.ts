import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan2',
  templateUrl: './super-saiyan2.component.html',
  styleUrls: ['./super-saiyan2.component.css']
})
export class SuperSaiyan2Component implements OnInit {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.power = this.power * 150;
  }
}
