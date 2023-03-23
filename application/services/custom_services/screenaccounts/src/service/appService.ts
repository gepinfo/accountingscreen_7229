import { Request, Response } from 'express';
import {appDao} from '../dao/appDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let app = new appDao();

export class appService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into appService.ts: GpCreate')
     let  appData = req.body;
     app.GpCreate(appData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from appService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into appService.ts: GpGetNounCreatedBy')
     let  appData = { created_by: req.query.createdby };
     app.GpGetNounCreatedBy(appData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from appService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}