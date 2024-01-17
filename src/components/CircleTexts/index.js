import React from "react";
import ReactCurvedText from "react-curved-text";

const CircleTexts = () => {
  const circleOne = {
    cx: 200,
    cy: 200,
    rx: 150,
    ry: 150,
  };

  const circleTwo = {
    cx: 200,
    cy: 200,
    rx: 120,
    ry: 120,
  };

  const circleThree = {
    cx: 200,
    cy: 200,
    rx: 90,
    ry: 90,
  };

  const textOne =
    "INTERVIEWS AND TEXTING | BACKGROUND CHECK | EMPLOYEE PERKS | EMPLOYEE BENEFITS |";
  const textTwo =
    "QUALITY WORKSPACE | TECHNICAL UPSKILLING | CULTURAL SYNCHRONIZATION | IT SUPPORT | RECRUITMENT | ONBOARDING |";
  const textThree =
    "CAREER MANAGEMENT | RETENTION PROGRAMS | HOLIDAY MANAGEMENT | TIME TRACKING | MODERN HARDWARE | PRODUCTIVITY TOOLS | COMMUNICATION TOOLS";

  return (
    <div className="circleTexts">
      <ReactCurvedText {...circleOne} text={textOne} />
      <ReactCurvedText {...circleTwo} text={textTwo} />
      <ReactCurvedText {...circleThree} text={textThree} />
    </div>
  );
};

export default CircleTexts;
