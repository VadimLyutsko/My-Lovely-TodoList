import React, {FC} from 'react';
import './App.css';
import {Todolist} from './Todolist';

const App: FC = () => {

    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},//el
        {id: 2, title: "JS", isDone: true},//el
        {id: 3, title: "ReactJS", isDone: false},//el
        {id: 4, title: "ReactJS", isDone: false}//el
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="Songs" tasks={tasks2}/>
        </div>
    );
}

export default App;
