import React, {FC} from 'react';

const RIGHT = "right"
const LEFT = "left"
const TOP = "top"
const BOTTOM = "bottom"

interface IArrow {
    width?: string
    height?: string
    fill: string
    direction: string
    viewBox?: string
}

const resultDirection = (direction: string) => {
    if (direction === RIGHT) {
        return {transform: "rotate(90deg)"}
    } else if (direction === LEFT) {
        return {transform: "rotate(270deg)"}
    } else if (direction === TOP) {
        return {transform: "rotate(0deg)"}
    } else if (direction === BOTTOM) {
        return {transform: "rotate(180deg)"}
    }
}

const Arrow: FC<IArrow> = (
    {
        width,
        height,
        fill,
        direction,
        viewBox
    }) => {
    return (
        <svg
            style={resultDirection(direction)}
            width="12"
            height="11"
            viewBox={viewBox ? viewBox : "0 0 11 12"}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M5 12V3.825L1.4 7.4L0 6L6 0L12 6L10.6 7.4L7 3.825V12H5Z"/>
        </svg>
    );
};

export default Arrow;