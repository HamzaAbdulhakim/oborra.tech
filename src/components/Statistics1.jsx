import Reveal from "./Reveal";
import Stagger from "./Stagger";
import StatCard1 from "./StatCard1";
import "../styles/statistics1.css"
const statistic = [

    {

        id:1,

        number:5,

        title:"Projects",

    },

    {

        id:2,

        number:12,

        title:"Certificates",

    },

    {

        id:3,

        number:3,

        title:"Programming Languages",

    },

    {

        id:4,

        number:419,

        title:"University Entrance Score",

    },

];

function Statistics1(){

    return(

        <section className="statistics">

            <div className="container">

                <Stagger className="stats-grid">

                    {statistic.map(stat=>(

                        <Reveal key={stat.id}>

                            <StatCard1 stat={stat}/>

                        </Reveal>

                    ))}

                </Stagger>

            </div>

        </section>

    );

}

export default Statistics1;