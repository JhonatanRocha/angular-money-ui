import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  categorias = [
    { label: 'Selecione', value: null },
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 }
  ];

  pessoas = [
    { label: 'Selecione', value: null },
    { label: 'Kobe Bryant', value: 1 },
    { label: 'Tim Duncan', value: 2 },
    { label: 'Kevin Garnnet', value: 3 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
