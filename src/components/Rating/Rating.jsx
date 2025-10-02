import { faStar as solidStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({ rating }) {

    function getStarIcon(ratecount) {
        if (rating >= ratecount) {
            return solidStar;
        } else if (rating >= ratecount - 0.5) {
            return faStarHalfStroke;
        } else {
            return regularStar;
        }
    }

    return (
        <div className="stars text-yellow-300">
            {
                [1, 2, 3, 4, 5].map((ratecount) => (
                    <FontAwesomeIcon key={ratecount} icon={getStarIcon(ratecount)} />
                ))
            }
        </div>
    )
}
