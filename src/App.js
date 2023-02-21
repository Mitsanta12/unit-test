import './App.css';
import { useState } from "react";
import { List } from './List';
import { Input } from './Input';

function App() {
    let [todo, setTodo] = useState([]);
    let [done, setDone] = useState([]);
    let [newItem, setNewItem] = useState(null);

    const onChange = event => setNewItem(event.target.value);
    const onKeyUp = event => {
        const { code } = event;
        if (code !== 'Enter') {
            return;
        }
        setTodo(prevState => {
            if (prevState.includes(newItem)) {
                return [...prevState];
            }
            return [...prevState, newItem];
        })
        console.log(todo, newItem);
    };

    return (
        <div className="App" id='on-todo'>
            <List
                items={todo}
                checkable
                onCheck={(event, currentItem, i) => {
                    if (!event.target.checked) {
                        return;
                    }
                    setTodo(prevState => [...prevState].filter((_, j) => i !== j));
                    setDone(prevState => [...prevState, currentItem]);
                }}
            >
                <Input onChange={onChange} onKeyUp={onKeyUp} />
            </List>
            <List items={done} />
        </div>
    );
}

export default App;