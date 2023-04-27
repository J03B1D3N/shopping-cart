// trucks
import ace from "../../../items/trucks/Ace/ace"
import independentDelfino from "../../../items/trucks/independentDelfino/independentDelfino"
import independentIndependent from "../../../items/trucks/independentIndependent/independentIndependent"
import independentPrimitive from "../../../items/trucks/independentPrimitive/independantPrimitive"
import independentReynolds from "../../../items/trucks/independentReynolds/independentReynolds"

//trucks images

import aceIMG from "../../../items/trucks/Ace/150197-0-Ace-44Classic575.webp"
import independentDelfinoIMG from "../../../items/trucks/independentDelfino/154527-0-Independent-149Stage11StandardDelfinoHollow.webp"
import independentIndependentIMG from "../../../items/trucks/independentIndependent/147560-0-Independent-144Stage11BarStandard.webp"
import independentPrimitiveIMG from "../../../items/trucks/independentPrimitive/155684-0-Independent-139Stage11Mid.webp"
import independentReynoldsIMG from "../../../items/trucks/independentReynolds/147536-0-Independent-149MidReynoldsBlockHollow.webp"

export default function Trucks() {

    const trucks = [ace, independentDelfino, independentIndependent, independentPrimitive, independentReynolds]
    const trucksImgs = [aceIMG, independentDelfinoIMG, independentIndependentIMG, independentPrimitiveIMG, independentReynoldsIMG]

    return <>
            {trucks.map((element, index) => {
                return <div className="item">
                    <img src={trucksImgs[index]} alt="img"></img>
                    <p className="itemTitle">{element.name}</p>
                </div>
            })}
    </>
}