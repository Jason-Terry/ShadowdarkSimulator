import request from 'supertest'; // supertest is a framework that allows to easily test web apis
import server from '../src/server';

describe('Server Checks', () => {
  const app = server;

  it('Base path returns 404', done => {
    request(app)
      .get('/')
      .expect(404)
      .end((err, res) => {
        if (err) throw err;
        return done();
      });
  });

  it('Ping returns 200', done => {
    request(app)
      .get('/ping')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        return done();
      });
  });
});
