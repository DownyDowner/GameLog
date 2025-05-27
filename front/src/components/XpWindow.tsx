import { Icon } from "@mdi/react";
import { mdiMinus, mdiWindowMaximize, mdiClose } from "@mdi/js";
import { ReactNode } from "react";

type XpWindowProps = {
  title: string;
  children: ReactNode;
  onClose?: () => void;
};

function XpWindow({ title, children, onClose }: XpWindowProps) {
  return (
    <div className="xp-window p-2 mt-2 w-75">
      <div className="xp-title-bar d-flex justify-content-between align-items-center">
        <span>{title}</span>
        <div>
          <button className="xp-title-button btn btn-sm p-0 mx-1">
            <Icon path={mdiMinus} size={0.6} />
          </button>
          <button className="xp-title-button btn btn-sm p-0 mx-1">
            <Icon path={mdiWindowMaximize} size={0.6} />
          </button>
          <button
            className="xp-title-button btn btn-sm p-0 mx-1 xp-close-button"
            onClick={onClose}
          >
            <Icon path={mdiClose} size={0.6} />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default XpWindow;
