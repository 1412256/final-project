import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../_service/alert.service';
import { AuthenticationService } from '../_service/authencication.service'

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {

                    this.router.navigate([this.returnUrl]);
                    window.location.reload();
                    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    if (currentUser.user.role == "manager") this.router.navigate(['/manager']);
                    if (currentUser.user.role == "admin") this.router.navigate(['/admin']);
                    if (currentUser.user.role == "viewer") this.router.navigate(['/menu']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}