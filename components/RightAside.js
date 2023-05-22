import Link from 'next/link'
import React from 'react'

export default function RightAside() {
  return (
    <aside>
        <h1>pages Router </h1>
        <ul className="nav flex-column  ">
            <li className="nav-item bg-primary mb-2 mt-2">
                <Link className="nav-link active  text-white " href="#">Active</Link>
            </li>
            <li className="nav-item bg-primary mb-2">
                <Link className="nav-link text-white" href="#">Active</Link>
            </li>
            <li className="nav-item bg-primary mb-2 ">
                <Link className="nav-link text-white" href="#">Active</Link>
            </li>
            <li className="nav-item bg-primary mb-2">
                <Link className="nav-link text-white" href="#">Active</Link>
            </li>
        </ul>
    </aside>
  )
}
