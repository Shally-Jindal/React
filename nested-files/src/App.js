import logo from './logo.svg';
import './App.css';
import FileSystem from './component/NestedFiles';

function App() {
  const fileSystem = {
    name: "Root",
    type: "folder",
    children: [
      {
        name: "Folder 1",
        type: "folder",
        children: [
          { name: "File 1-1", type: "file" },
          { name: "File 1-2", type: "file" },
        ],
      },
      {
        name: "Folder 2",
        type: "folder",
        children: [
          {
            name: "Subfolder 2-1",
            type: "folder",
            children: [{ name: "File 2-1-1", type: "file" }],
          },
        ],
      },
      { name: "File 3", type: "file" },
    ],
  };
  return (
    <div>
      <FileSystem data={fileSystem} />
    </div>
  );
}

export default App;
