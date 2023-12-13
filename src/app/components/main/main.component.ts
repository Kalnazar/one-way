import { Component } from '@angular/core';
import { WorkComponent } from './work/work.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { EntryComponent } from './entry/entry.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [EntryComponent, WorkComponent, AdvantagesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  entryTitle = {
    projects: 'Посмотрите некоторые из наших работ за последние 3 месяца',
    advantages:
      'Мы имеем при себе уникальные качества, которые не имеют наши единомышленники',
    team: 'На каждом этапе над проектом работает профессионал в своей области',
    brief:
      'Мы создали для вас качественный бриф, чтобы вникнуть в процесс изготовки',
    specialization: 'Вам понадобится наша услуга, если вы:',
    offer: 'Предлагаем вам специальное предложение перед началом работы',
  };
}
