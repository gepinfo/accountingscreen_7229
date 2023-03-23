import { Request, Response } from 'express';
import { appService } from '../service/appService';
import { CustomLogger } from '../config/Logger'
let app = new appService();

export class appController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    app.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into appController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from appController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    app.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into appController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from appController.ts: GpGetNounCreatedBy');
    })}


}