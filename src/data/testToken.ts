import jwt from 'jsonwebtoken';
import {expressjwt} from 'express-jwt';
import { Request, Response,NextFunction } from 'express';

const JWT_SECRET = 'my-secret-key';

export function createToken(payload: any) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

export function verifyToken() {
  return expressjwt({ secret: JWT_SECRET, algorithms: ['HS256'] })
}

export function errorHandler(err: any, req: Request, res: Response,next: NextFunction) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'Invalid token' });
  }
  next();
}