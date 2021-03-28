import styled from 'styled-components';
import Item from './templateItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return <TodoListBlock>
            <Item text="ㅇㅇ" done={true} />
            <Item text="ㅇㅇ2" done={true} />
            <Item text="ㅇㅇ3" done={false} />
            <Item text="ㅇㅇ4" done={false} />
            <Item text="ㅇㅇ5" done={false} />
            <Item text="ㅇㅇ6" done={false} />
         </TodoListBlock>;
}

export default TodoList;