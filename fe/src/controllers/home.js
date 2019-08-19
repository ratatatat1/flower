import jingjing from '../views/home.art' 
export default {
    render(req,res,next){
        res.render(jingjing(req))
    }
}
