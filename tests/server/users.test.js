process.env.TEST = true;

const supertest = require('supertest');
const app = require('../../server/server');
const agent = supertest.agent(app);
const pool = require('../../server/modules/pool');

describe('testing for DB calls for user ID goals', () => {
  let user;
  beforeEach(async () => {
    // Clean up my user table
    await pool.query('DELETE FROM "user"');

    // SETUP: Register a new user
    let registerRes = await agent.post('/api/user/register').send({
      username: 'edan123',
      password: 'testpass',
      email: 'test123@gmail.com',
    });
    expect(registerRes.statusCode).toBe(201);
    user = registerRes.body;
    expect(user.username).toBe('edan123');

    let loginRes = await agent
      .post('/api/user/login')
      .send({ username: 'edan123', password: 'testpass' });
    expect(loginRes.statusCode).toBe(200);
  });
  test('Should fail if not logged in', () => {});

  test('Should return the goal for user id', () => {});
});
