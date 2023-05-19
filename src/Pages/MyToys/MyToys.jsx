import{ useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import DisplayMyToys from "../../components/DisplayMyToys/DisplayMyToys";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const url = `http://localhost:5000/mytoys?sellerEmail=${user.email}`;

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const subcategoryToys = data.flatMap(toy => toy.subcategories);
      setMyToys(subcategoryToys);
    })
  },[])

  console.log('myUsdfdser',myToys)



  return (
    <div>
        {
          myToys.map((toys,index)=><DisplayMyToys key={index} toys={toys}></DisplayMyToys>)
        }
    </div>
  );
};

export default MyToys;
