import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Witt - Personal Organizer Web Design</h1>
        <p className="mt-4">TVJ</p>
        <p className="mt-2">Available for work</p>
        <button className="mt-4 p-2 bg-blue-500 text-white rounded-md">Follow</button>
        <button className="mt-4 ml-4 p-2 bg-blue-500 text-white rounded-md">Get in touch</button>
        <div className="mt-8">
          <Image
            src="/design-preview.png"
            alt="Design Preview"
            width={600}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
      <div className="my-8 p-4 bg-gray-100 rounded-md">
        <p>Hola Designers :)</p>
        <p>Concept Design for a personal organizer and a tracker for all your work (kinda like Notion :p )</p>
        <p>Designed this as a 30-minute UI design challenge. Feel free to share your thoughts 🤘😁</p>
        <p>Reach out at tvj.xyz</p>
      </div>
      <div className="text-center my-8">
        <h2 className="text-2xl font-bold">More by TVJ</h2>
        <div className="flex flex-wrap justify-center">
          <div className="m-4 p-4 bg-white shadow-md rounded-lg w-60">
            <Image
              src="/project1.png"
              alt="Project 1"
              width={240}
              height={180}
              className="rounded-lg"
            />
            <h3 className="font-bold mt-2">SheCodes Website Re-design</h3>
            <p>app design code colors design illustration interface typography ui ux vector webdesign website website design</p>
          </div>
          <div className="m-4 p-4 bg-white shadow-md rounded-lg w-60">
            <Image
              src="/project2.png"
              alt="Project 2"
              width={240}
              height={180}
              className="rounded-lg"
            />
            <h3 className="font-bold mt-2">UI design - Smart Home App</h3>
            <p>app design dark mode dark ui design figma icon interface ios ios design minimal modern smarthome typography ui ux</p>
          </div>
          <div className="m-4 p-4 bg-white shadow-md rounded-lg w-60">
            <Image
              src="/project3.png"
              alt="Project 3"
              width={240}
              height={180}
              className="rounded-lg"
            />
            <h3 className="font-bold mt-2">Halloween Store app concept</h3>
            <p>app concept adobexd app dark theme design flat halloween halloween design ios logo typography ui ux vector</p>
          </div>
          <div className="m-4 p-4 bg-white shadow-md rounded-lg w-60">
            <Image
              src="/project4.png"
              alt="Project 4"
              width={240}
              height={180}
              className="rounded-lg"
            />
            <h3 className="font-bold mt-2">Branding - Seek Discomfort Notebook Mockup</h3>
            <p>brand design branding colorful design diary figmadesign ios logo minimalist logo mockup notebook cover typography</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
