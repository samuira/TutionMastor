import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private service:AppService) { }
  blogs = null;
  ngOnInit() {
    var response = {}
    this.service.GetData('blog/')
    .subscribe(result => {
      this.blogs = result;
    }, error => {
      console.log(error)
    })
  }

}
