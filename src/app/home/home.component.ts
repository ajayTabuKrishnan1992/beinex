import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataModel } from '../models/chart.model';
import * as _d3 from 'd3';
import { D3Service } from '../d3.service';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
  tileCardContent: any = []
  @ViewChild('doughnutCanvas') doughnutCanvas: ElementRef;
  @ViewChild('barCanvas') barCanvas: ElementRef;
  @ViewChild('bars') bars: ElementRef;

  doughnutChart: any = [];
  barChart: any = [];
  barChart2: any = [];

  constructor(private d3: D3Service) { }

  ngOnInit(): void {
    this.tileCardContent = [

      {
        name: 'Total Number of Task',
        count: 45,
        percentage: 0,
        showProgress: false,
        outerStrokeColor: ""
      }, {
        name: 'Number of Tasks on Track',
        count: 14,
        percentage: 54,
        showProgress: true,
        outerStrokeColor: 'green'
      },
      {
        name: 'Number of Tasks Delayed',
        count: 8,
        percentage: 30,
        showProgress: true,
        outerStrokeColor: '#ffb100'
      },
      {
        name: 'Number of Tasks Significant Delayed',
        count: 4,
        percentage: 10,
        showProgress: true,
        outerStrokeColor: '#A40D12'
      },
      {
        name: 'Number of Tasks Completed',
        count: 19,
        percentage: 19,
        showProgress: true,
        outerStrokeColor: '#0a7d94'
      }

    ];
  }

  ngAfterViewInit(): void {
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);

    this.doughnutChartMethod();
    this.stackedBarChartMethod1();
    this.stackedBarChartMethod2();

  }
  doughnutChartMethod() {
    new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['DOH Sector', 'Chariman Office'],
        datasets: [{
          label: '# of Votes',
          data: [35, 65],
          backgroundColor: [
            '#3496b9',
            '#6aa2b6'
          ],
          hoverBackgroundColor: [
            '#22637a',
            '#85cde7'
          ]
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      }
    });
  }
  stackedBarChartMethod1() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      plugins: [ChartDataLabels],
      data: {
        labels: ["Dr. Omar Najim", "Sharon Reily", "Salem AbdulKareem", "Amna ALhameli"],
        datasets: [{
          data: [4, 3, 3, 2],
          backgroundColor: "green",
          hoverBackgroundColor: "rgba(50,90,100,1)",
          borderRadius: 5,
          label: "On track"
        }, {
          data: [3, 2, 3, 3],
          backgroundColor: "#ffb100",
          hoverBackgroundColor: "rgba(140,85,100,1)",
          borderRadius: 5,
          label: "Delayed"
        }, {
          data: [4, 3, 3, 3],
          backgroundColor: "#A40D12",
          hoverBackgroundColor: "rgba(46,185,235,1)",
          borderRadius: 5,
          label: "Significantly delayed"
        }, {
          data: [1, 2, 4, 3],
          backgroundColor: "#22637a",
          hoverBackgroundColor: "rgba(46,185,235,1)",
          borderRadius: 5,
          label: "Completed"
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false
            },
            ticks: {
              display: false
            }
          },
          y: {
            stacked: true,
            grid: {
              display: false
            }
          }
        },
        plugins: {
          datalabels: {
            color: '#fff'
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              boxWidth: 1,
              boxHeight: 4
            }
          }
        }
      }
    });

  }
  
  stackedBarChartMethod2() {
    this.barChart2 = new Chart(this.bars.nativeElement, {
      type: 'bar',
      plugins: [ChartDataLabels],
      data: {
        labels: ["Stratergic Affairs", "Healthcare Workforce Sector", "Healthcare Facilities Sector", "Support Services"],
        datasets: [{
          data: [4, 3, 3, 2],
          backgroundColor: "green",
          hoverBackgroundColor: "rgba(50,90,100,1)",
          borderRadius: 5,
          label: "On track"
        }, {
          data: [3, 2, 3, 3],
          backgroundColor: "#ffb100",
          hoverBackgroundColor: "rgba(140,85,100,1)",
          borderRadius: 5,
          label: "Delayed"
        }, {
          data: [4, 3, 3, 3],
          backgroundColor: "#A40D12",
          hoverBackgroundColor: "rgba(46,185,235,1)",
          borderRadius: 5,
          label: "Significantly delayed"
        }, {
          data: [1, 2, 4, 3],
          backgroundColor: "#22637a",
          hoverBackgroundColor: "rgba(46,185,235,1)",
          borderRadius: 5,
          label: "Completed"
        }]
      },
      options: {
        indexAxis: 'y',
        
        scales: {
          
          x: {
            stacked: true,
            grid: {
              display: false
            },
            ticks: {
              display: false
            }
          },
          y: {
            stacked: true,
            grid: {
              display: false
            }
          }
        },
        plugins: {
          datalabels: {
            color: '#fff'
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              boxWidth: 1,
              boxHeight: 4
            }
          }
        }
      }
    });

  }
}
