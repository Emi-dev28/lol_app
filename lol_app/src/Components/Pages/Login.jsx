import React, { useEffect, useRef, useState } from "react";
import "../../Styles/log_in.css";
import { CiUser } from "react-icons/ci";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Context/context";

function validate(){
  const[error, setError] = useState(null);
  const isFirstInput = useRef(true)
  const[field, setField] = useState("")
  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current = field === ""
      return;
    }
    if(field === " ") {
      return 
    }
    if(field.length < 3){
      setError(" No es posible ingresar un usuario con menos de tres caracteres") 
    }
    if(field.startsWith(" ")){
      return
    }
    if(field.length > 20){
      setError("No se puede ingresar un usuario con mas de 20 caracteres")
    }
    if(field.match("\[^\x00-\x7F]+\ *(?:[^\x00-\x7F]| )*\g")){
      setError("Character not allowed")
    }
    setError(null)
  },[field])
  return { field, setField, error }
}
const Log_in = () => {
  const [loading, setLoading] = useState(false);
  const { user} = useContextGlobal()
  console.log(user)
  const handleButton = (button) => {
    button.preventDefault();
    setLoading(true);
  };
  const {field, setField, error} = validate()

  const handlerChange = (e) => {
    const newField = e.target.value;
    setField(newField)
  }

  return (
    <div className="bg_img h-screen w-full flex flex-col justify-center items-center">
      <form className="flex flex-col justify-center items-center gap-9 w-3/6 ">
        <label className="text-white flex flex-col transition-shadow p-2 items-start w-1/ ">
          <span className="pb-2 text-xl font-semibold text-[#379392] font-sans">
            Ingresa tu Usuario
          </span>
          <input
            onChange={handlerChange}
            name="User"
            value={field}
            className=" rounded-md p-1.5 w-full text-black "
            type="text"
            placeholder="laxusdestroyer71"
          />
        </label>
        <label className="text-black flex flex-col ">
          <span className="pb-2 text-xl font-semibold text-[#379392] font-sans">
            Ingresa tu Contraseña
          </span>
          <input
          name="Password"
          className="rounded-md p-1.5 "
          type="password" placeholder="*********" />
        </label>
        <span className="text-white pb-2 text-lg flex justify-around gap-4">
          No tenes cuenta?{" "}
          <Link to="register">
            <Button
              color="secondary"
              size="sm"
              onClick={handleButton}
              endContent={<CiUser />}e3
            >
              Registrate
            </Button>
          </Link>
        </span>
        {error && <span className=" text-red-700"> {error} </span> }
      </form>
    </div>
  );
};

export default Log_in;
