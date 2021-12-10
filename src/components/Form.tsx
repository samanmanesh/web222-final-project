import React, { ReactElement, useState } from "react";

export default function Form(): ReactElement {
  const [showField, setShowField] = useState(false);
  const hideField = (): void => setShowField(false);
  const cities = [
    "Toronto",
    "Ottawa",
    "Quebec",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Edmonton",
    "Winnipeg",
    "Victoria",
  ];

  return (
    <div>
      <form
        action="https://httpbin.org/post"
        className="grid gap-y-4 gap-x-8 md:grid-cols-2"
        method="post"
      >
        <label className="grid">
          First name
          <input type="text" name="firstName" required />
        </label>

        <label className="grid">
          Last name
          <input type="text" name="lastName" required />
        </label>

        <label className="grid md:col-span-2">
          Email
          <input type="email" name="email" id="email" required />
        </label>
        <label className="grid md:col-span-2">
          Address
          <input type="address" required />
        </label>

        <label className="grid">
          City
          <input list="city" required type="text" />
          <datalist id="city">
            {cities.map((city) => {
              return <option value={city} key={city} />;
            })}
          </datalist>
        </label>

        <label className="grid ">
          Postal Code
          <input
            type="text"
            name="postalCode"
            required
            pattern="^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$"
          />
        </label>
        <label className="grid md:col-span-2">
          Write me something
          <textarea name="message" className="h-36 outline-none" />
        </label>
        <div>
          <input
            type="radio"
            id="QA"
            name="about"
            value="Question"
            onClick={hideField}
            className=" form-radio text-red-400  mx-2 border-2 border-black"
            required
          />
          <label htmlFor="QA">Question</label>
          <br />
          <input
            type="radio"
            id="CM"
            name="about"
            value="Comment"
            onClick={hideField}
            className="form-radio text-red-400  mx-2 border-2 border-black"
            required
          />
          <label htmlFor="CM">Comment</label>
          <br />
          <input
            type="radio"
            id="HI"
            name="about"
            onClick={() => setShowField(true)}
            value="Hiring"
            className=" form-radio text-red-400  mx-2 border-2 border-black"
            required
          />
          <label htmlFor="HI">Hiring</label>
          <br />
        </div>
        <label htmlFor="subject" className={!showField ? "hidden" : "grid md:col-span-2"}>
          Hourly Rate
        
        <input
          type="number"
          name="subject"
          className={
            !showField
              ? "hidden"
              : "bg-secondbg rounded text-white outline-none  focus:ring-2 focus:ring-red-400  md:col-span-2"
          }
          min="1" step="any"
        />
        </label>
        <input
          type="submit"
          value="Submit"
          className="px-4 py-2 rounded cursor-pointer text-bg-secondbg text-lg font-semibold border-4  border-secondbg  self-end md:col-span-2 focus:bg-red-400 hover:bg-red-400 outline-none focus:text-white transition"
        />
        <input
          type="hidden"
          id="hiddenInput"
          name="Mohammadhossein Sobhanmanesh"
          value="id is-> 116523200"
        />
      </form>
    </div>
  );
}
