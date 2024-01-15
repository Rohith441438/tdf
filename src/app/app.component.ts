import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private enrollmentService:EnrollmentService){}

  title = 'tdf';
  topics=["Angular", "React", "Vue"];
  submitted=false;
  errorStatusCode = '';

  topicHasErrors = true;

  validateTopic(value: string){
    if(value === "default"){
      this.topicHasErrors = true;
    }else{
      this.topicHasErrors = false;
    }
  }

  userModel = new User("Pro", "Pro@pro.com", 2112211221, "default", "morning", true);

  onSubmit(){
    this.submitted = true;
    this.enrollmentService.enroll(this.userModel).subscribe(
      data => console.log('Success!', data),
      error => this.errorStatusCode = error
    );
  }
}
