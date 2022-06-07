import React, { useState } from 'react'
import Table from './Table'


const Form = () => {

    const [add, setadd] = useState([{ name: "", email : ""}])

    let handleChange = (i, e) => {
        let newadd = [...add];
        newadd[i][e.target.name] = e.target.value;
        setadd(newadd);
      }
    
    let addFormFields = () => {
        setadd([...add, { name: "", email: "" }])
      }
    
    let removeFormFields = (i) => {
        let newadd = [...add];
        newadd.splice(i, 1);
        setadd(newadd)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(add));

    }

    return (
       <><form  onSubmit={handleSubmit}>
          {add.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Name</label>
              <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              <label>Email</label>
              <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div>
              <button type="button" onClick={() => addFormFields()}>Add</button>
              <button  type="submit">Submit</button>
          </div>
      </form>
              <Table data={add}/>
      </> 
    )
}

export default Form