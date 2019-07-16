import { Service } from "typedi";

export interface StubMemberModel {
    id: string;
    displayName: string;
    email: string;
}

@Service()
export class MemberRepository {
    constructor() {}

    public GetAll(): Promise<StubMemberModel[]> {
        const results: StubMemberModel[] = [
            { id: '123-abc', email: 'john@doe.io', displayName: 'John Doe'},
            { id: '234-bcd', email: 'jane@doe.io', displayName: 'Jane Doe'}
        ];

        return Promise.resolve(results);
    }
} 