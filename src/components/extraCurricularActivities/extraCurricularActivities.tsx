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
          style={
            backgroundPicture
              ? { backgroundImage: `url(${backgroundPicture})` }
              : undefined
          }
        >
          <p>{name}</p>
          {logo && <img src={logo} alt={"logo for " + name} />}
        </div>

        {/* BACK */}
        <div className="activity-back">
          <h3>{name}</h3>
          <p>
            {description || ""}
          </p>
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
                <Activity name="P.R.I.T." backgroundPicture={pritImg} className='prit' description='Managed internal and external communications to enhance engagement within the student community. Coordinated events and initiatives to promote collaboration.'/>
                <Activity name="Equalit" backgroundPicture={equalitImg} className='equalit'/>
                <Activity name="Fikit" backgroundPicture={fikitImg} className='fikit'/>
                <Activity name="Smurf" backgroundPicture={smurfImg} className='smurf'/>
            </ul>

            {/* <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={pritImg} alt="Avatar" style={{width: '300px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                    <div>
                        <br />P.R.I.T. - Programmerings- och Robotikintressegruppen i Trollhättan
                        <br/>Equalit - En ideell förening som jobbar för att öka jämställdheten inom IT
                        <br/>Fikit - Föreningen för IT-kvinnor i Trollhättan
                        <br/>Smurf - Småföretagarnas Riksförbund
                    </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default Activities