import Link from 'next/link'
import React from 'react'

export default function RightAside() {
  return (
    <aside>
        <h1>page Router </h1>
        <ul className="nav flex-column  ">
            <li className="nav-item bg-primary mb-2 mt-2">
                <Link className="nav-link active  text-white " href="/manager">manager</Link>
            </li>
            <li className="nav-item bg-primary mb-2">
                <Link className="nav-link text-white" href="/compnayOuner">compnayOuner</Link>
            </li>
            <li className="nav-item bg-primary mb-2 ">
                <Link className="nav-link text-white" href="/school">school</Link>
            </li>
            <li className="nav-item bg-primary mb-2">
                <Link className="nav-link text-white" href="/collage">collage</Link>
            </li>
        </ul>
    </aside>
  )
}
