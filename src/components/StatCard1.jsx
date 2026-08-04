import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
function StatCard1({ stat }) {

    const { ref, inView } = useInView({

        triggerOnce: true,

        threshold: 0.4,

    });

    return (

        <div className="stat-card" ref={ref}>

            <h2>

                {inView && (

                    <CountUp

                        start={0}

                        end={stat.number}

                        duration={2.5}

                    />

                )}

                +

            </h2>

            <p>{stat.title}</p>

        </div>

    );

}

export default StatCard1;