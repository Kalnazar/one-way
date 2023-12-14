import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class EntryComponent implements OnInit {
  @Input() title: string = '';
  @Input() isBgGray: boolean | null = false;
  rectangles = new Array(3).fill({ isVisible: false });

  ngOnInit(): void {
    this.checkVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    const elements = document.querySelectorAll('.entry__rectangles .rectangle');
    let delay = 0;
    const delayIncrement = 1000;
    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        // this.rectangles[index].isVisible = true;
      }
    });
  }
}
