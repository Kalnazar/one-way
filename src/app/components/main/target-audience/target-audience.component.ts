import { Component } from '@angular/core';
import { Audience } from '../../../shared/models/audience';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-target-audience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './target-audience.component.html',
  styleUrl: './target-audience.component.scss',
})
export class TargetAudienceComponent {
  targetAudience: Audience[] = [
    {
      imageUrl: 'assets/images/info-producer.png',
      description: 'Инфо-продюсер, который помогает запускать онлайн-курсы',
    },
    {
      imageUrl: 'assets/images/briefcase.png',
      description:
        'Бизнесмен, у которого есть свой бизнес, но нужен собственный сайт',
    },
    {
      imageUrl: 'assets/images/laptop.png',
      description:
        'Инфо-Бизнесмен, который запускает онлайн-курсы для своей аудитории',
    },
  ];
}
