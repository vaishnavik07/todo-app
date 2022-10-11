import React, { Fragment,useState } from "react";

const InputTodo = () => {
// useState is default state
    const [description, setDiscription]= useState("");

    const onSubmitForm = async e=>{
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos",{
                method: "POST",
                headers: { "content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location="/";

            } catch (err) {
            console.error(err.message);
        }
    };

    return(
        <Fragment>
           <h1 className="text-center mt-5">Input Todo</h1>
           
            <form className="d-flex mt-5 mx-auto w-50"  onSubmit={onSubmitForm}>
               <input type="text" className="form-control form-control-lg" value={description} onChange={e => setDiscription(e.target.value) }></input>
               <button className="btn btn-success">Add</button>
           </form> 
          
           
        </Fragment>
    )
};

export default InputTodo;