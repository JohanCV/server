import {Request, Response} from 'express'
import pool from '../database' 

class ReporteController{

    public async canestpre (req: Request, res: Response){        
        const cantidadEstudiantes= await pool.query('SELECT SUM(Estudiantes) as TotalEstudiantes FROM canest');
        res.json(cantidadEstudiantes);
    }

    public async cancurpre (req: Request, res: Response){        
        const cantidadCursos= await pool.query('SELECT COUNT(distinct (Id)) as TotalCursos FROM canest');
        res.json(cantidadCursos);
    }

    public async canestpos (req: Request, res: Response){        
        const cantidadEstudiantespos= await pool.query('SELECT SUM(Estudiantes) as TotalEstudiantesPosgrado FROM canestpos');
        res.json(cantidadEstudiantespos);
    }

    public async cancurpos (req: Request, res: Response){        
        const cantidadcursospos= await pool.query('SELECT COUNT(distinct (Id)) as TotalCursosPosgrado FROM canestpos');
        res.json(cantidadcursospos);
    }

    public async tablaestbycurso (req: Request, res: Response){        
        const tablaEstudiantes= await pool.query('SELECT * FROM canest');
        res.json(tablaEstudiantes);
    }

    public buscar (req: Request, res: Response){
        res.json({text: 'buscando by escuela'});    
    }
}

const reporteController =  new ReporteController();
export default reporteController;