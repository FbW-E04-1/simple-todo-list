import React from 'react';

import { MdDelete } from 'react-icons/md';

const Task = ({ task, handleDelete }) => {
  return (
    <div className='task-container'>
      <div className='task'>
        <p>{task.task}</p>
      </div>
      <div className='bin'>
        <MdDelete
          style={{ fontSize: '22px' }}
          onClick={() => handleDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
