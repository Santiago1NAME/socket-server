import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response)=>{
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!'
    });
});

router.post('/mensajes', (req: Request, res: Response)=>{
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        cuerpo,
        de,
        mensaje: 'Post esta bien!!'
    });
});

router.post('/mensajes/:id', (req: Request, res: Response)=>{
    const id = req.params.id;
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        data: {
            cuerpo,
            de,
            id,
        },
        mensaje: 'Post esta bien!!'
    });
});

export default router;