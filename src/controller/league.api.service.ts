import {Constants, LolApi} from 'twisted'
import {RegionGroups, Regions} from "twisted/dist/constants";
import {getDictFromEnum} from "../utils/utils";

export class LeagueApiService {
    private leagueApiService: any;
    private leagueApi = new LolApi()
    /**
     * @param {ExampleService} exampleService
     */
    constructor(leagueApiService: any) {
        this.leagueApiService = leagueApiService;
    }


    async getSummonerByName(summonerName: string, region: string): Promise<any>{
        console.log(summonerName, region)
        let dict = getDictFromEnum(Regions);
        console.log(dict)
        console.log(dict[region])
        if (dict.hasOwnProperty(region)) {
            return await this.leagueApi.Summoner.getByName(summonerName, dict[region]);
        }//Constants.Regions.KOREA
        return null;
    }

    async getRegions(){
        let dict = getDictFromEnum(Regions);
        return dict;
    }
}