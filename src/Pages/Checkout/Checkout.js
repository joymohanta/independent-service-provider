import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Checkout = () => {
  const user = useAuthState(auth);
  return (
    <div>
      <h1 className="text-center my-5">Checkout Service Page</h1>
      <h6 className="text-center">User Email:{user.email}</h6>
      <p className="text-center">{user.uid}</p>
      <h2 className="text-center mt-5">Declaration</h2>
      <p className="text-center mt-3">
        I only serve to those person who are interested by themselve and not
        provoked by anybody. <br />
        Though there few conditions are applied that have to be remember to the
        patient and if any casulty happen <br /> patient will have to
        responsible for that.
      </p>
    </div>
  );
};

export default Checkout;
