import React from 'react'


async function getStudentData() {
    const res = await fetch('https://gorest.co.in/public/v2/users');

    return res.json();
}


export default async  function Page() {
    const data = await getStudentData();
    console.log(data)
  return (
            <section className='fs-2'>
                Student page
                <ol>
                    {
                        data.map((cv,idx,arr)=>{
                            return <li className='fs-4'>{cv.name}</li>
                        })
                    }
                </ol>
                
            </section>
         )
}
