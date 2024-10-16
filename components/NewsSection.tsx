import React from "react";


export default function NewsSection() {
  return (
    <div className="row justify-content-center">
      <div className="section-heading col-12 mb-3 text-center">
        <h1 className="mb-0">News</h1>
      </div>

      <div className="col-12">
        <ul>
          <li>
            <i className="fas fa-user" aria-hidden="true"></i>{' '}
            <strong>Sep 1, 2024</strong>,{' '}
            <a href="author/kai-he">Kai He</a>,{' '}
            <a href="author/shuhong-zheng">Shuhong Zheng</a>,{' '}
            <a href="author/justin-wu">Justin Wu</a>,{' '}
            <a href="author/jasper-gerigk">Jasper Gerigk</a>, and{' '}
            <a href="author/xunjiang-gu">Alfred Gu</a> joined our lab as
            graduate students.
          </li>
          <li>
            <i className="fas fa-file-alt" aria-hidden="true"></i>{' '}
            <strong>Aug 12, 2024</strong>, Our paper{' '}
            <a href="publication/202409-eccv-watch_steps">Watch Your Steps</a>{' '}
            was selected for an Oral presentation at ECCV.
          </li>
          <li>
            <i className="fas fa-file-alt" aria-hidden="true"></i>{' '}
            <strong>May 14, 2024</strong>, Our papers{' '}
            <a href="publication/202409-eccv-watch_steps">Watch Your Steps</a>{' '}
            and{' '}
            <a href="publication/202409-eccv-acc_online_map">
              Accelerating Online Mapping and Behavior Prediction
            </a>{' '}
            were accepted at ECCV.
          </li>
          <li>
            <i className="fas fa-trophy" aria-hidden="true"></i>{' '}
            <strong>May 29, 2024</strong>, Our work on{' '}
            <a href="publication/202406-cvpr-lomutp">
              Map Uncertainty in Trajectory Prediction
            </a>{' '}
            was selected as a Best Paper Finalist at CVPR.
          </li>
          <li>
            <i className="fas fa-file-alt" aria-hidden="true"></i>{' '}
            <strong>May 14, 2024</strong>, Our papers on{' '}
            <a href="publication/202407-rlc-aux_tasks_in_rl">
              Auxillary Tasks
            </a>{' '}
            and{' '}
            <a href="publication/202407-rlc-primacy_bias">
              High Update Ratios
            </a>{' '}
            in Reinforcement Learning were accepted at RLC.
          </li>
        </ul>
      </div>
    </div>
  );
}
