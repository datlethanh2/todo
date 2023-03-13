import * as jsonServer from 'json-server';
import * as path from 'path';
import { Request, Response,NextFunction  } from 'express';
import { createToken,verifyToken,errorHandler} from './testToken';
import { OAuth2Client } from 'google-auth-library';


interface User {
  id: number;
  username: string;
  password: string;
  token: string;
}


const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'user.json'));
const todo = jsonServer.router(path.join(__dirname, 'todo.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(
  verifyToken().unless({
    path: [
      '/user/postLogin',
      '/user/postGoogle',
    ]
  })
);

server.use(errorHandler);

server.delete('/todos/deleteAll', (req: Request, res: Response) => {
  router.db.set('todos', []).write();
  res.sendStatus(200);
});
server.post('/todos/postTodo', (req: Request, res: Response) => {
  if(todo.db.has(req.body.time).value()){
    const list:any=todo.db.get(req.body.time)
    res.status(200).jsonp(list.get('todos'))
  }else{
    res.status(200).jsonp([]);
  }
  
});
server.post('/todos/postSave', (req: Request, res: Response) => {
  todo.db.set(req.body.time,{"todos":req.body.todo, "progress":req.body.progress}).write();
  res.sendStatus(200);
});

server.post('/user/postLogin', (req: Request, res: Response) => {
  const users: User[] = router.db.get('users');
  const { username, password } = req.body;
  const matchedUser:any=users.find(user => user.username === username && user.password === password)

  if (matchedUser) {
    const token = createToken({ 
      username: matchedUser.value().username,
      email: matchedUser.value().email,
    });
    res.jsonp(token);
  } else {
    res.status(401).jsonp({ error: 'Incorrect username or password' });
  }
});
server.post('/user/postGoogle', (req: Request, res: Response) => {
  const users: User[] = router.db.get('users');
  const matchedUser:any=users.find((user:any) => user.email === req.body.email)
  if (matchedUser) {
    const token = createToken({ 
      username: matchedUser.value().username,
      email: matchedUser.value().email,
    });
    res.jsonp(token);
  } else {
    res.status(401).jsonp({ error: 'Incorrect username or password' });
  }
});


const PORT = process.env.PORT || 3001;
server.use(router);
server.listen(PORT, () => {
  console.log('JSON Server is running');
});