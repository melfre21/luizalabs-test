import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrarBtnLogout: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn){
      this.mostrarBtnLogout = true;
    }

    this.authService.btnLogoutEmitter.subscribe(
      (mostrar: any) => {
        this.mostrarBtnLogout = mostrar;
      }
    );
  }

}
