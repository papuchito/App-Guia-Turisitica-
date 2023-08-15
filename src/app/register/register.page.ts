import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Registro completado',
      message: '¡Registro completado exitosamente!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Aquí puedes redirigir al usuario a la página home
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }
}