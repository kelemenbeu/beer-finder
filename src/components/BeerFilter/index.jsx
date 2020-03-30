import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { beerActions } from "../../actions";

const BeerFilter = () => {

  const [inputs, setInputs] = useState({
    beername: '',
    min: 0,
    max: 100
});
const [submitted, setSubmitted] = useState(false);
const { beername, min, max } = inputs;
const dispatch = useDispatch();

function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(submitted)

    setSubmitted(true);
    dispatch(beerActions.getBeerByParams(beername, min, max));
}


  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
      <input type="text" name="beername" value={beername} onChange={handleChange} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Name"/>

      <label className="sr-only" htmlFor="inlineFormInputName2">ABV</label>
      <input type="text" name="min" value={min} onChange={handleChange} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="abv min %"/>

      <label className="sr-only" htmlFor="inlineFormInputName2">ABV</label>
      <input type="text" name="max" value={max} onChange={handleChange} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="abv max %"/>

      <button type="submit" className="btn btn-primary mb-2">Filter</button>
    </form>
  )
};

export default BeerFilter;
