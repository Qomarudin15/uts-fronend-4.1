import React from "react";
import { Navbar } from "../../navbar/navbar"


const home = () => {
  return (
    <div>
        <Navbar />
          <div className="mask" style={{backgroundColor: "transparent"}}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3"> Altruist Consulting </h1>
                <p>menjelaskan tentang konsep untuk mengindentifikasi mesin kecerdasan dan karakter manusia berdasarkan sistem operasi otak yang dominan dengan cara memindai sidik jari yang disebut dengan Tes Altruist. Tes Altruist dilakukan dengan cara men-scan kesepuluh ujung jari Anda, mengambil waktu tidak lebih dari 1 menit. Sidik jari yang membawa informasi tentang komposisi susunan syaraf tersebut kemudian dianalisa dan dihubungkan dengan belahan otak tertentu yang dominan berperan sebagai sistem operasi (mesin kecerdasan) dan personaliti genetik Anda.</p>

                <h2>Kontak saya</h2>
                <p>Email: johnrudy87@gmail.com</p>
                <p>Phone:083111605685</p>
                
                </div></div></div></div>
  );
};

export default home;