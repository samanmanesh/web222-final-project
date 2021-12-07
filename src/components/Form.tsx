import React, { ReactElement, useState, useRef } from "react";

export default function Form(): ReactElement {
  const [showField, setShowField] = useState(false);
  const hideField = (): void => setShowField(false);

  return (
    <div>
      <form
        action=""
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
          <input list="country" required type="text" />
          <datalist id="country">
            <option value="Toronto" />
            <option value="New York" />
            <option value="London" />
            <option value="Rome" />
            <option value="Paris" />
            <option value="Istanbul" />
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
          <textarea name="state" className="h-36 outline-none" />
        </label>
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
          className={
            !showField
              ? "hidden"
              : "bg-secondbg rounded text-white outline-none  focus:ring-2 focus:ring-red-400  md:col-span-2"
          }
        />
        <input
          type="submit"
          value="Submit"
          className="px-4 py-2 rounded cursor-pointer text-bg-secondbg text-lg font-semibold border-4  border-secondbg  self-end md:col-span-2 focus:bg-red-400 outline-none focus:text-white transition"
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
