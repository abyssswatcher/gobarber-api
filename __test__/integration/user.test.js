import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app).post('/users').send({
      name: 'Test User',
      email: 'test@test.test',
      password: 'passwordStrong!@#$ pindamonhagaba',
    });

    expect(response.body).toHaveProperty('id');
  });

  it('should return email already exists error', async () => {
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
    expect(response.body.error).toEqual(
      'Email already exists, try another one.'
    );
  });
});
