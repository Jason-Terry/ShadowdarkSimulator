import { NextFunction, Request, Response } from 'express';
import { Logger } from '../utils/logger';
import { DI } from '../main';
import { RequestContext } from '@mikro-orm/core';
import { Action } from '../entities/action.ent';

const createAction = async (req: Request, res: Response, next: NextFunction) => {
  Logger.info('createAction called.');
  let action = DI.actionRepo.create(req.body);
  RequestContext.getEntityManager()?.persistAndFlush(action);
  Logger.info(`Action created: ${action} | id: ${action._id}`);
  console.log(action);
  return res.status(201).json({ message: 'Action created', action: action });
};

const readAction = async (req: Request, res: Response, next: NextFunction) => {
  Logger.info('readAction called.');
};

const readAllActions = async (req: Request, res: Response, next: NextFunction) => {
  Logger.info('readAllActions called.');
  RequestContext.getEntityManager()
    ?.findAndCount(Action, {})
    .then(([actions, count]) => {
      return res.status(200).json({ message: 'Actions retrieved', actions: actions, count: count });
    })
    .catch(error => {
      return res.status(404).json({ message: 'No actions found', error: error });
    });
};

const updateAction = async (req: Request, res: Response, next: NextFunction) => {
  Logger.info('updateAction called.');
};

const deleteAction = async (req: Request, res: Response, next: NextFunction) => {
  Logger.info('deleteAction called.');
  Logger.info(`Deleting action with id: ${req.params.id}`);
  RequestContext.getEntityManager()
    ?.findOne(Action, { _id: req.params.id })
    .then(action => {
      if (!action) {
        return res.status(404).json({ message: 'Action not found' });
      }
      RequestContext.getEntityManager()
        ?.removeAndFlush(action)
        .then(() => {
          Logger.info(`Action deleted: ${action} | id: ${action?._id}`);
          return res.status(204).json({ message: 'Action deleted' });
        });
    });
};

export default {
  createAction,
  readAction,
  readAllActions,
  updateAction,
  deleteAction
};
