import SME from 'sme-router';
const router=new SME('router-view', 'hash');
import home from '../controllers/home';
router.router('home',home.router);
router.redirect('/');
export default router;