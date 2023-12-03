import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stat-department',
  templateUrl: './stat-department.component.html',
  styleUrls: ['./stat-department.component.css']
})
export class StatDepartmentComponent {
  title = 'chartDemo';
  constructor(private s:DepartmentService,private router:Router){}
statresult={};
labels: string[] = [];
data: number[] = [];
data2: number[] = [];
showmsg=false;
isHovered = false;

@Input() departmentId: any | null = null;
@Output() closeDetails = new EventEmitter<void>();

depstat:any;

  onCloseDetails(): void {
    this.closeDetails.emit();
    this.showmsg=true;
  }

statresultArray: any[] = [];
  getDepartmentStat(){
    this.s.getDepartmentStat().subscribe(
      (alldata)=>{
        console.log(alldata);
        this.statresult=alldata;
        this.statresultArray = Object.entries(this.statresult);

       // Use Object.values to get an array of values from the object
      const entries = Object.values(alldata) as any[][];

      for (let i = 0; i < entries.length; i++) {
        this.labels.push("Department "+entries[i][0]); // First element as labels
        this.data.push(entries[i][2]); // Third element as data
        this.data2.push(entries[i][1]);
      }
      }
               );
  }



  ngOnInit()
  {
    

    this.getDepartmentStat();

this.cratechart();
this.cratechart2();
    
  }

  cratechart(){
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: this.labels,
          datasets: [{
              label: 'Place for Student',
              data: this.data,
              backgroundColor:"#0196FD",
              borderColor: "#0196FD",
              borderWidth: 2
          }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true, // This ensures the axis starts at 0
              suggestedMin: 0, // Set the minimum suggested value to 0
            }
          }],
          // Other scale configurations for X-axis, if needed
        },
        
         
      }
  });
  }

  cratechart2(){
    var myChart2 = new Chart("myChart2", {
      type: 'bar',
      data: {
          labels: this.labels,
          datasets: [
          {
            label: 'Classroom',
            data: this.data2,
            backgroundColor:"#FFAF00",
            borderColor: "#FFAF00",
            borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true, // This ensures the axis starts at 0
              suggestedMin: 0, // Set the minimum suggested value to 0
            }
          }],
          // Other scale configurations for X-axis, if needed
        },
         
      }
  });
  }

}
