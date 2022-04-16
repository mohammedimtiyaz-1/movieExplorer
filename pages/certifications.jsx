import React, { useState } from "react";
import cc from "../utils/countrycode";

function Certify({ certList }) {
  const [selected, setSelect] = useState("IN");
  const countries = Object.keys(certList);
  // .map((c) => cc[c])
  // .filter((c) => c);
  return (
    <div className="m-5">
      <p className="text-2xl mb-2 font-serif">
        Know the Certificatoin details by CountryWise
      </p>
      <div>
        <select
          className="w-1/5 p-2 text-white rounded-lg border-2 bg-gradient-to-r from-gray-800 to-gray-400 "
          name="cars"
          id="cars"
          value={selected}
          onChange={(e) => setSelect(e.target.value)}
        >
          {countries.map((c) => (
            <option
              key={c}
              className="w-1/5 rounded-lg border-2 bg-gradient-to-r from-gray-500 to-gray-100 text-black"
              value={c}
            >
              {cc[c]}
            </option>
          ))}
        </select>
        <div className="mt-4">
          {certList[selected] && (
            <table className="flex  justify-center border-2 m-2">
              <th className="font-extrabold text-xl">
                <tr>
                  <td>Type</td>
                  <td>Details</td>
                </tr>
                {certList[selected].map((cert) => (
                  <tr
                    className="text-[1rem] font-mono my-8 pt-4 font-light text-left border-t-[1px] border-gray-500"
                    key={cert.certification}
                  >
                    <td className="w-1/5 text-center font-bold text-lg">
                      {cert.certification}
                    </td>
                    <td>{cert.meaning}</td>
                  </tr>
                ))}
              </th>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const movCerts = await fetch(
    `https://api.themoviedb.org/3/certification/movie/list?api_key=${process.env.API_KEY}`
  );
  const res = await movCerts.json();
  console.log(res);
  return {
    props: {
      certList: res.certifications,
    },
  };
}

export default Certify;
