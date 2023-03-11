import db  from "./connectDB";
import {collection, getDocs} from 'firebase/firestore'
import { useEffect, useState } from "react";

function App() {

  const [task, setTask] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksCol = collection(db, 'task');
      const snapshot = await getDocs(tasksCol);
      const taskList = snapshot.docs.map(doc => doc.data());
      return taskList;
    }
    getTasks()
  })
  return (
      <div className="App">
        <ul>
          {task.map(task => (
              <li>
                key={task.title}>{task.title}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;

