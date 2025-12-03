import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Reserva {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  fecha: string;
  hora: string;
  personas: number;
  notas?: string;
}

interface HorarioDisponible {
  hora: string;
  disponible: boolean;
}

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservas.html',
  styleUrls: ['./reservas.scss']
})
export class Reservas implements OnInit {
  // Mes y año actual
  mesActual: Date = new Date();
  diasDelMes: Date[] = [];
  nombresMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                   'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  nombresDias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  
  // Formulario
  fechaSeleccionada: Date | null = null;
  horaSeleccionada: string = '';
  nombreCliente: string = '';
  emailCliente: string = '';
  telefonoCliente: string = '';
  numeroPersonas: number = 2;
  notasReserva: string = '';
  
  // Horarios disponibles (12:00 a 23:00)
  horariosDisponibles: HorarioDisponible[] = [];
  
  // Reservas guardadas
  reservas: Reserva[] = [];
  
  // Vista
  mostrarFormulario: boolean = false;
  reservaExitosa: boolean = false;

  ngOnInit() {
    this.generarCalendario();
    this.generarHorarios();
    this.cargarReservas();
  }

  generarCalendario() {
    const year = this.mesActual.getFullYear();
    const month = this.mesActual.getMonth();
    
    // Primer día del mes
    const primerDia = new Date(year, month, 1);
    const ultimoDia = new Date(year, month + 1, 0);
    
    // Días del mes anterior para completar semana
    const diasAnteriores = primerDia.getDay();
    const diasMes = ultimoDia.getDate();
    
    this.diasDelMes = [];
    
    // Agregar días del mes anterior
    for (let i = diasAnteriores - 1; i >= 0; i--) {
      const fecha = new Date(year, month, -i);
      this.diasDelMes.push(fecha);
    }
    
    // Agregar días del mes actual
    for (let i = 1; i <= diasMes; i++) {
      const fecha = new Date(year, month, i);
      this.diasDelMes.push(fecha);
    }
    
    // Completar con días del siguiente mes
    const diasRestantes = 42 - this.diasDelMes.length;
    for (let i = 1; i <= diasRestantes; i++) {
      const fecha = new Date(year, month + 1, i);
      this.diasDelMes.push(fecha);
    }
  }

  generarHorarios() {
    this.horariosDisponibles = [];
    for (let hora = 12; hora <= 23; hora++) {
      this.horariosDisponibles.push({
        hora: `${hora.toString().padStart(2, '0')}:00`,
        disponible: true
      });
      if (hora < 23) {
        this.horariosDisponibles.push({
          hora: `${hora.toString().padStart(2, '0')}:30`,
          disponible: true
        });
      }
    }
  }

  mesAnterior() {
    this.mesActual = new Date(this.mesActual.getFullYear(), this.mesActual.getMonth() - 1, 1);
    this.generarCalendario();
  }

  mesSiguiente() {
    this.mesActual = new Date(this.mesActual.getFullYear(), this.mesActual.getMonth() + 1, 1);
    this.generarCalendario();
  }

  seleccionarDia(fecha: Date) {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    if (fecha >= hoy && fecha.getMonth() === this.mesActual.getMonth()) {
      this.fechaSeleccionada = fecha;
      this.mostrarFormulario = true;
      this.reservaExitosa = false;
      this.actualizarDisponibilidad();
    }
  }

  actualizarDisponibilidad() {
    if (!this.fechaSeleccionada) return;
    
    const fechaStr = this.fechaSeleccionada.toISOString().split('T')[0];
    const reservasDelDia = this.reservas.filter(r => r.fecha === fechaStr);
    
    this.horariosDisponibles.forEach(horario => {
      horario.disponible = !reservasDelDia.some(r => r.hora === horario.hora);
    });
  }

  esDiaActual(fecha: Date): boolean {
    const hoy = new Date();
    return fecha.getDate() === hoy.getDate() &&
           fecha.getMonth() === hoy.getMonth() &&
           fecha.getFullYear() === hoy.getFullYear();
  }

  esFechaSeleccionada(fecha: Date): boolean {
    if (!this.fechaSeleccionada) return false;
    return fecha.getDate() === this.fechaSeleccionada.getDate() &&
           fecha.getMonth() === this.fechaSeleccionada.getMonth() &&
           fecha.getFullYear() === this.fechaSeleccionada.getFullYear();
  }

  esMesActual(fecha: Date): boolean {
    return fecha.getMonth() === this.mesActual.getMonth();
  }

  esFechaPasada(fecha: Date): boolean {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return fecha < hoy;
  }

  tieneReservas(fecha: Date): boolean {
    const fechaStr = fecha.toISOString().split('T')[0];
    return this.reservas.some(r => r.fecha === fechaStr);
  }

  realizarReserva() {
    if (!this.fechaSeleccionada || !this.horaSeleccionada || !this.nombreCliente || !this.emailCliente) {
      alert('Por favor, completa todos los campos obligatorios');
      return;
    }

    const nuevaReserva: Reserva = {
      id: Date.now().toString(),
      nombre: this.nombreCliente,
      email: this.emailCliente,
      telefono: this.telefonoCliente,
      fecha: this.fechaSeleccionada.toISOString().split('T')[0],
      hora: this.horaSeleccionada,
      personas: this.numeroPersonas,
      notas: this.notasReserva
    };

    this.reservas.push(nuevaReserva);
    this.guardarReservas();
    
    this.reservaExitosa = true;
    this.limpiarFormulario();
    
    setTimeout(() => {
      this.reservaExitosa = false;
      this.mostrarFormulario = false;
    }, 3000);
  }

  limpiarFormulario() {
    this.nombreCliente = '';
    this.emailCliente = '';
    this.telefonoCliente = '';
    this.numeroPersonas = 2;
    this.notasReserva = '';
    this.horaSeleccionada = '';
  }

  cancelarReserva() {
    this.mostrarFormulario = false;
    this.limpiarFormulario();
  }

  guardarReservas() {
    localStorage.setItem('reservas_restaurante', JSON.stringify(this.reservas));
  }

  cargarReservas() {
    const reservasGuardadas = localStorage.getItem('reservas_restaurante');
    if (reservasGuardadas) {
      this.reservas = JSON.parse(reservasGuardadas);
    }
  }

  getReservasDelDia(): Reserva[] {
    if (!this.fechaSeleccionada) return [];
    const fechaStr = this.fechaSeleccionada.toISOString().split('T')[0];
    return this.reservas.filter(r => r.fecha === fechaStr);
  }
}
