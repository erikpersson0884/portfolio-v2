import type { FC } from 'react'
import './extraCurricularActivities.css'
import pritImg from '@/assets/activities/prit.jpg';
import equalitImg from '@/assets/activities/equalit.jpg';
import fikitImg from '@/assets/activities/fikit.jpg';
import smurfImg from '@/assets/activities/smurf.jpg';


interface ActivityProps {
    name: string
    backgroundPicture?: string
    logo?: string
    description?: string
    className?: string
}

const Activity: FC<ActivityProps> = ({
    name,
    backgroundPicture,
    logo,
    description,
    className,
}) => {
  return (
    <li className={"activity " + className}>
        <div className="activity-inner">
            {/* FRONT */}
            <div
                className="activity-front"
                style={backgroundPicture? { backgroundImage: `url(${backgroundPicture})` }: undefined}>
                <h3>{name}</h3>
                {logo && <img src={logo} alt={"logo for " + name} />}
            </div>

            {/* BACK */}
            <div className="activity-back">
                <h3>{name}</h3>
                <p>{description || ""}</p>
            </div>
        </div>
    </li>
  );
};

const Activities: FC = () => {

    return (
        <section id="activities">
            <h1>Extra-curricular Activities</h1>
            <hr />
            <ul>
                <Activity name="P.R.I.T." backgroundPicture={pritImg} className='prit' description='Maintained the student premises and arranged pubs and other activities for the division members.'/>
                <Activity name="Equalit" backgroundPicture={equalitImg} className='equalit' description='Promoted inclusive practices and supported initiatives to improve student well-being and collaboration.'/>
                <Activity name="Fikit" backgroundPicture={fikitImg} className='fikit'/>
                <Activity name="Smurf" backgroundPicture={smurfImg} className='smurf'/>
            </ul>
        </section>
    )
}

export default Activities
