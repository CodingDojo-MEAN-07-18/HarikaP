import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan4',
  templateUrl: './super-saiyan4.component.html',
  styleUrls: ['./super-saiyan4.component.css']
})
export class SuperSaiyan4Component implements OnInit {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.power = this.power * 500;
  }
}
