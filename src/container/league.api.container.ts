import {ContainerBuilder} from 'node-dependency-injection'
import {LeagueApiService} from "../controller/league.api.service";

export const leagueApiContainer = new ContainerBuilder()

leagueApiContainer.register('league.api', LeagueApiService)
