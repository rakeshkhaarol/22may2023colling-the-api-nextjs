import React from 'react'

async function getTeacherData() {
    const res = await fetch('https://gorest.co.in/public/v2/users');

    return res.json();
}

export default async function Page() {
    const data = await getTeacherData();
  return (
            <section className='fs-3'>
                Teacher page
                <ol>
                    {
                        data.map((cv,idx,arr)=>{
                            return <li className='fs-5' key={idx}>{cv.name}</li>
                        })
                    }
                </ol>
            </section>
  )
}
