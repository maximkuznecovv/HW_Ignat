import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            <span style={{marginRight: 10}}>
                {props.affair.name}
            </span>

            <span style={{marginRight: 10}}>
                {props.affair.priority}
            </span>


            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
