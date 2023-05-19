import{ useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await fetch(`http://localhost:5000/mytoys/${user.email}`);
        const data = await response.json();
        setToys(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchToys();
  }, [user]);
  console.log(toys);

  return (
    <div>
      <h2>My Toys</h2>
      {toys.map((toy) => (
        <div key={toy._id}>
          <h3>{toy.name}</h3>
          <p>{toy.category}</p>
          <p>{toy.price}</p>
          <p>{toy.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default MyToys;
