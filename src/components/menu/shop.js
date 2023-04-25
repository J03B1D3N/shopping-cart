//bearings
import antixEclipse from "../items/bearings/antixEclipse/antixEclipse"
import independentGPB from "../items/bearings/independentGP-B/independentGP-B"
import skateDeluxNights from "../items/bearings/SkateDeluxeNights/skateDeluxeNights"
import skateDeluxRainbows from "../items/bearings/skateDeluxeRainbows/skateDeluxeRainbows"
import titaniumsSkateDeluxe from "../items/bearings/titaniumsSkateDeluxe/titaniumsSkateDeluxe"

//bearing images
import antixEclipseIMG from "../items/bearings/antixEclipse/148429-0-Antix-EclipseCeramic.webp"
import independentGPBIMG from "../items/bearings/independentGP-B/139282-0-Independent-GPB.webp"
import skateDeluxNightsIMG from "../items/bearings/SkateDeluxeNights/83544-0-skatedeluxe-NightsABEC7.webp"
import skateDeluxRainbowsIMG from "../items/bearings/skateDeluxeRainbows/148427-0-skatedeluxe-Rainbows.webp"
import titaniumsSkateDeluxeIMG from "../items/bearings/titaniumsSkateDeluxe/148425-0-skatedeluxe-Titaniums.webp"

//decksgit
import element from "../items/decks/element/element"
import gonzalezSoldier from "../items/decks/gonzalezSoldier/gonzalesSoldier"
import polarNotreDam from "../items/decks/PolarNotreDam/PolarNotreDam"
import santaCruz from "../items/decks/santaCruz/santaCruz"
import wasted from "../items/decks/wasted/wasted"

//deck images
import elementIMG from "../items/decks/element/162494-0-Element-xAlcalaMadars8.webp"
import gonzalezSoldierIMG from "../items/decks/gonzalezSoldier/164286-0-Polar-GonzalezSoldier8375.webp"
import polarNotreDamIMG from "../items/decks/PolarNotreDam/164274-0-Polar-GrundNotreDame825.webp"
import santaCruzIMG from "../items/decks/santaCruz/161835-0-SantaCruz-DressenRoseCrossShaped931.webp"
import wastedIMG from "../items/decks/wasted/164852-0-WastedParis-Arizona8.webp"

// trucks
import ace from "../items/trucks/Ace/ace"
import independentDelfino from "../items/trucks/independentDelfino/independentDelfino"
import independentIndependent from "../items/trucks/independentIndependent/independentIndependent"
import independentPrimitive from "../items/trucks/independentPrimitive/independantPrimitive"
import independentReynolds from "../items/trucks/independentReynolds/independentReynolds"

//trucks images

import aceIMG from "../items/trucks/Ace/150197-0-Ace-44Classic575.webp"
import independentDelfinoIMG from "../items/trucks/independentDelfino/154527-0-Independent-149Stage11StandardDelfinoHollow.webp"
import independentIndependentIMG from "../items/trucks/independentIndependent/147560-0-Independent-144Stage11BarStandard.webp"
import independentPrimitiveIMG from "../items/trucks/independentPrimitive/155684-0-Independent-139Stage11Mid.webp"
import independentReynoldsIMG from "../items/trucks/independentReynolds/147536-0-Independent-149MidReynoldsBlockHollow.webp"


//wheels
import OJWheels from "../items/wheels/OJWheels/OJWheels"
import skatedeluceBarbedwire from "../items/wheels/skateDeluxeBarbedwire/skateDeluxeBarbedwire"
import skatedeluxeCanClassic from "../items/wheels/skatedeluxeCanClassic/skatedeluxeCanClassic"
import skatedeluxeFidelity from "../items/wheels/skateDeluxeFidelity/skatedeluxeFidelity"
import skatedeluxeFLame from "../items/wheels/skatedeluxeFlame/skatedeluxeFlame"

//wheels images

import OJWheelsIMG from "../items/wheels/OJWheels/139674-0-OJWheels-PlainJaneKeyframe.webp"
import skatedeluceBarbedwireIMG from "../items/wheels/skateDeluxeBarbedwire/155428-0-skatedeluxe-BarbwireConicalADV.webp"
import skatedeluxeCanClassicIMG from "../items/wheels/skatedeluxeCanClassic/155453-0-skatedeluxe-CanClassicADV.webp"
import skatedeluxeFidelityIMG from "../items/wheels/skateDeluxeFidelity/125407-0-skatedeluxe-FidelitySeries.webp"
import skatedeluxeFLameIMG from "../items/wheels/skatedeluxeFlame/155442-0-skatedeluxe-FlameConicalADV.webp" 

export default function Shop() {

    const bearings  = [antixEclipse, independentGPB, skateDeluxNights, skateDeluxRainbows, titaniumsSkateDeluxe]
    const bearingImgs = [antixEclipseIMG, independentGPBIMG, skateDeluxNightsIMG, skateDeluxRainbowsIMG, titaniumsSkateDeluxeIMG]
    const decks = [element, gonzalezSoldier, polarNotreDam, santaCruz, wasted]
    const trucks = [ace, independentDelfino, independentIndependent, independentPrimitive, independentReynolds]
    const wheels = [OJWheels, skatedeluceBarbedwire, skatedeluxeCanClassic, skatedeluxeFidelity, skatedeluxeFLame]

    return <>
        <div className="shop">
            {bearings.map((element, index) => {
                return <div className="item">
                    <img src={bearingImgs[index]} alt="img"></img>
                    <p className="itemTitle">{element.name}</p>
                </div>
            })}

        </div>
    </>
}