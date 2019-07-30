import {Model} from "objection";
import { knexInstance } from "./knex";

Model.knex(knexInstance);

export default Model;
