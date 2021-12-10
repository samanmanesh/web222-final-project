import Link from "next/link";
import Form from "../components/Form";
export default function Home() {
  return (
    <div className="wrapper md:mt-24">
      <main className="grid gap-16 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="mb-12">Contact me</h1>
          <p className=" text-2xl font-medium text-gray-700 mb-12 mx-auto md:ml-0 max-w-sm" >Want to work together? <br/> Just want to say hi? <br/> You can reach me &rarr;</p>
          
          <p className="text-xl font-medium text-gray-700 mb-12 mx-auto md:ml-0 max-w-sm"> Email: msobhanmanesh@myseneca.ca <br/>
          
          Toronto, North York </p>
          
        </div>
        <Form />
      </main>
    </div>
  );
}
