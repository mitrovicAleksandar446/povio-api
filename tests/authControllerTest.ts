import chai from 'chai';
import mocha from 'mocha';
import chaiHttp from 'chai-http';
import { getConnection } from 'typeorm';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const app = require('../src/app');

const { describe, beforeEach, it } = mocha;
const { assert, expect } = chai;
chai.should();

chai.use(chaiHttp);

describe('Authorization', () => {
	beforeEach((done) => {
		// eslint-disable-next-line max-len
		// Here we should have some dynamic logic to
		// re-run migrations and rebuild tables, but this is only example
		getConnection().manager.query('delete from users')
			.then(() => done());
	});

	describe('Sign up', () => {
		describe('POST Request with invalid username or password', () => {
			it('should return response with 422 status when nothing is sent', (done) => {
				chai.request(app)
					.post('/sign-up')
					.end((err, res) => {
						res.should.have.status(422);
						done();
					});
			});

			it('should return \'Username is empty\' when username is not in request', (done) => {
				chai.request(app)
					.post('/sign-up')
					.send({ username: '', password: 'secret' })
					.end((err, res) => {
						res.body.errors.length.should.be.eq(1);
						res.body.errors[0].msg.should.be.eq('Username is empty');
						res.should.have.status(422);
						done();
					});
			});

			it('should fail when password is too short', (done) => {
				chai.request(app)
					.post('/sign-up')
					.send({ username: 'something', password: 'sec' })
					.end((err, res) => {
						res.body.errors.length.should.be.eq(1);
						res.should.have.status(422);
						done();
					});
			});
		});

		describe('POST Request with valid parameters', () => {
			it('should succeed with 201 if parameters are valid', (done) => {
				chai.request(app)
					.post('/sign-up')
					.send({ username: 'something', password: 'secret' })
					.end((err, res) => {
						res.should.have.status(201);
						done();
					});
			});

			it('should return error when duplicate username is created', (done) => {
				chai.request(app)
					.post('/sign-up')
					.send({ username: 'something', password: 'secret' })
					.end(() => chai.request(app)
						.post('/sign-up')
						.send({ username: 'something', password: 'secret' })
						.end((req, res) => {
							res.should.have.status(400);
							done();
						}));
			});
		});
	});
});
