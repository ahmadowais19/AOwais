// import Task1 from './components/task1'
// import Task2 from './components/task2'
// import Task3 from './components/task3'
// import Subsecond from './components/task4'
// import Names from './components/task5'
// import Task6 from './components/task6'
// import Task7 from './components/task7'
// import Task8 from './components/task8'
// import Task9 from './components/task9'

import Task1 from './components/day2/task1';
import Task2 from './components/day2/task2';
import Task3 from './components/day2/task3';
import Task4 from './components/day2/task4';
// import image from './components/imag.jpg';
import Task6 from './components/day2/task6';
import Task7 from './components/day2/task7';
import Task8 from'./components/day2/task8';
// import Task5 from './components/day2/task5';
// import Task9 from './components/day2/task9';
// import Task10 from './components/day2/task10';
// import Task11 from './components/day2/task11';




import'./style.css'



// function App() {
//   return (
//     <div className="App">
//         <div class ="trying">
//           {/* <Task1 />
//           <Task2 />
//           <Task3 />J
//           <Subsecond />
//           <Names/>
//           <Task6 />J
//           <Task7 />
//           <Task8 />
//           <Task9 /> */}
  


//           <Task8/>


//         </div>
//     </div>

//   );
// }

function App() {
  const Task7Click = () => {
    alert('Task7 button clicked!');
  };
  return (
    <div className="App"><hr />
     <Task1 name="Amro"  /><hr />
     export default Task2    <Task3  PN="labtob" price="$999" description="---" /><hr /> 
    <Task4  username="amro" email="amro@orange.com" age="27" /><hr />
    {/* <Task5  avatar={<img src= {image} alt="Amro" style={{ width: '100px', height: '100px',borderRadius:"30px"}}/>} */}
     {/* name="amro" email="amro@orange.com" /> <hr /> */}
     <Task6  hLink="Home" aLink="About" ctLink="Contant"/> <hr />
     <Task7 label="Click Me" onClick={Task7Click} /> <hr />
     
     <Task8/><hr />
     {/* <Task9 /><hr />
    <Task10 /><hr /> */}
    {/* <Task11 /><hr /> */}



    </div>
  );
}

export default App;

// export default App;
