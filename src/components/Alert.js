import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }
    return (
        <div style={{ height: "50px" }}>
            {props.alert && <div>
                <div className={`alert alert-${props.alert.type}`} role="alert">
                    {capitalize(props.alert.type)}! {props.alert.msg}
                </div>
            </div>}
        </div >
    )
}
