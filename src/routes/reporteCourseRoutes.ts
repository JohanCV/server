import { Router } from 'express';
import reporteControllers from '../controllers/reporteControllers';
import reporteController from '../controllers/reporteControllers';

class ReporteRoutes{
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', reporteControllers.cancurpre);
    }

}

const reporteRoutes = new ReporteRoutes();
export default reporteRoutes.router;