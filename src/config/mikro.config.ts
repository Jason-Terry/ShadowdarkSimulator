import { defineConfig } from '@mikro-orm/mongodb';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';
import { Config } from './app.config';
import { BaseEntity } from '../entities/base.ent';
import { Action } from '../entities/action.ent';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

export default defineConfig({
  entities: [Action, BaseEntity],
  dbName: Config.mongo.dbName,
  clientUrl: Config.mongo.url,
  colors: true,
  metadataProvider: TsMorphMetadataProvider,
  highlighter: new MongoHighlighter(),
  debug: true,
});