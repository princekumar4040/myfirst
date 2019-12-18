import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() public data;
  constructor() {

    
   }

  ngOnInit() {
    setTimeout(() => {
      console.log('userId is:',this.data);  // You will get the @Input value
  });
  }

}
