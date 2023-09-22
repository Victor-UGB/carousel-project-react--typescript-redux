import React, {useState} from "react";

interface Props{
    alertClass: string,
    alertTitle : string,
    alertMessage: string
}

const Alert:React.FC<Props> = ({...Props})=> {
    return(
        <div className={Props.alertClass}>
            <div className="text-center p-3 py-1">
                <div className="text-zinc-600">{Props.alertTitle}</div>
                <div className="text-zinc-900 text-xs p-2 font-light">{Props.alertMessage}</div>
            </div>
        </div>
    )
}

export default Alert