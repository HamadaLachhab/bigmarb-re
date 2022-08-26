import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { auth, db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import ProductTable from "../components/producttable";
function admindashboard() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [stoneType, setStoneType] = useState("");
  const [stoneName, setStoneName] = useState("");
  const [imageupload, setImageupload] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      } else {
        router.push("/login");
      }
    });
  }, []);

  //submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (imageupload == null || !stoneType || !stoneName) {
      toast.error("all field are required");
      return;
    }
    //image upload
    const storeImage = async (image: any) => {
      return new Promise((resolve, reject) => {
        const name = new Date().getTime() + stoneName;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            console.log("upload succeed");
          },
          (error) => {
            reject(error);
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    //add
    try {
      const url = await storeImage(imageupload);

      await addDoc(collection(db, "products"), {
        name: stoneName,
        type: stoneType,
        image: url,
        timeStamp: serverTimestamp(),
      });
      toast.success("successful upload");
    } catch (e) {
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <div className="flex flex-col w-screen justify-start items-center">
        <h1 className="text-6xl text-center py-4"> Welcome Back </h1>
        <form className="w-3/5" onSubmit={handleSubmit}>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
              required
              onChange={(event) => setStoneName(event.target.value)}
              value={stoneName}
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Stone name
            </label>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"></label>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Select stone type
            </label>
            <select
              onChange={(event) => setStoneType(event.target.value)}
              value={stoneType}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="marble">marble</option>
              <option value="granite">granite</option>
              <option value="basalt">basalt</option>
              <option value="artwork">artwork</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Upload Image
            </label>
            <input
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              onChange={(e: any) => {
                setImageupload(e.target.files[0]);
              }}
            />
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              make sure the picture is in jpeg format
            </div>
            <div className="my-6 flex justify-center items-center">
              <button
                type="submit"
                className="text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium   w-full sm:w-auto px-5 py-2.5 text-center "
              >
                add product
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default admindashboard;
