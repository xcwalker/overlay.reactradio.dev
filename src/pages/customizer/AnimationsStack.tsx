import { Dispatch, Fragment, SetStateAction, useEffect } from "react";
import { OverlaySettingsType } from "../../types";
import css from "../../styles/components/animationStack.module.css";
import Stack from "../../components/Stack";
import Button from "../../components/Button";

export function AnimationStack(props: { setSettings: Dispatch<SetStateAction<OverlaySettingsType>>; settings: OverlaySettingsType }) {
  useEffect(() => {
    const buttons = document.getElementsByClassName(css.button);

    for (let index = 0; index < buttons.length; index++) {
      const element = buttons.item(index);
      let enableString = ""

      if (element !== null && typeof element.getAttribute("data-enable") === "string") {
        enableString = element.getAttribute("data-enable");
      }

      if (props.settings.animations.includes(enableString)) {
        element?.classList.add(css.enabled);
      } else {
        element?.classList.remove(css.enabled);
      }
    }
  }, [props.settings.animations]);

  return (
    <Stack direction="column" gap="0.25rem">
      {animationsList.map((item, index) => {
        return (
          <Fragment key={index}>
            <StackButton setSettings={props.setSettings} settings={props.settings} item={item} />
          </Fragment>
        );
      })}
    </Stack>
  );
}

function StackButton(props: {
  setSettings: Dispatch<SetStateAction<OverlaySettingsType>>;
  settings: OverlaySettingsType;
  item: { name: string; enableString: string };
}) {
  function updateDirection() {
    console.log(props.item.enableString, props.settings.animations);
    props.setSettings((prev) => {
      const arr = prev.animations;
      if (arr.includes(props.item.enableString)) {
        console.log(1, arr);
        arr.splice(arr.indexOf(props.item.enableString), 1);
        console.log(2, arr);
      } else {
        arr.push(props.item.enableString);
      }
      console.log(arr);
      return { ...prev, animations: arr };
    });
  }

  return (
    <Button onClick={() => updateDirection()} className={css.buttons} data-enable={props.item.enableString}>
      {props.item.name}
    </Button>
  );
}

const animationsList = [
  { name: "Zoom", enableString: "zoom" },
  { name: "Slide-In", enableString: "slide-in" },
];
