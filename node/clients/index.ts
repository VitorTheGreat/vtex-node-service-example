import { IOClients } from "@vtex/api"
import { GetInfo } from "./Queries/getInfo"
import { GetPersonalizations } from "./Queries/getPersonalizations"


export class Clients extends IOClients {
    public get getInfo() {
        return this.getOrSet('getInfo', GetInfo)
    }
    public get getPersonalizations() {
        return this.getOrSet('getPersonalizations', GetPersonalizations)
    }
}