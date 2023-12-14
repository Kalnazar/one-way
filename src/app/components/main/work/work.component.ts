import { Component } from '@angular/core';
import { Project } from '../../../shared/models/project';
import { CommonModule } from '@angular/common';
import { EntryComponent } from '../entry/entry.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, EntryComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  title = 'Посмотрите некоторые из наших работ за последние 3 месяца';
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
