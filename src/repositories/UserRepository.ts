import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import User from '../entities/User';

@EntityRepository(User)
@Service()
export default class UserRepository extends Repository<User> {
}
