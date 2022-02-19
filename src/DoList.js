import { useState } from "react";

function App() {
  const [toDO, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDO === "") {
      return;
    }
    setToDos(currentArray => [toDO, ...currentArray]);
    setToDo("");
    console.log(toDos);
  };
    return ( 
      <div>
        <h1>My To Dos({toDos.length})</h1>
        <form onSubmit={onSubmit}>
          <input 
            onChange={onChange}
            value={toDO} 
            type="text" 
            placeholder="Write your to do..."
          />
          <button>Add To Do</button>
        </form>
      </div>
    );
}

export default App; 