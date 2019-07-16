// @ts-ignore
import * as knexConfig from '../../knexfile';
import * as knex from 'knex';

const knexInstance = knex(process.env.NODE_ENV ? knexConfig[process.env.NODE_ENV] : knexConfig.development);

export default knexInstance;
