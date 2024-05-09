import request from 'supertest'; // supertest is a framework that allows to easily test web apis
import server from '../../src/server';
import { ACTION_TYPE } from '../../src/constants';

describe('Action Controller', () => {
  const app = server;
  let testActionIds: any[] = [];

  describe('Create', () => {
    it('Calling without body returns 400 bad request.', async () => {
      let response = await request(app).post('/api/v1/action');
      expect(response.status).toBe(400);
    });

    it('Calling with invalid type returns 400 bad request.', async () => {
      let response = await request(app).post('/api/v1/action').send({ type: 'invalid' });
      expect(response.status).toBe(400);
    });

    it('Calling with valid type but missing fields returns 400 bad request.', async () => {
      let response = await request(app)
        .post('/api/v1/action')
        .send({ type: 'weaponAction', name: 'name', description: 'description' });
      expect(response.status).toBe(400);
    });

    it('Calling with weapon action type and missing required fields returns 400 bad request.', async () => {
      let response = await request(app)
        .post('/api/v1/action')
        .send({ type: ACTION_TYPE.ATTACK, name: 'name', description: 'description' });
      expect(response.status).toBe(400);
    });

    it('Calling with weapon action type and required fields returns 201 created.', async () => {
      let response = await request(app).post('/api/v1/action').send({
        type: ACTION_TYPE.ATTACK,
        name: 'Two Handed Sword',
        description: 'This is not required... but it is a description.',
        damageDice: '1d6',
        range: 'CLOSE',
        attackBonus: 1
      });
      expect(response.status).toBe(201);
      testActionIds.push(response.body.action.id);
    });

    it('Calling with spell action type and missing required fields returns 400 bad request.', async () => {
      let response = await request(app)
        .post('/api/v1/action')
        .send({ type: ACTION_TYPE.SPELL, name: 'name', description: 'description' });
      expect(response.status).toBe(400);
    });

    it('Calling with spell action type and required fields returns 201 created.', async () => {
      let response = await request(app).post('/api/v1/action').send({
        type: ACTION_TYPE.SPELL,
        name: 'Two Handed Sword',
        description: 'This is not required... but it is a description.',
        damageDice: '1d6',
        range: 'CLOSE',
        spellTier: 1,
        hasSave: true,
        saveType: 'DEX',
        saveDC: 12
      });
      expect(response.status).toBe(201);
      testActionIds.push(response.body.action);
    });
  });

  describe('Read', () => {
    it('Calling READ ALL returns 200 ok.', async () => {
      setTimeout(async () => {
        let response = await request(app).get('/api/v1/action');
        expect(response.status).toBe(200);
        expect(response.body.count).toBeGreaterThan(1);
      }, 1000);
    });
  });

  describe.skip('Update', () => {
    it('Calling with invalid id returns 404 not found.', async () => {
      let response = await request(app).put('/api/v1/action/invalid');
      expect(response.status).toBe(404);
    });
  });

  describe('Delete', () => {
    it('Calling with invalid id returns 404 not found.', async () => {
      let response = await request(app).delete('/api/v1/action/invalid');
      expect(response.status).toBe(404);
    });

    it('Calling with valid id returns 204 deleted.', async () => {
      for (let actionId of testActionIds) {
        await request(server).delete(`/api/v1/action/${actionId}`);
      }

      let response = await request(app).get('/api/v1/action');
      expect(response.body.count).toBe(0);
    });
  });
});
