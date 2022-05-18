import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  name = 'anhntv';
  class = 'we16301';
  msv = 'PH13707';
  students = [
    {
      name: 'anhntv',
      id: 'Ph13707',
      status: 0
    },
    {
      name: 'anhntv1',
      id: 'Ph13333',
      status: 1
    },
    {
      name: 'anhntv2',
      id: 'Ph13334',
      status: 1
    }
  ];
  champs = [
    {
      name: 'lucian',
      dame: 400,
      defend: 200,
      speed: 100,
      price: 6300,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYOvZ9OuvxESKwUduqe9UKIJkWOi7z9X9Pqr7tKAyNZBYwrMWNujxWUDRrrO7bGhadFnc&usqp=CAU'
    },
    {
      name: 'jax',
      dame: 600,
      defend: 200,
      speed: 100,
      price: 3000,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0MnCUN8lJW8nj0M_6CMi0amtWRISSf5ijmwvWQJnDjdzvDgzFIn1d9K2HJ8WOkaUCdVg&usqp=CAU'
    },
    {
      name: 'lucian',
      dame: 400,
      defend: 200,
      speed: 100,
      price: 6300,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYOvZ9OuvxESKwUduqe9UKIJkWOi7z9X9Pqr7tKAyNZBYwrMWNujxWUDRrrO7bGhadFnc&usqp=CAU'
    }
  ];
  showStatus = true;
  onClickBtn() {
    console.log("Btn clicked!");
    this.showStatus = !this.showStatus;
  }

  inputValue = {
    name: '',
    dame: '',
    defend: '',
    speed: '',
    price: '',
    avatar: ''
  };
  onInput(event: any, key: 'name' | 'dame' | 'defend' | 'speed' | 'price' | 'avatar') {
    this.inputValue[key] = event.target.value;

  }
  // inputName = '';
  // onInputName(event:any){
  //   this.inputValue.name = event.target.value;
  // }
  // inputAvatar = '';
  // onInputAvatar(event: any){
  //   this.inputValue.avatar = event.target.value;
  // }
  onSubmit() {
    console.log('Giá trị obj các ô input', this.inputValue);
    this.champs.push({
      ...this.inputValue,
      dame: +this.inputValue.dame,
      defend: +this.inputValue.defend,
      speed: +this.inputValue.speed,
      price: +this.inputValue.price,
    });
    this.inputValue = {
      name: '',
      dame: '',
      defend: '',
      speed: '',
      price: '',
      avatar: ''
    }
  }
}
