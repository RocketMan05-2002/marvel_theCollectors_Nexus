import './Home.css'
import planetInfo from '../../data/PlanetsData/planetInfo'
import shipInfo from '../../data/ShipsData/shipInfo'

import planetImages from '../../data/PlanetsData/planetImages'
import shipImages from '../../data/ShipsData/shipImages'
import Bracket from '../../components/Bracket/Bracket';

export default function Home(){
    return(
        <div>
            <Bracket 
            title='planets'
            imagesArray = {planetImages}
            infoArray ={planetInfo}
            />
            <Bracket
            title='ships'
            imagesArray= {shipImages}
            infoArray ={shipInfo}
            />
        </div>
    )
}