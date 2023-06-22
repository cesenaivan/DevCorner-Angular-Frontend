
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  abrirVentanaEmergente() {
    const ventanaEmergente = window.open('', 'Ventana de mensaje', 'width=400,height=300,modal=yes');
  
    if (ventanaEmergente) {
      ventanaEmergente.document.write(`
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Enviar mensaje</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="mensaje">Mensaje</label>
                  <textarea class="form-control" id="mensaje" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" id="enviarBtn">Enviar</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      `);
  
      ventanaEmergente.document.head.innerHTML = `
        <style>
          .modal-dialog {
            width: 400px;
            height: 300px;
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 5px;
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            color: white;
          }
  
          .modal-title {
            margin-top: 0;
          }
  
          .modal-body {
            padding: 20px;
          }
  
          .form-control {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            resize: none;
          }
  
          .modal-footer {
            padding: 10px;
            display: flex;
            justify-content: flex-end;
          }
  
          .btn-primary,
          .btn-secondary {
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
          }
  
          .btn-primary {
            background-color: #007bff;
            color: white;
            margin-right: 10px;
          }
  
          .btn-secondary {
            background-color: #6c757d;
            color: white;
          }
        </style>
      `;

      ventanaEmergente.onload = () => {
        ventanaEmergente.document.getElementById('enviarBtn')?.addEventListener('click', () => {
          const mensajeElement = ventanaEmergente.document.getElementById('mensaje') as HTMLTextAreaElement;
          const mensaje = mensajeElement.value;
          window.postMessage(mensaje, '*');
          ventanaEmergente.close();
        });
      };
    } else {
      console.log('No se pudo abrir la ventana emergente');
    }
  }
}































/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  abrirVentanaEmergente() {
    const ventanaEmergente = window.open('', 'Ventana de mensaje', 'width=400,height=300');
  
    if (ventanaEmergente) {
      ventanaEmergente.document.write(`
        <h2>Enviar mensaje</h2>
        <form>
          <textarea id="mensaje" rows="4" cols="40" placeholder="Escribe tu mensaje aquí"></textarea>
          <br>
          <button type="button" onclick="ventanaEmergente.enviarMensaje()">Enviar</button>
        </form>
      `);
  
      (ventanaEmergente as any).enviarMensaje = () => {
        const mensajeElement = ventanaEmergente.document.getElementById('mensaje') as HTMLTextAreaElement;
        const mensaje = mensajeElement.value;
        window.postMessage(mensaje, '*');
        ventanaEmergente.close();
      };
    } else {
      console.log('No se pudo abrir la ventana emergente');
    }
  }
  
  
}*/
