import React, {FC} from 'react';
import './Hello.pcss';
import {proxy, useSnapshot} from 'valtio';

class Store {
  user: string = 'AAA';

  // Will work in `function` style, since the `this` will be the proxied object
  changeNameWork(value: string) {
    this.user = value
  };

  // Will NOT work in `array` style, since the `this` will be the original un-proxied object
  changeNameNotWork = (value: string) => {
    this.user = value
  };
}

const store = proxy<Store>(new Store());

export const Hello: FC = () => {
  const {user} = useSnapshot(store);
  const {changeNameWork} = store;

  return <div className={'Hello'}>
    <h1>Hello {user}</h1>
    <ul>
      <li>Work: <input type={'text'} value={user} onChange={(event) => store.changeNameWork(event.target.value)}/></li>
      <li>Not work: <input type={'text'} value={user} onChange={(event) => changeNameWork(event.target.value)}/></li>
      <li>Not work: <input type={'text'} value={user}
                           onChange={(event) => store.changeNameNotWork(event.target.value)}/>
      </li>
    </ul>
  </div>;
}
