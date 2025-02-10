import { MdPlayArrow } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";
import Slider from "../Slider/Slider";
import './Bracket.css'


export default function Bracket(props) { // ✅ Corrected function declaration
    const { title, imagesArray, infoArray } = props;

    return (
        <div className="bracket-container">
            <div className="bracket-title">
                <MdPlayArrow />
                <span>{title}</span>
            </div>
            <div className="bracket-details">
                <div className="imageSlider">
                    <Slider imagesArray={imagesArray} />
                </div>
                {/* ------ */}
                <div className="info-container">
                    <div className="info-title">
                        <IoInformationCircle />
                        <span>Information</span>
                    </div>
                    <div className="information">
                        {/* Display Planet Info */}
                        {/* name === price === origin === location === last owner === rarity === */}
                        <p>&bull;<span>Name: </span><span>{infoArray[0].name}</span></p>
                        <p>&bull;<span>Price: </span><span>{infoArray[0].price}</span></p>
                        <p>&bull;<span>Origin: </span><span>{infoArray[0].origin}</span></p>
                        <p>&bull;<span>Location: </span><span>{infoArray[0].location}</span></p>
                        <p>&bull;<span>Last Owner: </span><span>{infoArray[0].lastOwner}</span></p>
                        <p>&bull;<span>Rarity: </span><span>{infoArray[0].rarity}</span></p>
                    </div>
                </div>
                {/* -------- */}
            </div>
        </div>
    );
}