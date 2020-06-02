import request from 'supertest';

import app from '../../src/app';
import truncate from '../util/truncate';
import User from '../../src/app/models/User';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const response = await request(app).post('/users').send({
      name: 'Test User',
      email: 'test@test.test',
      password: 'passwordStrong!@#$ pindamonhagaba',
    });

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated email', async () => {
    await request(app).post('/users').send({
      name: 'Test User',
      email: 'test@test.test',
      password: 'passwordStrong!@#$ pindamonhagaba',
    });

    const response = await request(app).post('/users').send({
      name: 'Test User 2',
      email: 'test@test.test',
      password: 'passwordStrong!@#$ pindamonhagaba',
    });

    expect(response.body).toHaveProperty('error');
    expect(response.status).toBe(400);
    expect(response.body.error).toEqual(
      'Email already exists, try another one.'
    );
  });

  it('should encrypt user password when new user is created', async () => {
    const response = await request(app).post('/users').send({
      name: 'Test User',
      email: 'test@test.test',
      password: 'passwordStrong!@#$ pindamonhagaba',
    });

    const user = await User.findByPk(response.id);
    const isEncrypted = user.compareHash('passwordStrong!@#$ pindamonhagaba');

    expect(isEncrypted).toBeTruthy();
  });
});
