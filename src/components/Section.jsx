import React from 'react';

import TaskContainer from './TaskContainer';

const Section = ({ tasks, handleDelete }) => {
  return (
    <section>
      <TaskContainer tasks={tasks} handleDelete={handleDelete} />
    </section>
  );
};

export default Section;
