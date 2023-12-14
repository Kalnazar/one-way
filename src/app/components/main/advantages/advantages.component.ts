import { Component } from '@angular/core';
import { Advantage } from '../../../shared/models/advantage';
import { CommonModule } from '@angular/common';
import { EntryComponent } from '../entry/entry.component';

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [CommonModule, EntryComponent],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss',
})
export class AdvantagesComponent {
  title =
    'Мы имеем при себе уникальные качества, которые не имеют наши единомышленники';
  advantages: Advantage[] = [
    {
      title: 'МЫ ГАРАНТИРУЕМ ШТРАФ',
      statement: 'За срыв сроков в размере <br/> 3 000 тг/день',
      result:
        'Тем самым обеспечиваем вам нашу пунктуальность и вовремя закрытые дедлайны',
      imageUrl: 'assets/images/advantage-1.png',
    },
    {
      title: 'БЕСКОНЕЧНЫЕ ПРАВКИ',
      statement: 'Глубоко погружаемся <br/> в ваш проект',
      result:
        'Тем самым обеспечиваем вам нашу пунктуальность и вовремя закрытые дедлайны',
      imageUrl: 'assets/images/advantage-2.png',
    },
    {
      title: 'ЭКСПЕРТНЫЙ БЛОГ',
      statement: 'Ведем блог в инстаграмме, <br/> показывая свою экспертность',
      result:
        'В результате, вы можете наблюдать за нашим и вашим прогрессом разработки сайта',
      imageUrl: 'assets/images/advantage-3.png',
    },
  ];
}
