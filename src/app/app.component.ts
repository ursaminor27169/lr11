import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lr11';

  myArray = [ //массив датчиков
      {id: 1, name: 'Я первый', status: true},
      {id: 1, name: 'Я второй', status: false},
      {id: 1, name: 'Я третий', status: true},
      {id: 1, name: 'Я четвертый', status: true},
      {id: 1, name: 'Я пятый', status: true},
      {id: 1, name: 'Я шестой', status: true},
      {id: 1, name: 'Я седьмой', status: true},
      {id: 1, name: 'Я восьмой', status: true},
      {id: 1, name: 'Я девятый', status: true},
      {id: 1, name: 'Я десятый', status: true}
  ];

  ngOnInit() { //до инициализации страницы выставляем true или false
    for(let i = 0; i < this.myArray.length; i++) {
        this.myArray[i].status = Math.random() < 0.5; //выставляем true или false на рандоме
        this.myArray[i].id = i + 1;
    }
  }

  deleteItem(id) { //удаление датчика
    this.myArray.splice(id, 1);
    for(let i = 0; i < this.myArray.length; i++) { //переназначаем id
      this.myArray[i].id = i + 1;
  }
  }

  addItem(text) { //добавление датчика
    let item = {id: this.myArray.length + 1, name: text, status: Math.random() < 0.5}; //записываем новый элемент
    this.myArray.push(item);
  }
}
