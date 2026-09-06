import HeroMain from "./HeroMain/HeroMain";
import HeroNav from "./HeroNav/HeroNav";
function HeroDetails(){

    return(
        <div >
        <div className="card"><HeroMain /></div>
        <HeroNav />
        </div>
    )
}

export default HeroDetails