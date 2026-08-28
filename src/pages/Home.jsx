import Header from "./Header";
import HeroDetails from "../components/HeroCard/HeroDetails";
import Reveal2 from "../components/Reveal2";
import Stagger from "../components/Stagger";

function Home(){

    return (
        <>
        <Stagger>
            <Reveal2>
                <HeroDetails />
            </Reveal2>
        </Stagger>

        <Stagger>
            <Reveal2>
                <Header></Header>
            </Reveal2>
        </Stagger>

        </>
    )
}

export default Home;