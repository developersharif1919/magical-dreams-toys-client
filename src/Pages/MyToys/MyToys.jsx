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
  },[myToys]);

  const handleDelete = id =>{
    const procced = confirm('sure to delete');
    if(procced){
           fetch(`http://localhost:5000/mytoys/${id}`,{
            method:'DELETE'
           })
           .then(res => res.json())
           .then(data => {
              if(data.deletedCount > 0 ){
                alert('Delete Succussful')
                const remaining = myToys.filter(myToys => myToys.id !== id)
                setMyToys(remaining)
              }
           } )
    }

}



  return (
    <div>
        {
          myToys.map((toys,index)=><DisplayMyToys key={index} toys={toys} handleDelete={handleDelete}></DisplayMyToys>)
        }
    </div>
  );
};

export default MyToys;
