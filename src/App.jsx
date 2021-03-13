import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const App=()=>{
  const [val,Setvalue]=useState(0);
  const Increment=()=>{
    Setvalue(val+1);
  }
  const Decrement=()=>{
    if(val-1>=0)
    Setvalue(val-1);
    else {
      alert("-ve value");
    }
  }
  return (
    <>
    <h1>{val}</h1>
    <Tooltip title="Increment">
    <Button onClick={Increment}><AddIcon/></Button>
    </Tooltip>
    <Tooltip title="Decrement">
    <Button onClick={Decrement}><DeleteIcon/></Button>
    </Tooltip>
    <CountdownCircleTimer
    isPlaying
    duration={100}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
    </>

  );
}
export default App;