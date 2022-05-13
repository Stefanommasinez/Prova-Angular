import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private readonly router: Router) {
  }
  
  goToList() {
    this.router.navigate(['list']);
  }


  ngOnInit(): void {
  }

}
