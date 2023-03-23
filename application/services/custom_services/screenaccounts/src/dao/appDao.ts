import * as mongoose from 'mongoose';
import appModel from '../models/daomodels/app';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class appDao {
    private app = appModel;
    constructor() { }
    
    public async GpCreate(appData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into appDao.ts: GpCreate');

    let temp = new appModel(appData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from appDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(appData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into appDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.app.aggregate(([
                        { $match: { $and: [{ created_by: appData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from appDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}