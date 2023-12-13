import { Component } from '@angular/core';
import { Team } from '../../../shared/models/team';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  teamImageUrl = 'assets/images/team.png';
  team: Team = {
    Biba: {
      fullName: 'Бейбарыс Усенов',
      expertness: 'Маркетолог',
    },
    Dias: {
      fullName: 'Диас Нурбергенов',
      expertness: 'Дизайнер',
    },
    Soska: {
      fullName: 'Саят Калназар',
      expertness: 'Разработчик',
    },
  };
}
