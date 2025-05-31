import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-user-role-permission',
  imports: [BreadcrumbComponent, CommonModule,FormsModule],
  templateUrl: './user-role-permission.component.html',
  styleUrl: './user-role-permission.component.css'
})
export class UserRolePermissionComponent {
  ngAfterViewInit(): void {
    $('#dataTable').DataTable();
  }
  users = [
    {
      name: 'Kathryn Murphy',
      email: 'kathrynmurphy@gmail.com',
      status: 'Active',
      role: 'Manager',
      access: 'Full Access',
      location: 'Mikel Roads, Port Arnoldo, ID',
      img: 'assets/images/user-list/user-list1.png',
    },
    {
      name: 'Kathryn Murphy',
      email: 'kathryn.murphy@example.com',
      status: 'Active',
      role: 'Employee',
      access: 'Full Access',
      location: 'New York, USA',
      img: 'assets/images/user-list/user-list3.png',
    },
    {
      name: 'Devon Lane',
      email: 'devon.lane@example.com',
      status: 'Inactive',
      role: 'Admin',
      access: 'Hosts',
      location: 'Los Angeles, USA',
      img: 'assets/images/user-list/user-list2.png',
    },
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      status: 'Active',
      role: 'Employee',
      access: 'View Only',
      location: 'New York, USA',
      img: 'assets/images/user-list/user-list5.png',
    },
    {
      name: 'Cameron Williamson',
      email: 'cameron.williamson@example.com',
      status: 'Pending',
      role: 'Owner',
      access: 'Accounting',
      location: 'Chicago, USA',
      img: 'assets/images/user-list/user-list4.png',
    },
    
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      status: 'Active',
      role: 'Employee',
      access: 'View Only',
      location: 'New York, USA',
      img: 'assets/images/user-list/user-list7.png',
    },
    {
      name: 'Cameron Williamson',
      email: 'cameron.williamson@example.com',
      status: 'Pending',
      role: 'Owner',
      access: 'Accounting',
      location: 'Chicago, USA',
      img: 'assets/images/user-list/user-list6.png',
    },
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      status: 'Inactive',
      role: 'Admin',
      access: 'Hosts',
      location: 'Los Angeles, USA',
      img: 'assets/images/user-list/user-list5.png',
    },
  ];

  roles = ['Manager', 'Admin', 'Employee', 'Owner', 'Staff', 'Host', 'Analyst'];
  accessLevels = ['Full Access', 'Hosts', 'View Only', 'Accounting', 'Management'];
}
