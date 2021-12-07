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
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                name="fname"
                className="bg-gray-900 rounded text-white h-8"
              />
            </div>
            <div>
              <label htmlFor="lname">Last name</label>
              <input
                type="text"
                name="lname"
                className="bg-gray-900 rounded h-8"
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input type="email" className="bg-gray-900 rounded  h-8" />
          <label htmlFor="address">Address</label>
          <input type="address" className="bg-gray-900 rounded  h-8" />
          <label htmlFor="city">City</label>
          <input list="country" className="bg-gray-900 rounded  text-white" />
          <datalist id="country">
            <option value="New York" />
            <option value="Rome" />
            <option value="London" />
            <option value="Paris" />
          </datalist>


          <label htmlFor="state">Write me something</label>
          <textarea name="state" className="bg-gray-900 rounded text-white" />
            <div>
          <input type="radio" id="QA" name="" value="Question"/>
          <label htmlFor="QA">Question</label><br />
          <input type="radio" id="CM" name="" value="Comment"/>
          <label htmlFor="CM">Comment</label><br />
          <input type="radio" id="HI" name="" value="Hiring"/>
          <label htmlFor="HI">Hiring</label><br />
          </div>

          <input type="submit" value="Submit" className="bg-gray-900 rounded text-white" />
          
           {/* needs a hidden filed to have my name and student id */}

        </form>
      </main>
    </div>
  );
}
