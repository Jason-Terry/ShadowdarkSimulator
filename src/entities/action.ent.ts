import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, ValidateIf, validate } from 'class-validator';
import { BeforeCreate, BeforeUpdate, Entity, EntityRepository, Property } from '@mikro-orm/mongodb';
import { ACTION_TYPE, ATTRIBUTE, RANGE } from '../constants';
import { BaseEntity } from './base.ent';
import Joi, { object } from 'joi';

export class ActionRepository extends EntityRepository<Action> {}

@Entity()
export class Action extends BaseEntity {
  @IsNotEmpty()
  @IsString()
  @Property()
  type: ACTION_TYPE;

  @IsNotEmpty()
  @IsString()
  @Property()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Property()
  description: string;

  @IsNotEmpty()
  @IsString()
  @Property()
  damageDice: string;

  @IsEnum(RANGE)
  @IsNotEmpty()
  @Property()
  range: RANGE;

  @IsNotEmpty()
  @IsNumber()
  @Property()
  attackBonus?: number;

  @IsNotEmpty()
  @IsNumber()
  @Property()
  spellTier?: number;

  @IsNotEmpty()
  @IsBoolean()
  @Property()
  hasSave?: boolean;

  @ValidateIf(o => o.hasSave)
  @IsString()
  @Property()
  saveType?: ATTRIBUTE;

  @ValidateIf(o => o.hasSave)
  @IsNumber()
  @IsPositive()
  @Property()
  saveDC?: number;

  @BeforeCreate()
  @BeforeUpdate()
  async validate() {
    await validate(this);
  }

  constructor(
    type: ACTION_TYPE,
    name: string,
    description: string,
    damageDice: string,
    range: RANGE,
    attackBonus?: number,
    spellTier?: number,
    hasSave?: boolean,
    saveType?: ATTRIBUTE,
    saveDC?: number
  ) {
    super();
    this.type = type;
    this.name = name;
    this.description = description;
    this.damageDice = damageDice;
    this.range = range;
    this.attackBonus = attackBonus;
    this.spellTier = spellTier;
    this.hasSave = hasSave;
    this.saveType = saveType;
    this.saveDC = saveDC;
  }
}

// REQUEST SCHEMAS

export const ActionSchema = Joi.object({
  type: Joi.string()
    .valid(...Object.values(ACTION_TYPE))
    .required(),
  id: Joi.string().optional(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  damageDice: Joi.string().required(),
  range: Joi.string()
    .valid(...Object.values(RANGE))
    .required(),
  attackBonus: Joi.number()
    .when('type', { is: 'weaponAction', then: Joi.number().required() })
    .when('type', { is: 'spellAction', then: Joi.number().forbidden() }),
  spellTier: Joi.number()
    .when('type', { is: 'spellAction', then: Joi.number().required() })
    .when('type', { is: 'weaponAction', then: Joi.number().forbidden() }),
  hasSave: Joi.boolean()
    .when('type', { is: 'spellAction', then: Joi.boolean().required() })
    .when('type', { is: 'weaponAction', then: Joi.boolean().forbidden() }),
  saveType: Joi.string()
    .when('type', {
      is: 'spellAction',
      then: Joi.string()
        .valid(...Object.values(ATTRIBUTE))
        .required()
    })
    .when('hasSave', { is: true, then: Joi.string().required() })
    .when('hasSave', { is: false, then: Joi.string().forbidden() })
    .when('type', { is: 'weaponAction', then: Joi.string().forbidden() }),
  saveDC: Joi.number()
    .when('type', { is: 'spellAction', then: Joi.number().positive().required() })
    .when('hasSave', { is: true, then: Joi.number().required() })
    .when('hasSave', { is: false, then: Joi.number().forbidden() })
    .when('type', { is: 'weaponAction', then: Joi.number().forbidden() })
});
