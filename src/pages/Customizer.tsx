import { useState } from "react";
import Section from "../components/Section";
import SideBySide from "../components/SideBySide";
import { H1H1 } from "../components/Text";
import Overlay from "./Overlay";
import { Controls } from "./customizer/Controls";
import { IOverlaySettingsType } from "../types";
import css from "../styles/pages/customizer.module.css"

export default function Customizer() {
  const [settings, setSettings] = useState<IOverlaySettingsType>({
    position: "tc",
    direction: "tb",
    animations: [],
  });
  return (
    <>
      <Section id="customizer">
        <H1H1>Create a custom overlay</H1H1>
        <SideBySide leftWidth="1fr">
          <div className={css.overlay}>
            <Overlay settings={settings} />
          </div>
          <Controls setSettings={setSettings} settings={settings} />
        </SideBySide>
      </Section>
      Customizer
    </>
  );
}
