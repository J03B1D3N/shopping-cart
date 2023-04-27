//decks
import element from "../../../items/decks/element/element"
import gonzalezSoldier from "../../../items/decks/gonzalezSoldier/gonzalesSoldier"
import polarNotreDam from "../../../items/decks/PolarNotreDam/PolarNotreDam"
import santaCruz from "../../../items/decks/santaCruz/santaCruz"
import wasted from "../../../items/decks/wasted/wasted"

//deck images
import elementIMG from "../../../items/decks/element/162494-0-Element-xAlcalaMadars8.webp"
import gonzalezSoldierIMG from "../../../items/decks/gonzalezSoldier/164286-0-Polar-GonzalezSoldier8375.webp"
import polarNotreDamIMG from "../../../items/decks/PolarNotreDam/164274-0-Polar-GrundNotreDame825.webp"
import santaCruzIMG from "../../../items/decks/santaCruz/161835-0-SantaCruz-DressenRoseCrossShaped931.webp"
import wastedIMG from "../../../items/decks/wasted/164852-0-WastedParis-Arizona8.webp"

export default function Decks() {

    const decks = [element, gonzalezSoldier, polarNotreDam, santaCruz, wasted]
    const decksImgs = [elementIMG, gonzalezSoldierIMG, polarNotreDamIMG, santaCruzIMG, wastedIMG]

    return <>
     {decks.map((element, index) => {
                return <div className="item">
                    <img src={decksImgs[index]} alt="img"></img>
                    <p className="itemTitle">{element.name}</p>
                </div>
            })}</>
}