import { useState } from "react";
import about from "../data/about";
import ExpandButton from "./ExpandButton";

function Biography() {

  const [expanded, setExpanded] = useState(false);

  return (

    <div className="biography">

      <p>

        {expanded ? about.fullBio : about.shortBio}

      </p>

      <ExpandButton
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />

    </div>

  );
}

export default Biography;