import { Component } from '@angular/core';
import { WorkComponent } from './work/work.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { TeamComponent } from './team/team.component';
import { BriefComponent } from './brief/brief.component';
import { TargetAudienceComponent } from './target-audience/target-audience.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    WorkComponent,
    AdvantagesComponent,
    TeamComponent,
    BriefComponent,
    TargetAudienceComponent,
    SpecialOfferComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  targetAudienceBg = 'assets/images/targetAudience-bg.png';
}
