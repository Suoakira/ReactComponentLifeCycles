import React from 'react'
import { NavLink } from "react-router-dom"

export default Navigation => {
    return (
        <div>
            <div>
                <NavLink exact to="/">
                    Discussion
                </NavLink>
            </div>
            <div>
                <NavLink exact to="/rules">
                    Rules
                </NavLink>
            </div>
            <div>
                <NavLink exact to="/workflow">
                    workflow
                </NavLink>
            </div>
        </div>
    )
}