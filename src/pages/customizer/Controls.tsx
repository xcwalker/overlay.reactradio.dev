import { Dispatch, SetStateAction } from "react";
import { OverlaySettingsType } from "../../types";
import PositionSelector from "./PositionSelector";
import Stack from "../../components/Stack";
import { AnimationStack } from "./AnimationsStack";

export function Controls(props: { setSettings: Dispatch<SetStateAction<OverlaySettingsType>>; settings: OverlaySettingsType }) {
  return (
    <Stack direction="column" gap="0.5rem">
      <PositionSelector setSettings={props.setSettings} settings={props.settings} />
      <AnimationStack setSettings={props.setSettings} settings={props.settings} />
    </Stack>
  );
}
