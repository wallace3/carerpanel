import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-users-grid',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './users-grid.component.html',
  styleUrl: './users-grid.component.css'
})
export class UsersGridComponent implements AfterViewInit {
  title = 'Users List';
  constructor() { }

  ngAfterViewInit() {
    $('.delete-btn').on('click', function () {
      $(this).closest('.user-grid-card').addClass('d-none')
    });

  }
  users = [
    {
      id: 1,
      bgImg: 'assets/images/user-grid/user-grid-bg1.png',
      profileImg: 'assets/images/user-grid/user-grid-img1.png',
      name: 'Jacob Jones',
      email: 'ifrandom@gmail.com',
      department: 'Design',
      designation: 'UI UX Designer'
    },
    {
      id: 2,
      bgImg: 'assets/images/user-grid/user-grid-bg2.png',
      profileImg: 'assets/images/user-grid/user-grid-img2.png',
      name: 'Darrell Steward',
      email: 'ifrandom@gmail.com',
      department: 'Design',
      designation: 'UI UX Designer'
    },
    {
      id: 3,
      bgImg: 'assets/images/user-grid/user-grid-bg3.png',
      profileImg: 'assets/images/user-grid/user-grid-img3.png',
      name: 'Jerome Bell',
      email: 'ifrandom@gmail.com',
      department: 'Design',
      designation: 'UI UX Designer'
    },
    {
      id: 4,
      bgImg: 'assets/images/user-grid/user-grid-bg4.png',
      profileImg: 'assets/images/user-grid/user-grid-img4.png',
      name: 'Eleanor Pena',
      email: 'ifrandom@gmail.com',
      department: 'Design',
      designation: 'UI UX Designer'
    },
    {
      id: 5,
      name: 'Ralph Edwards',
      email: 'ifrandom@gmail.com',
      department: 'Design',
      designation: 'UI UX Designer',
      bgImg: 'assets/images/user-grid/user-grid-bg5.png',
      profileImg: 'assets/images/user-grid/user-grid-img5.png',
    },
    {
      id: 6,
      name: 'Annette Black',
      email: 'ifrandom@gmail.com',
      department: 'Design',
      designation: 'UI UX Designer',
      bgImg: 'assets/images/user-grid/user-grid-bg6.png',
      profileImg: 'assets/images/user-grid/user-grid-img6.png',
    },
    {
      id: 8,
      name: 'Albert Flores',
      email: 'ifrandom@gmail.com',
      department: 'Design',
      designation: 'UI UX Designer',
      bgImg: 'assets/images/user-grid/user-grid-bg8.png',
      profileImg: 'assets/images/user-grid/user-grid-img8.png',
    },
    {
      id: 9,
      name: 'Dianne Russell',
      email: 'ifrandom@gmail.com',
      department: 'Design',
      designation: 'UI UX Designer',
      bgImg: 'assets/images/user-grid/user-grid-bg9.png',
      profileImg: 'assets/images/user-grid/user-grid-img9.png',
    },
    {
      id: 9,
      name: 'Dianne Russell',
      email: 'ifrandom@gmail.com',
      department: 'Design',
      designation: 'UI UX Designer',
      bgImg: 'assets/images/user-grid/user-grid-bg9.png',
      profileImg: 'assets/images/user-grid/user-grid-img9.png',
    },
    {
      id: 10,
      name: 'Dianne Russell',
      email: 'ifrandom@gmail.com',
      department: 'Design',
      designation: 'UI UX Designer',
      bgImg: 'assets/images/user-grid/user-grid-bg10.png',
      profileImg: 'assets/images/user-grid/user-grid-img10.png',
    },
    {
      id: 11,
      name: 'Esther Howard',
      email: 'ifrandom@gmail.com',
      department: 'Design',
      designation: 'UI UX Designer',
      bgImg: 'assets/images/user-grid/user-grid-bg11.png',
      profileImg: 'assets/images/user-grid/user-grid-img11.png',
    },
    {
      id: 12,
      name: 'Guy Hawkins',
      email: 'ifrandom@gmail.com',
      department: 'Design',
      designation: 'UI UX Designer',
      bgImg: 'assets/images/user-grid/user-grid-bg12.png',
      profileImg: 'assets/images/user-grid/user-grid-img12.png',
    },
  ];


}
