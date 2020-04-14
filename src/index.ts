import express, { Application } from 'express'
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import reporteRoutes from './routes/reporteRoutes';
import reporteCourseRoutes from './routes/reporteCourseRoutes';
import reporteEstPosRoutes from './routes/reporteEstPosRoutes';
import reporteCoursePosRoutes from './routes/reporteCoursePosRoutes';
import reporteTableEstRoutes from './routes/reporteTableEstRoutes';

class Server{
    public app:Application;
    constructor(){
        this.app =express();
        this.config();
        this.routes();
    }

    config():void{
         this.app.set('port',process.env.PORT || 3000);
         this.app.use(morgan('dev'));
         this.app.use(cors());
         this.app.use(express.json());
         this.app.use(express.urlencoded({extended: false}));
    }
    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/reporte',reporteRoutes);
        this.app.use('/api/reportecurso',reporteCourseRoutes);
        this.app.use('/api/reportestpos',reporteEstPosRoutes);
        this.app.use('/api/reportecursopos',reporteCoursePosRoutes);
        this.app.use('/api/reportetablaest',reporteTableEstRoutes);
    }
    start():void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server port ',this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();