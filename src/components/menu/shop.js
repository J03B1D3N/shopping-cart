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

//decks
import element from "../items/decks/element/element"
import gonzalezSoldier from "../items/decks/gonzalezSoldier/gonzalesSoldier"
import polarNotreDam from "../items/decks/PolarNotreDam/PolarNotreDam"
import santaCruz from "../items/decks/santaCruz/santaCruz"
import wasted from "../items/decks/wasted/wasted"

//deck images
import elementPhoto from "../items/decks/element/element"

// trucks
import ace from "../items/trucks/Ace/ace"
import independentDelfino from "../items/trucks/independentDelfino/independentDelfino"
import independentIndependent from "../items/trucks/independentIndependent/independentIndependent"
import independentPrimitive from "../items/trucks/independentPrimitive/independantPrimitive"
import independentReynolds from "../items/trucks/independentReynolds/independentReynolds"

//wheels
import OJWheels from "../items/wheels/OJWheels/OJWheels"
import skatedeluceBarbedwire from "../items/wheels/skateDeluxeBarbedwire/skateDeluxeBarbedwire"
import skatedeluxeCanClassic from "../items/wheels/skatedeluxeCanClassic/skatedeluxeCanClassic"
import skatedeluxeFidelity from "../items/wheels/skateDeluxeFidelity/skatedeluxeFidelity"
import skatedeluxeFLame from "../items/wheels/skatedeluxeFlame/skatedeluxeFlame"

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