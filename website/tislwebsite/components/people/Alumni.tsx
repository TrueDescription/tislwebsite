import React from "react";

export default function Alumni() {
  return (
    <div className="container mx-auto my-12 px-4">
      <div className="row justify-center">
        <div className="section-heading col-12 mb-6 text-center">
          <h1 className="text-3xl font-bold">Alumni</h1>
        </div>

        <div className="col-12">
          <h2
            id="past-undergraduate-and-mscac-students"
            className="text-2xl font-semibold mb-4"
          >
            Past Undergraduate and MScAC Students
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li>
              <a
                href="https://kanavsinglaa.github.io/"
                target="_blank"
                rel="noopener"
                className="text-blue-600 hover:underline"
              >
                Kanav Singla
              </a>{" "}
              (EngSci, 2022 - 2024)
            </li>
            <li>Robert Ren (PEY, 2023 - 2024)</li>
            <li>Mahesh Jaysankar (MScAC, 2023 - 2024)</li>
            <li>
              <a
                href="https://tianshukuai.github.io/"
                target="_blank"
                rel="noopener"
                className="text-blue-600 hover:underline"
              >
                Tianshu Kuai
              </a>{" "}
              (MScAC, 2022 - 2023, next position: PhD@Montréal)
            </li>
            <li>
              Guanyu Song (2022 - 2024, next position: Software Eng.@WeRide)
            </li>
            <li>Xunjiang Gu (EngSci, 2023 - 2024, next position: PhD@UofT)</li>
            <li>Jasper Gerigk (2023 - 2024, next position: PhD@UofT)</li>
            <li>Fei Yu Guan (2023 - 2024)</li>
            <li>
              Xudong Liu (MScAC, 2022 - 2023, next position: ML Eng.@TikTok)
            </li>
            <li>Jiachen Xu (2023)</li>
            <li>Solomon Asad (2023)</li>
            <li>
              Kajanan Chinniah (EngSci, 2022-2023, next position: Robotics
              Eng.@NVIDIA)
            </li>
            <li>Kelvin Cui (EngSci, 2022-2023, next position: MSc.@UTIAS)</li>
            <li>Lu Wuyue (2022 - 2023)</li>
            <li>Wenyue Deng (MScAC, 2022)</li>
            <li>Soroush Farghadani (MScAC, 2022)</li>
            <li>Zhihao Sheng (MScAC, 2021-2022)</li>
            <li>
              Andrei Ivanovic (EngSci, 2021-2022, next position: UofT CS MSc.)
            </li>
            <li>Yihan “Nick” Ni (EngSci, 2021-2022)</li>
          </ul>

          <h2 id="past-visitors" className="text-2xl font-semibold mt-8 mb-4">
            Past Visitors
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li>Mark Yarovski (DCS/RI Ukraine Program, 2023)</li>
            <li>Aayush Jain (MITACS Globalink Intern, 2023)</li>
            <li>Viswesh Nagaswamy (MITACS Globalink Intern, 2023)</li>
            <li>Prerit Paliwal (MITACS Globalink Intern, 2023)</li>
            <li>Victoria Kovalenko (UofT DCS Ukraine Program, 2022-2023)</li>
            <li>Akash Karthikeyan (MITACS Globalink Intern, 2022)</li>
            <li>
              Dr.-Ing. Ömer&nbsp;Şahin&nbsp;Taş&nbsp;(KIT, Visiting Graduate
              Student, 2022)
            </li>
            <li>
              Felix Taubner (ETH, Master Thesis, 2021-2022, Next Position: AI
              Research Scientist, LG Electronics)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
