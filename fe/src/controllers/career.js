import career from '../views/career.art'
export default{
    render(req,res,next){
        res.render(career(123))
    }
}