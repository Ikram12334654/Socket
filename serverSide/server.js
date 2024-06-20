import { Server } from "socket.io";
import {createServer} from 'http';
const httpserver=createServer()
const io=new Server(httpserver,{
    cors:{
        origin:'*',
    }
});
io.on('connection',(socket)=>{

   socket.emit('welcome','welcom to the app');

   socket.on('msg',(data)=>{
     console.log('message from the client: ', data)
   })
})
httpserver.listen(3001,()=>{
    console.log('listing to the port')
})