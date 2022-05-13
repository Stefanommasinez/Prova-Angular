import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  
  constructor(private readonly router: Router) {
  }
  
  goToList() {
    this.router.navigate(['list']);
  }
  
  ngOnInit(): void {
  }

}
