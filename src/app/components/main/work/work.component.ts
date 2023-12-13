import { Component } from '@angular/core';
import { Project } from '../../../shared/models/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  projects: Project[] = [
    {
      logo: 'dark',
      url: 'assets/images/project-first.png',
    },
    {
      logo: 'dark',
      url: 'assets/images/project-second.png',
    },
    {
      logo: 'light',
      url: 'assets/images/project-third.png',
    },
    {
      logo: 'dark',
      url: 'assets/images/project-fourth.png',
    },
    {
      logo: 'dark',
      url: 'assets/images/project-fifth.png',
    },
  ];
}
