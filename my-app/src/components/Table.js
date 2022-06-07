import React from 'react'

function Table(props) {
    // console.log(props.vals[0].nameF)
  return (
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            
        </tr>
        <tr>
           { props.data.map((val)=>{
               console.log(val)
                return(
                    <>
                    <td>
                        {val.name}
                    </td>
                    <td>
                        {val.email}
                    </td>
                    </>
                )
            })}
        </tr>
    </table>
  )
}

export default Table