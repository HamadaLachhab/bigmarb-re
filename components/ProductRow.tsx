import Image from "next/image";
import { useRouter } from "next/router";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
function ProductRow({ product, setProducts }: any) {
  const router = useRouter();
  const { locale, defaultLocale, locales, pathname, query, asPath } = router;

  const onClick = () => {
    const docRef = doc(db, "products", product.id);

    deleteDoc(docRef)
      .then(() => {
        toast.success(" deleted");
      })
      .catch((error) => {
        toast.error("could not delete item");
      });

    setProducts((prev: any) => {
      let list = [];
      list = prev.filter((p: any) => p.id !== product.id);
      return list;
    });
  };
  return (
    <motion.tr
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <td className=" border-gray-200 bg-white text-sm relative">
        <Image
          src={product.image}
          layout="fill"
          alt="stone-image"
          objectFit="cover"
        />
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{product.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">{product.type}</span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
        <button
          onClick={onClick}
          className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
          {locale === "fr" ? "supp" : "delete"}
        </button>
      </td>
    </motion.tr>
  );
}

export default ProductRow;
