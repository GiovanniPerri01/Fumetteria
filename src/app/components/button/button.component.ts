import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() testo:string;
  indirizzi:string[] = [];
  @Input() indirizzo:string;

  constructor() { }

  ngOnInit() {
    this.indirizzi.push(this.indirizzo);
  }

}
