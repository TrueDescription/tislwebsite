import HomeNavbar from "@/components/home/HomeNavbar";
import Alumni from "@/components/people/Alumni";
import PeopleCard from "@/components/people/PeopleCard";
import Students from "@/components/people/Students";
import React from "react";

export default function People() {
  return (
    <div>
      <HomeNavbar />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold m-5">Meet The Team</h1>
        <div className="flex justify-center">
          <PeopleCard
            title="Assistant Professor"
            role="Principle Investigator"
            slug="lol"
            name="Igor Gilitschenski"
            link={
              "https://www.utm.utoronto.ca/math-cs-stats/sites/files/math-cs-stats/styles/square_l/public/faculty-staff-profile/photos/photo-igor_gilitschenski-square%20%283%29.jpg.webp?itok=3xMy0SZg"
            }
          />
        </div>
        <h1 className="text-4xl font-bold m-5">Graduate</h1>
        <div className="flex justify-center flex-wrap">
          <PeopleCard
            title={""}
            name={""}
            role={"PHD Student"}
            slug="google.com"
            link={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
          <PeopleCard
            title={""}
            name={""}
            role={"PHD Student"}
            slug="google.com"
            link={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
          <PeopleCard
            title={""}
            name={""}
            role={"PHD Student"}
            slug="google.com"
            link={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
          <PeopleCard
            title={""}
            name={""}
            role={"PHD Student"}
            slug="https://google.com"
            link={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
          <PeopleCard
            title={""}
            name={""}
            role={"PHD Student"}
            slug="google.com"
            link={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        </div>
        <h1 className="text-4xl font-bold m-5">Alumni</h1>
        <div className="flex justify-center flex-wrap">
          <PeopleCard
            title={""}
            name={""}
            role={"Alumni"}
            slug="google.com"
            link={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
          <PeopleCard
            title={""}
            name={""}
            role={"Alumni"}
            slug="google.com"
            link={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
          <PeopleCard
            title={""}
            name={""}
            role={"Alumni"}
            slug="google.com"
            link={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        </div>
        <Students />
        <Alumni />
      </div>
    </div>
  );
}
