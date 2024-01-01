import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<Iknowledge[]>([
    {
      src: 'assets/icons/html.svg',
      alt: 'Ícone do HTML5'
    },
    {
      src: 'assets/icons/database.svg',
      alt: 'Ícone símbolo de um banco de dados'
    },
    {
      src: 'assets/icons/js.svg',
      alt: 'Ícone do Javascript'
    },
    {
      src: 'assets/icons/microsoft.svg',
      alt: 'Ícone do logo da Microsoft'
    },
    {
      src: 'assets/icons/python.svg',
      alt: 'Ícone do Python'
    }
  ])
}
