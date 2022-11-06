import {useEffect, useState} from 'react';
import axios from 'axios';

const URL = 'http://localhost:3001';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((res) => {
        setTasks(res.data);
      })
      .catch(err => {
        console.log(err.response.data.error);
      });
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ol>
        {tasks.map(task => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
