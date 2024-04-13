import React, { useState } from 'react';
import './wk2_m1.css';

function wk2_m1() {
    const [toDo, setToDo] = useState('');
    const [toDoList, setToDoList] = useState([]);
    const [doneList, setDoneList] = useState([]);

    const handleAddTask = (e) => {  // e 는 이벤트 객체
        e.preventDefault();
        if (!toDo) return;
        const newTask = { id: Date.now(), text: toDo };
        setToDoList([...toDoList, newTask]);
        setToDo('');
    };

    const handleCompleteTask = (taskId) => {
        const task = toDoList.find(task => task.id === taskId);
        setToDoList(toDoList.filter(task => task.id !== taskId));
        setDoneList([...doneList, task]);
    };

    const handleRemoveTask = (taskId) => {
        setDoneList(doneList.filter(task => task.id !== taskId));
    };

    return (
        <div>
            <h1>UMC Study Plan</h1>
            <hr />
            <form id="toDoForm" onSubmit={handleAddTask}>
                <input
                    type="text"
                    id="toDo"
                    value={toDo}
                    onChange={(e) => setToDo(e.target.value)}
                />
            </form>
            <div className="list">
                <p>해야 할 일</p>
                <div id="toDoList">
                    {toDoList.map(task => (
                        <div key={task.id}>
                            <span>{task.text}</span>
                            <button onClick={() => handleCompleteTask(task.id)}>완료</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="list">
                <p>해낸 일</p>
                <div id="done">
                    {doneList.map(task => (
                        <div key={task.id}>
                            <span>{task.text}</span>
                            <button onClick={() => handleRemoveTask(task.id)}>삭제</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default wk2_m1;