import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/experiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Test Engineering Intern",
        p: "Dell Technologies | July 2021 - November 2021",
      },
      text: "<p>Descrição do cargo aqui</p>"
    },
    {
      summary: {
        strong: "Quality Control Specialist",
        p: "Dell Technologies | November 2021 - Present",
      },
      text: "<p>Descrição do cargo aqui</p>"
    },
  ]);
}
