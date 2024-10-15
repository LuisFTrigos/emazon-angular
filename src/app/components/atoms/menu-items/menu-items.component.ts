import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  @Input() buttonText: string = 'Submit';
  @Input() disabled: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
