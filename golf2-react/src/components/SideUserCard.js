import React from "react";

export default function SideUserCard({ user }) {
    return (
        <div className="flex-row">
            <div className="side-user white-light">{user.username}</div>
            <div>
                <button>follow</button>
            </div>
        </div>
    )
}