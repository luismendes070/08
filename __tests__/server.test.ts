// ChatGPT Auth0 test
// server.test.ts
import request from 'supertest';
import app from './../src/server'; // Assuming your Express server is configured in server.ts

describe('Express server', () => {
  it('returns CSV data for authenticated users', async () => {
    // Mock authentication token (JWT)
    const authToken = 'fake-auth-token';

    // Make request to CSV endpoint with authentication token
    const response = await request(app)
      .get('/data.csv')
      .set('Authorization', `Bearer ${authToken}`);

    // Assert that server responds with CSV data
    expect(response.status).toEqual(200);
    expect(response.header['content-type']).toEqual('text/csv');
    // Add more assertions to validate CSV content if needed
  });

  it('redirects unauthenticated users to Auth0 login page', async () => {
    // Make request to CSV endpoint without authentication token
    const response = await request(app).get('/data.csv');

    // Assert that server responds with redirect to Auth0 login page
    expect(response.status).toEqual(302);
    expect(response.header['location']).toContain('auth0.com'); // Adjust this to your Auth0 domain
  });
});
