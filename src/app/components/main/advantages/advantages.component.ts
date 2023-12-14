import { Component } from '@angular/core';
import { Advantage } from '../../../shared/models/advantage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss',
})
export class AdvantagesComponent {
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
