import { Logger } from './utils/logger';
import { Config } from './config/app.config';
import { EntityManager, EntityRepository, MikroORM } from '@mikro-orm/mongodb';
import App from './server';
import 'reflect-metadata';
import { Action } from './entities/action.ent';

// Initialize the ORM
export const DI = {} as {
  orm: MikroORM;
  em: EntityManager;
  actionRepo: EntityRepository<Action>;
};

export const Mikro = await MikroORM.init()
  .then(orm => {
    DI.orm = orm;
    DI.em = DI.orm.em;
    DI.actionRepo = DI.orm.em.getRepository(Action);

    Logger.info('Connected to the database');
    let port = Config.server.port;
    App.listen(port, () => {
      Logger.info(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error: any) => {
    Logger.error(`Could not start server: ${error.message}`);
  });

// Start the server
