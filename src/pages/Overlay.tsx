import Section from "../components/Section";
import { OverlaySettingsType } from "../types";

export default function Overlay(props: { settings: OverlaySettingsType}) {
  return (
    <>
      <Section id="test"> Overlay (section)</Section>
      Position: {props.settings.position}
      Direction: {props.settings.direction}
    </>
  );
}