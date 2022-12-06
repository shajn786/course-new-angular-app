import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-course',
  templateUrl: './viewall-course.component.html',
  styleUrls: ['./viewall-course.component.css']
})
export class ViewallCourseComponent {

  constructor(private api :ApiService)
  {
    this.api.fetchCourse().subscribe(

     (response)=>
     {
     this.data = response
     }

    )

  }

  data: any =[]

}
