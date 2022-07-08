import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-galleryapp',
  templateUrl: './galleryapp.component.html',
  styleUrls: ['./galleryapp.component.css']
})
export class GalleryappComponent implements OnInit {

  constructor(private api:ServiceService) { 
    api.galleryapp().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }

  ngOnInit(): void {
  }
data:any=[]
}
