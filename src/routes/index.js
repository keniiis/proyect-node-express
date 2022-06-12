import { Router } from "express"

const router = Router()

router.get('/', (req, res) => {
    res.render('index', { tittle: 'My first website'});
});

router.get('/about', (req, res) => {
    res.render('about', {tittle: 'My About'});
});

router.get('/contact', (req, res) => {
    res.render('contact', {tittle: 'My contact'});
});

export default router