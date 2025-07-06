import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-algostyle',
  imports: [],
  templateUrl: './algostyle.component.html',
  styleUrl: './algostyle.component.css'
})
export class AlgostyleComponent {

  constructor(private router:Router){}

  returnToHome(){
    this.router.navigate(['/home'])
  }

}
