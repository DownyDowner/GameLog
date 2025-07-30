import React from "react";
import { PlatformList } from "../../../../models/PlatformList";

interface PlatformsListProps {
  platforms: PlatformList[];
}

const PlatformsList: React.FC<PlatformsListProps> = ({ platforms }) => {
  return (
    <div className="row">
      {platforms.map((platform) => (
        <div key={platform.id} className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{platform.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlatformsList;
