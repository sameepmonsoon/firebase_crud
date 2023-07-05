import { collection, getDocs } from "firebase/firestore";
import { firestoreDb } from "../../../Utils/Firebase";

async function fetchFAQ() {
  const allFAQData = await getDocs(collection(firestoreDb, "post"));
  const data = allFAQData?.docs?.map((doc) => doc);
  return data;
}

export { fetchFAQ };
