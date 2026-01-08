import { Component } from '@angular/core';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-courses-list',
  imports: [],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  title = 'Available Courses';
  courses = [
    { id: 1, name: 'Introduction to Angular', duration: '4 weeks', description: 'Learn the basics of Angular framework.', price: '$199', date: '2024-07-01' },
    { id: 2, name: 'Advanced Angular', duration: '6 weeks' , description: 'Deep dive into advanced topics of Angular.', price: '$299', date: '2024-08-15' },
    { id: 3, name: 'Web Development with Node.js', duration: '5 weeks', description: 'Build scalable web applications using Node.js.', price: '$249', date: '2024-09-10'  },
  ];
}
