import HeroMain from "./HeroMain/HeroMain";
import HeroNav from "./HeroNav/HeroNav";
import EditorialHeroCard from "./EditorialHeroCard";
import image from "../../assets/Hamza.jpg"
function HeroDetails(){

    return(
        <div >
        <div className="card"><HeroMain /></div>
        <HeroNav />
        <EditorialHeroCard
        imageUrl={image}
        imageCaption={"Hamza"}
        label={"Hamza Abdulhakim"}
        headline={"Product Engineer"}
        ctaText={"Let's Talk"}
        quote={"Technology is the only powerfull weapon that you can use to execute impossibility"}
        body={"I'm a full-stack developer crafting pixel-perfect interfaces and robust backends for startups and established brands alike."} />
        </div>
    )
}

export default HeroDetails