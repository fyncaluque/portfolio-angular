import { Component, ElementRef, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router, private el: ElementRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Recalcula la posición de desplazamiento cuando cambia el tamaño de la ventana
    this.scrollToTarget();
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Espera un breve período para asegurarte de que el DOM se haya actualizado
        setTimeout(() => {
          this.scrollToTarget();
        }, 100);
      }
    });
  }

  scrollToTarget() {
    const targetId = this.router.url.slice(1);
    const element = document.querySelector('#' + targetId);

    if (element) {
      const scrollToPosition =
        element.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
  }
}
