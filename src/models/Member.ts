import Model from '../lib/model';
import * as uuid from 'uuid';

export class Member extends Model {
  id: string;
  firstname: string;
  lastname: string;
  email: string;

  constructor () {
    super();
    this.id = uuid.v4();
  }

  public static get tableName () {
    return 'member';
  }
}
