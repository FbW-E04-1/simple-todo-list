import React, { useState, useRef, useEffect } from 'react';

import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [task, setTask] = useState({ id: 0, task: '', done: false });
  const [tasks, setTasks] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    task.task.length > 0 && setTasks([...tasks, task]);
    inputRef.current.focus();
    setTask({ id: 0, task: '', done: false });
  };

  const handleDelete = (toBeDeleted) => {
    setTasks(tasks.filter((item) => item.id !== toBeDeleted));
  };

  return (
    <main>
      <Header
        task={task}
        setTask={setTask}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
      />
      <Section tasks={tasks} handleDelete={handleDelete} />
      <Footer />
    </main>
  );
};

export default App;
