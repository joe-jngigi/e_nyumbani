import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { collection, Firestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function App() {
  const [formData, setFormData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit
  const onSubmit = (data) => {
    console.log(data);
    if (!data) {
      console.log("no data to submit");
    }
    setFormData(data);
  };
  console.log(errors);

  useEffect(() => {
    // send data to firebase firestore
    const sendData = async () => {
      const productsData = await setDoc(
        doc(db, "products", "new-city-id"),
        formData
      );

      console.log("====================================");
      console.log("Boooom !!!", productsData);
      console.log("====================================");
      // console.log(productsData);
    };
    sendData();
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container p-5">
      <input
        class="form-control m-2"
        type="text"
        placeholder="name"
        {...register("name", { required: true, maxLength: 80 })}
      />

      <input
        class="form-control m-2"
        type="text"
        placeholder="price"
        {...register("price", { required: true, maxLength: 80 })}
      />

      <input
        class="form-control m-2"
        type="text"
        placeholder="company"
        {...register("company", { required: true, maxLength: 80 })}
      />

      <select
        class="form-select m-2"
        {...register("category", { required: true })}
      >
        <option value="Office">Office</option>
        <option value="Living room">Living room</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Dining">Dining</option>
        <option value="Bedroom">Bedroom</option>
      </select>

      <div class="mb-3 form-check m-2 ">
        <input
          class="form-check-input"
          // id="exampleCheck1"
          type="checkbox"
          placeholder="shipping"
          {...register("shipping", {})}
        />
        <label class="form-check-label" for="exampleCheck1">
          shipping
        </label>
      </div>

      <input
        class="form-control m-2"
        type="text"
        placeholder="image"
        {...register("image", { required: true, maxLength: 80 })}
      />

      <input
        class="form-control m-2"
        type="text"
        placeholder="description"
        {...register("description", { required: true, maxLength: 300 })}
      />

      <input class="btn btn-primary m-2" type="submit" />
    </form>
  );
}
