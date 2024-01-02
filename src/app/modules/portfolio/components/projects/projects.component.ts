import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/projects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public arrayProjects = signal<IProjects[]>([
    {
      src: "assets/imgs/logo.png",
      alt: "Projeto BRH1 Test Engineering Portal",
      title: "BRH1 Test Engineering Portal",
      width: "100px",
      height: "90px",
      description: "Descrição do projeto",
      links: [
        {
          name: "",
          href: ""
        }
      ]
    }
  ]);
}
