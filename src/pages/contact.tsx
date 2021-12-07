import Link from "next/link";

export default function Home() {
  return (
    <div className="wrapper md:mt-24">
      <main className="grid gap-16 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="mb-12">Contact me</h1>
          <div>Email: Samansbm7@gmail.com</div>
          <a href="">Github</a>
          <a href="">LinkedIn</a>
        </div>

        <form action="" className="grid gap-2" method="post">
          <div className="flex ">
            <div>
              <label>First name
              <input
                type="text"
                name="firstName"
                className="bg-gray-900 rounded text-white h-8"
                required
              />
              </label>
            </div>
            <div>
              <label >Last name
              <input
                type="text"
                name="lastName"
                className="bg-gray-900 rounded h-8"
                required
              />

              </label>
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="bg-gray-900 rounded  h-8" required />
          <label htmlFor="address">Address</label>
          <input type="address" className="bg-gray-900 rounded  h-8" required/>
          <label htmlFor="city">City</label>
          <input list="country" className="bg-gray-900 rounded  text-white" required/>
          <datalist id="country">
            <option value="Toronto" />
            <option value="New York" />
            <option value="London" />
            <option value="Rome" />
            <option value="Paris" />
            <option value="Istanbul" />
          </datalist>
          {/*regular expression for postal code */}

          <label >Postal Code
          <input type="text" name="postalCode" className="bg-gray-900 rounded  h-8 text-white" required  pattern="^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$"/>
          </label>
         

          <label htmlFor="state">Write me something</label>
          <textarea name="state" className="bg-gray-900 rounded text-white" />
            <div>
          <input type="radio" id="QA" name="about" value="Question"/>
          <label htmlFor="QA">Question</label><br />
          <input type="radio" id="CM" name="about" value="Comment"/>
          <label htmlFor="CM">Comment</label><br />
          <input type="radio" id="HI" name="about" value="Hiring"/>
          <label htmlFor="HI">Hiring</label><br />
          </div>

          <input type="submit" value="Submit" className="bg-gray-900 rounded text-white" />
          <input type="hidden" id="116523200" name="Mohammadhossein Sobhanmanesh" />
           {/* needs a hidden filed to have my name and student id */}

        </form>
      </main>
    </div>
  );
}
