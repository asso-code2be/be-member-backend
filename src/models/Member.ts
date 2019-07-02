import Model from '../lib/model';

export class Member extends Model {
  public static get tableName () {
    return 'member';
  }
}
