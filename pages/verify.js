import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router"; // Reemplaza useNavigate con useRouter de Next.js
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter(); // Usa useRouter para la navegación en Next.js

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otp) {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/verify-email/`,
          { otp }
        );
        const resp = res.data;
        if (res.status === 200) {
          router.push("/login"); // Reemplaza navigate con router.push
          toast.success(resp.message);
        }
      } catch (error) {
        console.error("Error verifying OTP", error);
        toast.error("Failed to verify OTP");
      }
    }
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className=" p-2">
          <form onSubmit={handleOtpSubmit}>
            <div className="form-group ">
              <label htmlFor="otp">Ingrese su codigo OTP:</label>
              <input
                type="text"
                className="form-control"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
