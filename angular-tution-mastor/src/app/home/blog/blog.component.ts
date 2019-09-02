import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private service:AppService) { }

  ngOnInit() {
    var response = {}
    
    this.service.PostData(response, 'blog/blog-list')
    .subscribe(result => {
      console.log(result)
    }, error => {
    })
  }

}
