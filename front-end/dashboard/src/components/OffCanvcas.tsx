import { Sidebar } from "primereact/sidebar";
import { useState } from "react";

export default function OffCanvas(): JSX.Element {
  const [visible, setVisible] = useState(false);
  return (
    <div className="card flex justify-content-center">
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Sidebar</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Sidebar>

      <button className="pi pi-arrow-right" onClick={() => setVisible(true)}>
        a
      </button>
    </div>
  );
}
