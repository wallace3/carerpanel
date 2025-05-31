import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgApexchartsModule, BreadcrumbComponent, RouterLink,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  title = 'Portfolio';

  dates = [
    [1327359600000, 30.95],
    [1327446000000, 31.34],
    [1327532400000, 31.18],
    [1327618800000, 31.05],
    [1327878000000, 31.00],
    [1327964400000, 30.95],
    [1328050800000, 31.24],
    [1328137200000, 31.29],
    [1328223600000, 31.85],
    [1328482800000, 31.86],
    [1328569200000, 32.28],
    [1328655600000, 32.10],
    [1328742000000, 32.65],
    [1328828400000, 32.21],
    [1329087600000, 32.35],
    [1329174000000, 32.44],
    [1329260400000, 32.46],
    [1329346800000, 32.86],
    [1329433200000, 32.75],
    [1329778800000, 32.54],
    [1329865200000, 32.33],
    [1329951600000, 32.97],
    [1330038000000, 33.41],
    [1330297200000, 33.27],
    [1330383600000, 33.27],
    [1330470000000, 32.89],
    [1330556400000, 33.10],
    [1330642800000, 33.73],
  ];
  timeSeriesChart
  constructor() {
    this.timeSeriesChart = {
      series: [{
        name: 'Bitcoin',
        data: this.dates
      }],
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          show: false
        },
      },
      stroke: {
        curve: 'straight',
        width: 2,
        color: ["#000"],
        lineCap: 'round',
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
      },
      grid: {
        borderColor: '#D1D5DB',
        strokeDashArray: 3,
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',  // Gradient direction (vertical)
          shadeIntensity: 1, // Intensity of the gradient shading
          gradientToColors: ['#487FFF'], // Bottom gradient color (with transparency)
          inverseColors: false, // Do not invert colors
          opacityFrom: .4, // Starting opacity
          opacityTo: .1,  // Ending opacity
          stops: [0, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: 'Price'
        },
      },
      xaxis: {
        type: 'datetime',
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          }
        }
      }
    };
  }
  cryptoData = [
    {
      id: '01',
      name: 'Bitcoin',
      short: 'BTC',
      amount: 0.3464,
      value: 2753.00,
      trend: 1.37,
      image: 'assets/images/crypto/crypto-img1.png',
      progress: 50,
      direction: 'up'
    },
    {
      id: '02',
      name: 'Ethereum',
      short: 'ETH',
      amount: 0.5464,
      value: 2753.00,
      trend: 1.37,
      image: 'assets/images/crypto/crypto-img2.png',
      progress: 80,
      direction: 'up'
    },
    {
      id: '03',
      name: 'Litecoin',
      short: 'LTC',
      amount: 0.5464,
      value: 2753.00,
      trend: 1.37,
      image: 'assets/images/crypto/crypto-img3.png',
      progress: 40,
      direction: 'up'
    },
    {
      id: '04',
      name: 'Binance',
      short: 'BNB',
      amount: 0.5464,
      value: 2753.00,
      trend: 1.37,
      image: 'assets/images/crypto/crypto-img4.png',
      progress: 70,
      direction: 'up'
    },
    {
      id: '05',
      name: 'Dogecoin',
      short: 'DOGE',
      amount: 0.5464,
      value: 2753.00,
      trend: 1.37,
      image: 'assets/images/crypto/crypto-img6.png',
      progress: 40,
      direction: 'down'
    },
    {
      id: '06',
      name: 'Polygon',
      short: 'MATIC',
      amount: 0.5464,
      value: 2753.00,
      trend: 1.37,
      image: 'assets/images/crypto/crypto-img5.png',
      progress: 80,
      direction: 'down'
    },
    {
      id: '06',
      name: 'Polygon',
      short: 'MATIC',
      amount: 0.5464,
      value: 2753.00,
      trend: 1.37,
      image: 'assets/images/crypto/crypto-img5.png',
      progress: 80,
      direction: 'down'
    },
    {
      id: '06',
      name: 'Polygon',
      short: 'MATIC',
      amount: 0.5464,
      value: 2753.00,
      trend: 1.37,
      image: 'assets/images/crypto/crypto-img5.png',
      progress: 80,
      direction: 'down'
    },
    {
      id: '06',
      name: 'Polygon',
      short: 'MATIC',
      amount: 0.5464,
      value: 2753.00,
      trend: 1.37,
      image: 'assets/images/crypto/crypto-img5.png',
      progress: 80,
      direction: 'down'
    }
  ];

}
