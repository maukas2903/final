import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../servicios/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ConfigService:ConfigService) { }

  ngOnInit() {
    
  }

}
