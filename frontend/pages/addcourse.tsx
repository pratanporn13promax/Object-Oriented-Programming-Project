import Head from "next/head";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AddChapterForm from "../components/AddChapterForm";

export default function AddCoursePage() {
  const [cookies, setCookie, removeCookie] = useCookies(["user", "role"]);
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("");
  const [purpose, setPurpose] = useState("");
  const [chapters, setChapters] = useState([]);
  const [requirement, setRequirement] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState("");
  const [price, setPrice] = useState("");
  const [promotion, setPromotion] = useState("");
  const [info, setInfo] = useState("");
  const [categories, setCategories] = useState([]);
  const [listCategories, setListCategories] = useState([]);
  const [instructor, setInstructor] = useState({ _name: "Anonymous" });
  useEffect(() => {
    if (!cookies.user || cookies.role !== "Instructor") {
      Router.push("/");
    }
  }, []);
  const getUser = async () => {
    const res = await fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: cookies.user,
      }),
    });
    let data = await res.json();
    setInstructor(data);
    console.log(data);
  };
  const handleSubmit = async (event) => {
    console.log(JSON.stringify({
      name: name,
      short_description: shortDescription,
      language: language,
      purpose: purpose,
      chapters: chapters,
      requirement: requirement,
      description: description,
      target: target,
      price: price,
      promotion: promotion,
      info: info,
      categories: categories,
      instructor: instructor._name,
    }))
    event.preventDefault();
    const res = await fetch("http://localhost:8000/course/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        short_description: shortDescription,
        language: language,
        purpose: purpose,
        chapters: chapters,
        requirement: requirement,
        description: description,
        target: target,
        price: Number(price),
        promotion: promotion,
        info: info,
        categories: categories,
        instructor: instructor._name,
      }),
    });
    let data = await res.json();
    console.log(data);
  };

  const handleAddChapter = (newChapter) => {
    setChapters([...chapters, newChapter]);
  };
  const getCategories = async () => {
    const res = await fetch("http://localhost:8000/category");
    const data = await res.json();
    console.log(data);
    setListCategories(data);
  };


  useEffect(() => {
    getUser();
    getCategories();
  }, []);

  return (
    <>
      <Head>
        <title>Udemy Register Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            AddCoursePage
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-10 px-6 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block font-bold mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="short-description"
                  className="block font-bold mb-1"
                >
                  Short Description
                </label>
                <textarea
                  id="short-description"
                  name="short-description"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  rows={2}
                  className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

          

              <div className="mb-6">
                <label htmlFor="language" className="block font-bold mb-1">
                  Language
                </label>
                <input
                  type="text"
                  id="language"
                  name="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="purpose" className="block font-bold mb-1">
                  Purpose
                </label>
                <textarea
                  id="purpose"
                  name="purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  rows={2}
                  className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">Chapters:</h2>
                <ul className="list-disc ml-6">
                  {chapters.map((chapter) => (
                    <li key={chapter.id}>{chapter.name}</li>
                  ))}
                </ul>
              </div>
              <AddChapterForm onAddChapter={handleAddChapter} />


              <div className="mb-6 mt-5">
                <label htmlFor="requirement" className="block font-bold mb-1">
                  Requirement
                </label>
                <textarea
                  id="requirement"
                  name="requirement"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  rows={2}
                  className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block font-bold mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="target" className="block font-bold mb-1">
                  Target
                </label>
                <textarea
                  id="target"
                  name="target"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  rows={2}
                  className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="price" className="block font-bold mb-1">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            

              <div className="mb-6">
                <label htmlFor="info" className="block font-bold mb-1">
                  Additional Information
                </label>
                <textarea
                  id="info"
                  name="info"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                  rows={2}
                  className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="categories" className="block font-bold mb-1">
                  Categories
                </label>
                <select
                  id="categories"
                  name="categories"
                  value={categories}
                  onChange={(e) =>
                    setCategories(
                      Array.from(
                        e.target.selectedOptions,
                        (option) => option.value
                      )
                    )
                  }
                  className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {listCategories && listCategories.map((category) =>(<option value={category._Categories__name}>{category._Categories__name}</option>))}
                  
                </select>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4  rounded  hover:bg-blue-800 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
