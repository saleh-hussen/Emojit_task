import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor() { 
  
  }

  ngOnInit(): void {
    
  }
 
  onclick(){
    function addClass() {
      document.getElementById("details")?.classList.toggle("d-none");
      document.getElementById("header-img")?.classList.toggle("d-none");
      document.getElementById("nav-img")?.classList.toggle("d-none");
      document.getElementById("menu-nav")?.classList.toggle("d-none");
    }
  }
}
