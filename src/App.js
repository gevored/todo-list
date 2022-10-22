import { DashBoard } from './components/DashBoard/DashBoard';
import {Header} from './components/Header/index'
import { TaskField } from './components/TaskField';
import {DashBoardContext} from './context/contextDasBoard'

function App() {
  return (
    
      <div className='container'>

      <DashBoardContext>
          <Header/>
          <TaskField/>
          < DashBoard/>
      </DashBoardContext>
      </div>
    
  );
}

export default App;
