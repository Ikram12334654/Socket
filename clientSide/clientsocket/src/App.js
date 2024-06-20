import { useEffect } from 'react';
import './App.css';
import { io } from 'socket.io-client'

const socket = io('http://localhost:3001')
function App() {
  useEffect(() => {
    socket.on('connect', () => {

      socket.on('welcome', (data) => {
        console.log('this is th data', data);
      })
      socket.emit('msg', 'thankyou for connecting');
    });

    return()=> {
      socket.off('connect')
    }
     
    
  }, [])


  return (
    <div className='container'> this is the first app</div>
  );
}

export default App;
