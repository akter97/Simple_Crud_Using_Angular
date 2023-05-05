import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studentcrud',
  templateUrl: './studentcrud.component.html',
  styleUrls: ['./studentcrud.component.scss']
})
export class StudentcrudComponent {
  StudentArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  stname: string ="";
  course: string ="";
 
  currentStudentID = "";

  constructor(private http: HttpClient ) 
  {
    this.getAllStudent();
  }

  ngOnInit(): void {
    this.getAllStudent()
  }

  getAllStudent()
  { 
    this.http.get("https://localhost:7048/api/Student/GetStudent")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.StudentArray = resultData;
    });
  }

  register()
  {
   // this.isLogin = false; 
   // alert("hi");
    let bodyData = {
      "stname" : this.stname,
      "course" : this.course,
    
    };

    this.http.post("https://localhost:7048/api/Student/AddStudent",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully")
        this.getAllStudent();
      //  this.name = '';
      //  this.address = '';
      //  this.mobile  = 0;
    });
  }

  setUpdate(data: any) 
  {
   this.stname = data.stname;
   this.course = data.course;
   

   this.currentStudentID = data.id;
   var ide = data.id;
 
  }

  UpdateRecords()
  {
    let bodyData = 
    {
      "id": this.currentStudentID,
      "stname" : this.stname,
      "course" : this.course,
    };
    
    this.http.patch("https://localhost:7048/api/Student/UpdateStudent",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Updated")
        this.getAllStudent();
      
    });
  }
 
  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();  
      }       

  }


  setDelete(data: any)
  {
    this.http.delete("https://localhost:7048/api/Student/DeleteStudent"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deleted")
        this.getAllStudent();
    });
  }
}