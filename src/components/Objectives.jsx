import React from 'react'

export default function Objectives(props) {
    return (
        <ul style={{ fontSize: props.fontSize }}>
            <li>Use <span>npm create vite@latest</span> to make a pre-configured React application.</li>
            <li>Create React components.</li>
            <li>Render React components within an application.</li>
            <li>Pass <span>props</span> to React components to modify their behavior.</li>
        </ul>
    )
}
