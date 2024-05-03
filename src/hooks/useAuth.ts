import { auth } from "../config/firebase";

const useAuth = () => ({ userEmail: auth?.currentUser?.email });

export default useAuth;
