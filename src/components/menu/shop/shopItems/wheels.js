//wheels
import OJWheels from "../../../items/wheels/OJWheels/OJWheels"
import skatedeluceBarbedwire from "../../../items/wheels/skateDeluxeBarbedwire/skateDeluxeBarbedwire"
import skatedeluxeCanClassic from "../../../items/wheels/skatedeluxeCanClassic/skatedeluxeCanClassic"
import skatedeluxeFidelity from "../../../items/wheels/skateDeluxeFidelity/skatedeluxeFidelity"
import skatedeluxeFLame from "../../../items/wheels/skatedeluxeFlame/skatedeluxeFlame"

//wheels images

import OJWheelsIMG from "../../../items/wheels/OJWheels/139674-0-OJWheels-PlainJaneKeyframe.webp"
import skatedeluceBarbedwireIMG from "../../../items/wheels/skateDeluxeBarbedwire/155428-0-skatedeluxe-BarbwireConicalADV.webp"
import skatedeluxeCanClassicIMG from "../../../items/wheels/skatedeluxeCanClassic/155453-0-skatedeluxe-CanClassicADV.webp"
import skatedeluxeFidelityIMG from "../../../items/wheels/skateDeluxeFidelity/125407-0-skatedeluxe-FidelitySeries.webp"
import skatedeluxeFLameIMG from "../../../items/wheels/skatedeluxeFlame/155442-0-skatedeluxe-FlameConicalADV.webp" 

export default function Wheels() {

    const wheels = [OJWheels, skatedeluceBarbedwire, skatedeluxeCanClassic, skatedeluxeFidelity, skatedeluxeFLame]
    const wheelsImgs = [OJWheelsIMG, skatedeluceBarbedwireIMG, skatedeluxeCanClassicIMG, skatedeluxeFidelityIMG, skatedeluxeFLameIMG]

    return <>

        {wheels.map((element, index) => {
            return <div className="item">
                <img src={wheelsImgs[index]} alt="img"></img>
                <p className="itemTitle">{element.name}</p>
            </div>
        })}
            
    </>
}