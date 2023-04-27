//bearings
import antixEclipse from "../../items/bearings/antixEclipse/antixEclipse"
import independentGPB from "../../items/bearings/independentGP-B/independentGP-B"
import skateDeluxNights from "../../items/bearings/SkateDeluxeNights/skateDeluxeNights"
import skateDeluxRainbows from "../../items/bearings/skateDeluxeRainbows/skateDeluxeRainbows"
import titaniumsSkateDeluxe from "../../items/bearings/titaniumsSkateDeluxe/titaniumsSkateDeluxe"

//bearing images
import antixEclipseIMG from "../../items/bearings/antixEclipse/148429-0-Antix-EclipseCeramic.webp"
import independentGPBIMG from "../../items/bearings/independentGP-B/139282-0-Independent-GPB.webp"
import skateDeluxNightsIMG from "../../items/bearings/SkateDeluxeNights/83544-0-skatedeluxe-NightsABEC7.webp"
import skateDeluxRainbowsIMG from "../../items/bearings/skateDeluxeRainbows/148427-0-skatedeluxe-Rainbows.webp"
import titaniumsSkateDeluxeIMG from "../../items/bearings/titaniumsSkateDeluxe/148425-0-skatedeluxe-Titaniums.webp"


export default function Bearings() {

    const bearings  = [antixEclipse, independentGPB, skateDeluxNights, skateDeluxRainbows, titaniumsSkateDeluxe]
    const bearingImgs = [antixEclipseIMG, independentGPBIMG, skateDeluxNightsIMG, skateDeluxRainbowsIMG, titaniumsSkateDeluxeIMG]

    return (
        <>
        {bearings.map((element, index) => {
            return <div className="item">
                <img src={bearingImgs[index]} alt="img"></img>
                <p className="itemTitle">{element.name}</p>
            </div>
        })}
        </>
    )
}





