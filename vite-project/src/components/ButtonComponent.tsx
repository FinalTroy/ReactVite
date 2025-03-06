import {MouseEvent} from "react";

interface ButtonComponentProps {
    /** onClick handler */
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    /** Hodnota pro zobrazení textu buttonu */
    value: string;
}

/** Komponenta nativniho buttonu */
export function ButtonComponent({onClick, value}: ButtonComponentProps) {
    return (<button onClick={onClick}>
        {value}
    </button>)
}