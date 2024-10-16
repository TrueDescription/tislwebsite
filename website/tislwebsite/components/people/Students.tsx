import React from 'react';

export default function Students() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="section-heading col-12 mb-3 text-center">
          <h1 className="mb-0">Students, (Remote) Interns, and Visitors</h1>
        </div>

        <div className="col-12">
          <h2 id="undergraduate-and-mscac-students">Undergraduate and MScAC Students</h2>
          <ul>
            <li>Justin Lim (since 2023)</li>
            <li>Sinclair Hudson (MScAC, since 2024)</li>
            <li>Kareem Elswah (MScAC, since 2024)</li>
            <li>Sebastian Regalado (MScAC, since 2024)</li>
            <li>Itay Kozlov (MScAC, since 2024)</li>
            <li>Yuyang Tang (MScAC, since 2024)</li>
            <li>Qi Fang (MScAC, since 2024)</li>
            <li>Xiao Zhang (EngSci, since 2024)</li>
            <li>Ian Vyse (EngSci, since 2024)</li>
            <li>Ellina Zhang (EngSci, since 2024)</li>
            <li>Lulu Wei (since 2024)</li>
            <li>Brian Chen (since 2024)</li>
            <li>Koichi Namekata (since 2024)</li>
          </ul>

          <h2 id="visitors">Visitors</h2>
          <ul>
            <li>Anastasia Pedan (DCS/RI Ukraine Program, since 2023)</li>
            <li>Toshiya Yura (Sony, Visiting Researcher, since 2023)</li>
            <li>
              <a href="https://fudanyliu.github.io/" target="_blank" rel="noopener">
                Yang Liu
              </a>{' '}
              (Fudan University, Visiting Graduate Student, since 2023)
            </li>
            <li>Eugen Ernst (University of Stuttgart, Visiting Graduate Student, since 2024)</li>
            <li>Paula Wulkop (ETH, Visiting Graduate Student, since 2024)</li>
            <li>Axel Brunnbauer (Technical University Vienna, Visiting Graduate Student, since 2024)</li>
            <li>Marcel Hallgarten (University of Tübingen, Visiting Graduate Student, since 2024)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
