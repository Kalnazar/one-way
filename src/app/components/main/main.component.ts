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
  entryTitle: string[] = [
    'Посмотрите некоторые из наших работ за последние 3 месяца',
    'Мы имеем при себе уникальные качества, которые не имеют наши единомышленники',
    'На каждом этапе над проектом работает профессионал в своей области',
    'Мы создали для вас качественный бриф, чтобы вникнуть в процесс изготовки',
    'Вам понадобится наша услуга, если вы:',
    'Предлагаем вам специальное предложение перед началом работы',
  ];
}
