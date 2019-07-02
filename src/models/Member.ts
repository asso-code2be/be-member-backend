import Model from '../lib/model';
import * as uuid from 'uuid';

export class Member extends Model {
  private id: string;
  private firstname: string;
  private lastname: string;
  private email: string;

  constructor (firstname: string, lastname: string, email: string) {
    super();
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.id = uuid.v4();
  }

  public static get tableName () {
    return 'member';
  }
}
