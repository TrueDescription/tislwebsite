import React from "react";


export default function NewsSection() {
  return (
    <div className="container mx-auto my-12 px-4">
  <div className="row justify-center">
    <div className="section-heading col-12 mb-8 text-center">
      <h1 className="text-3xl font-bold">News</h1>
    </div>

    <div className="col-12">
      <ul className="space-y-6">
        <li className="text-lg leading-relaxed">
          <i className="fas fa-user mr-2" aria-hidden="true"></i>
          <strong>Sep 1, 2024</strong>,{' '}
          <a href="author/kai-he" className="text-blue-600 hover:underline">Kai He</a>,{' '}
          <a href="author/shuhong-zheng" className="text-blue-600 hover:underline">Shuhong Zheng</a>,{' '}
          <a href="author/justin-wu" className="text-blue-600 hover:underline">Justin Wu</a>,{' '}
          <a href="author/jasper-gerigk" className="text-blue-600 hover:underline">Jasper Gerigk</a>, and{' '}
          <a href="author/xunjiang-gu" className="text-blue-600 hover:underline">Alfred Gu</a> joined our lab as
          graduate students.
        </li>
        <li className="text-lg leading-relaxed">
          <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
          <strong>Aug 12, 2024</strong>, Our paper{' '}
          <a href="publication/202409-eccv-watch_steps" className="text-blue-600 hover:underline">Watch Your Steps</a>{' '}
          was selected for an Oral presentation at ECCV.
        </li>
        <li className="text-lg leading-relaxed">
          <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
          <strong>May 14, 2024</strong>, Our papers{' '}
          <a href="publication/202409-eccv-watch_steps" className="text-blue-600 hover:underline">Watch Your Steps</a>{' '}
          and{' '}
          <a href="publication/202409-eccv-acc_online_map" className="text-blue-600 hover:underline">
            Accelerating Online Mapping and Behavior Prediction
          </a>{' '}
          were accepted at ECCV.
        </li>
        <li className="text-lg leading-relaxed">
          <i className="fas fa-trophy mr-2" aria-hidden="true"></i>
          <strong>May 29, 2024</strong>, Our work on{' '}
          <a href="publication/202406-cvpr-lomutp" className="text-blue-600 hover:underline">
            Map Uncertainty in Trajectory Prediction
          </a>{' '}
          was selected as a Best Paper Finalist at CVPR.
        </li>
        <li className="text-lg leading-relaxed">
          <i className="fas fa-file-alt mr-2" aria-hidden="true"></i>
          <strong>May 14, 2024</strong>, Our papers on{' '}
          <a href="publication/202407-rlc-aux_tasks_in_rl" className="text-blue-600 hover:underline">
            Auxillary Tasks
          </a>{' '}
          and{' '}
          <a href="publication/202407-rlc-primacy_bias" className="text-blue-600 hover:underline">
            High Update Ratios
          </a>{' '}
          in Reinforcement Learning were accepted at RLC.
        </li>
      </ul>
    </div>
  </div>
</div>

  );
}
