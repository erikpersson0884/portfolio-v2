import type { FC } from 'react'
import './extraCurricularActivities.css'
import pritImg from '../../assets/activities/prit.jpg';
import equalitImg from '../../assets/activities/equalit.jpg';
import fikitImg from '../../assets/activities/fikit.jpg';
import smurfImg from '../../assets/activities/smurf.jpg';


interface ActivityProps {
    name: string
    backgroundPicture?: string
    logo?: string
    className?: string
}

const Activity: FC<ActivityProps> = ({ name, backgroundPicture, logo, className }) => {
    return (
        <div 
            className={'activity ' + className} 
            style={backgroundPicture ? { backgroundImage: `url(${backgroundPicture})` } : undefined}
        >
            <p>{name}</p>
            { logo && <img src={logo} alt={"logo for " + name} /> }
        </div>
    );
};

const Activities: FC = () => {

    return (
        <section id="activities">
            <h1>Extra-curricular Activities</h1>
            <hr />
            <ul>
                <Activity name="P.R.I.T." backgroundPicture={pritImg} className='prit'/>
                <Activity name="Equalit" backgroundPicture={equalitImg} className='equalit'/>
                <Activity name="Fikit" backgroundPicture={fikitImg} className='fikit'/>
                <Activity name="Smurf" backgroundPicture={smurfImg} className='smurf'/>
            </ul>
        </section>
    )
}

export default Activities