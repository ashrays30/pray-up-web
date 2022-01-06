import { Routes , Route } from 'react-router-dom'
import './App.css';
import Login from './screens/Login'
import Chat from './screens/Chat'
import ChatList from './screens/ChatListScreen';
import UserData from './screens/UserData';
import UserGroup from './screens/UserGroup';
import ChatGroup from './screens/ChatGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import fireApp from './fire'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Login />}/>
      <Route path='/chatList' element={<ChatList />}/>
      <Route path='/chat' element={<Chat />}/>
      <Route path='/users' element={<UserData />}/>
      <Route path='/userGroup' element={<UserGroup />}/>
      <Route path='/chatGroup' element={<ChatGroup />}/>
    </Routes>
  );
}

export default App;
