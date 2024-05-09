import { NextFunction, Request, Response } from 'express';
import { Logger } from '../utils/logger';

const createCreature = async (req: Request, res: Response, next: NextFunction) => {
  Logger.info('createCreature called.');
};

const readCreature = async (req: Request, res: Response, next: NextFunction) => {
  Logger.info('readCreature called.');
};

const readAll = async (req: Request, res: Response, next: NextFunction) => {
  Logger.info('readAll called.');
};

const updateCreature = async (req: Request, res: Response, next: NextFunction) => {
  Logger.info('updateCreature called.');
};

const deleteCreature = async (req: Request, res: Response, next: NextFunction) => {
  Logger.info('deleteCreature called.');
};

export default {
  createCreature,
  readCreature,
  readAll,
  updateCreature,
  deleteCreature
};
