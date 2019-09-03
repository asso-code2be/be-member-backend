import { Service } from "typedi";
import {Member} from "../models/Member";

@Service()
export class MemberRepository {
    constructor() {}

    public async getAll(): Promise<Member[]> {
        return await Member.query();
    }
} 
