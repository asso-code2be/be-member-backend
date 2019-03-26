import { memberList } from "../members/memberList";

export interface IndividualList extends memberList {
    firstName: string;
    lastName: string;
}