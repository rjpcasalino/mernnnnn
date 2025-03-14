import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import {Box, Button} from '@primer/react'

function TaskItem({ name, isDone }) {
  return (
    <p className="item">
      {name} {isDone ? <FontAwesomeIcon icon={faCheck} /> : '❌'}
    </p>
  );
}

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask
}) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
            });
          }} />
        <Button onClick={() => setIsEditing(false)}>
          Save
        </Button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <Button onClick={() => setIsEditing(true)}>
          Edit
        </Button>
      </>
    );
  }
  return (
    <div>
          <Box sx={{
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'border.default',
      p: 3,
    }}
    >
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      <Button onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </label>
    <TaskItem isDone={task.done} name={taskContent}/>
    </Box>
    </div>
  );
}
