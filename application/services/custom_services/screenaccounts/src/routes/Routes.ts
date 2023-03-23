import { Request, Response, NextFunction } from "express";
import { appController } from '../controller/appController';


export class Routes {
    private app: appController = new appController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/app').post(this.app.GpCreate);
app.route('/app/userid/created_by').get(this.app.GpGetNounCreatedBy);
     }

}