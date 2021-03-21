import { useState } from 'react';
import TodoTemplate from './todoTemplate.js';
import Form from './form.js';
import TodoItemList from './todoItemList';

function App() {

  return (
    <div className="App">
      <TodoTemplate form={<Form />}>
        <TodoItemList />
      </TodoTemplate>
    </div>

)
};

export default App;
