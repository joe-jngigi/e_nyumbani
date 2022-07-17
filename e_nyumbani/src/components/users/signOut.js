import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

signOut(auth)
  .then(() => {
    console.log("logged out");
    // navigate("/");
  })
  .catch((error) => {
    console.log(error);
  });
