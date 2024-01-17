import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/projects.interface';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

// Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

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
          name: "Conheça o Portal",
          href: ""
        }
      ]
    }
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
