import jingjing from '../views/home.art' 
export default {
    render(req,res,next){
        console.log(1);
        res.render(jingjing(req))
    }
}