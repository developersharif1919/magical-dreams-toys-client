import{ useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import DisplayMyToys from "../../components/DisplayMyToys/DisplayMyToys";
import Swal from 'sweetalert2'

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const url = `http://localhost:5000/mytoys?sellerEmail=${user.email}`;

  useEffect(()=>{
    document.title = "MDT | My Toys";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const subcategoryToys = data.flatMap(toy => toy.subcategories);
      setMyToys(subcategoryToys);
    })
  },[myToys]);

  const handleDelete = id =>{
    Swal.fire({
      icon: 'question',
      title: 'Are you sure?',
      text: 'Are you sure? you want to delete?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoys/${id}`,{
          method:'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount > 0 ){
              Swal.fire({
                title: 'Success!',
                text: 'Deleted Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              const remaining = myToys.filter(myToys => myToys.id !== id)
              setMyToys(remaining)
            }
         } )
      }
    });
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
