import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MemberdetailsComponent } from './memberdetails/memberdetails.component';
import { LayoutComponent } from './layout/layout.component';
import { ClaimsubmissionComponent } from './claimsubmission/claimsubmission.component';


const routes: Routes = [
 
  {
    path: 'userprofile',
    component: MemberdetailsComponent,
  },
  {
    path: 'claimsubmission',
    component: ClaimsubmissionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
