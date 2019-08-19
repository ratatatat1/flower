import SME from 'sme-router';
const router=new SME('router-view', 'hash');
import home from '../controllers/home';
import position from '../controllers/career'
router.route('/',home.render);
router.route('/position',position.render)
router.redirect('/');
export default router;

