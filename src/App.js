import db  from "./connectDB";
import {collection, getDocs} from 'firebase/firestore/lite'
function App() {
  async function getTasks(db) {
    const tasksCol = collection(db, 'task');
    const snapshot = await getDocs(tasksCol);
    const taskList = snapshot.docs.map(doc => doc.data());
    return taskList;
  }
    getTasks().then(r => console.log(r) )
  return (
    <div className="App">

    </div>
  );
}

export default App;
