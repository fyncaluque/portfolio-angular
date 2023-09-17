import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from 'src/app/particles-config';

declare let particlesJS: any;

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss'],
})
export class ParticlesComponent implements OnInit {
  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }
}
