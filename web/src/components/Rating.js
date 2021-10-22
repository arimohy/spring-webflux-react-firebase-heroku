import React from "react";

function Rating({ question }) {
    const average = Math.round(
        question.sumOfReviewScores / question.numberOfReviews
    );

    switch (average) {
        case 1:
        return <h1>☹️</h1>;
        break;

        case 2:
        return <h1>😐</h1>;
        break;

        case 3:
        return <h1>😄</h1>;
        break;
        default:
        return <h1></h1>;
    }
}

export default Rating;