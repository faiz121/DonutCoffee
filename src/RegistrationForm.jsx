import React from "react";

function handleSubmit(e) {
  e.preventDefault();
  e.stopPropagation();

  const elements = Array.from(e.currentTarget);

  const state = {};

  for (const el of elements) {
    if (el.name) {
      state[el.name] = el.value;
    }
  }

  console.log(state);
}

function RegistrationForm() {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Register</legend>
        <select id="salutation" name="salutation">
          <optgroup label="Category 1">
            <option value=""></option>
            <option label="Mr" value="Mr">
              "Mr."
            </option>
            <option label="Mrs" value="Mrs">
              "Mrs."
            </option>
          </optgroup>
        </select>
        <br />
        <label htmlFor="fname">First Name</label> &nbsp;
        <input id="fname" type="text" name="fname" pattern="[A-Za-z]" required title="Please specify the first name and using characters from a-z only"/>
        <br />
        <label htmlFor="lname">Last Name</label> &nbsp;
        <input id="lname" type="text" name="lname" pattern="[A-Za-z]" required title="Please specify the first name"/>
        <br />
        <label htmlFor="email">Email</label> &nbsp;
        <input id="email" type="email" name="email" />
      </fieldset>
      <input type="submit" value="Register" />
    </form>
  );
}

export default RegistrationForm;
