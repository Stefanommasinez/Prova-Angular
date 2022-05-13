import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private readonly router: Router) {
  }
  
  goToRequest() {
    this.router.navigate(['']);
  }

  goToDetails() {
    this.router.navigate(['details']);
  }

  ngOnInit(): void {
  }

}
