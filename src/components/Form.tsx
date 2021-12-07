import React, { ReactElement, useState, useRef } from "react";

export default function Form(): ReactElement {
  const [showField, setShowField] = useState(false);
  const hideField = (): void => setShowField(false);

  return (
    <div>
      <form action="" className="grid gap-2 " method="post" >
        <div className=" md:flex ">
            <label className="grid md:flex-auto md:mr-5 ">
              First name
              <input
                type="text"
                name="firstName"
                className="bg-secondbg rounded text-white h-9 outline-none  focus:ring-2 focus:ring-red-400 "
                required
              />
            </label>

            <label className="grid md:flex-auto ">
              Last name
              <input
                type="text"
                name="lastName"
                className="bg-secondbg rounded text-white h-9 outline-none  focus:ring-2 focus:ring-red-400"
                required
              />
            </label>

        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-secondbg rounded text-white h-9 outline-none  focus:ring-2 focus:ring-red-400"
          required
        />
        <label htmlFor="address">Address</label>
        <input type="address" className="bg-secondbg rounded  h-9 outline-none  focus:ring-2 focus:ring-red-400" required  />
        <label htmlFor="city">City</label>
        <input
          list="country"
          className="bg-secondbg rounded  text-white outline-none h-9 focus:ring-2 focus:ring-red-400"
          required
        />
        <datalist id="country">
          <option value="Toronto" />
          <option value="New York" />
          <option value="London" />
          <option value="Rome" />
          <option value="Paris" />
          <option value="Istanbul" />
        </datalist>
        {/*regular expression for postal code */}

        <label>
          Postal Code
          <input
            type="text"
            name="postalCode"
            className="bg-secondbg rounded  h-9 text-white outline-none  focus:ring-2 focus:ring-red-400"
            required
            pattern="^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$"
          />
        </label>

        <label htmlFor="state">Write me something</label>
        <textarea name="state" className="bg-secondbg rounded text-white h-14" />
        <div>
          <input
            type="radio"
            id="QA"
            name="about"
            value="Question"
            onClick={hideField}
          />
          <label htmlFor="QA">Question</label>
          <br />
          <input
            type="radio"
            id="CM"
            name="about"
            value="Comment"
            onClick={hideField}
          />
          <label htmlFor="CM">Comment</label>
          <br />
          <input
            type="radio"
            id="HI"
            name="about"
            onClick={() => setShowField(true)}
            value="Hiring"
          />
          <label htmlFor="HI">Hiring</label>
          <br />
        </div>
        <input
          
          type="text"
          className={!showField ? "hidden" : "bg-secondbg rounded  h-9 text-white outline-none  focus:ring-2 focus:ring-red-400"}
        />

        <input
          type="submit"
          value="Submit"
          className="bg-secondbg rounded text-white"
        />
        <input
          type="hidden"
          id="116523200"
          name="Mohammadhossein Sobhanmanesh"
        />

      </form>
    </div>
  );
}
