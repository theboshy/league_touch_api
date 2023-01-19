import express, {Request, Response} from 'express';
import {leagueApiContainer} from "../container/league.api.container";

const leagueApiRoutes = express.Router()

const leagueApi = leagueApiContainer.get('league.api')

leagueApiRoutes.route('/summoner-by-name',)
    .get( async (req: Request, res: Response) => {
        const {summonerName, region} = req.query;
        let summonerInfo = await leagueApi.getSummonerByName(summonerName as string, region as string);
        if (!summonerInfo) {
            return res.status(404).json({"error": "there was an error getting summoner"})
        }
        res.send(JSON.stringify(summonerInfo));
    });

leagueApiRoutes.route('/regions',)
    .get( async (req: Request, res: Response) => {
        let regions = await leagueApi.getRegions();
        res.send(JSON.stringify(regions));
    });

export = leagueApiRoutes;

