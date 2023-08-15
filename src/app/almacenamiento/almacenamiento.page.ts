import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-almacenamiento',
  templateUrl: 'almacenamiento.page.html',
  styleUrls: ['almacenamiento.page.scss'],
})
export class AlmacenamientoPage {

  constructor(private alertController: AlertController) {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Lugar Guardado Correctamente.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
