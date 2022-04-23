import React, { useState } from "react";
import cc from "../utils/countrycode";

function Certify({ certList }) {
  const [selected, setSelect] = useState("IN");
  const countries = Object.keys(certList);
  // .map((c) => cc[c])
  // .filter((c) => c);
  return (
    <div className="m-5">
      <p className="mb-2 font-serif text-xl md:text-2xl">
        Know the Certificatoin details by CountryWise
      </p>
      <div>
        <select
          className="w-1/2 p-2 text-white border-2 rounded-lg md:w-1/5 bg-gradient-to-r from-gray-800 to-gray-400"
          name="cars"
          id="cars"
          value={selected}
          onChange={(e) => setSelect(e.target.value)}
        >
          {countries?.length &&
            countries.map((c) => (
              <option
                key={c}
                className="w-1/5 text-black border-2 rounded-lg bg-gradient-to-r from-gray-500 to-gray-100"
                value={c}
              >
                {cc[c]}
              </option>
            ))}
        </select>
        <div className="mt-4">
          {certList[selected] && (
            <table className="flex justify-center m-2 border-2">
              <th className="text-xl font-extrabold">
                <tr>
                  <td>Type</td>
                  <td>Details</td>
                </tr>
                {certList[selected]?.length > 0 &&
                  certList[selected].map((cert) => (
                    <tr
                      className="text-[1rem] font-mono my-8 pt-4 font-light text-left border-t-[1px] border-gray-500"
                      key={cert.certification}
                    >
                      <td className="w-1/5 text-lg font-bold text-center">
                        <p className="flex items-center justify-center">
                          {cert.certification}
                        </p>
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
  // console.log(res);
  return {
    props: {
      certList: res.certifications,
    },
  };
}

export default Certify;
