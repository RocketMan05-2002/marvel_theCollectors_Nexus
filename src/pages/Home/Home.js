import './Home.css'
import planetInfo from '../../data/PlanetsData/planetInfo'
import planetImages from '../../data/PlanetsData/planetImages'
import Bracket from '../../components/Bracket/Bracket';

export default function Home(){
    return(
        <div>
            <Bracket 
            title='planets'
            imagesArray = {planetImages}
            infoArray ={planetInfo}
            />
        </div>
    )
}