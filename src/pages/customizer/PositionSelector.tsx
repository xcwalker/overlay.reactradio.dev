import { Dispatch, SetStateAction, useEffect } from "react";
import { OverlaySettingsType } from "../../types";
import css from "../../styles/components/positionSelector.module.css";
import GFIcon from "../../components/GFIcon";

export default function PositionSelector(props: { setSettings: Dispatch<SetStateAction<OverlaySettingsType>>; settings: OverlaySettingsType }) {
  function updatePosition(e: any) {
    e.preventDefault();
    if (e.currentTarget === null) return;
    const value = e.currentTarget.getAttribute("data-position-value");

    props.setSettings((prev) => {
      return { ...prev, position: value };
    });
  }

  function updateDirection(e: any) {
    e.preventDefault();
    if (e.currentTarget === null) return;
    const value = e.currentTarget.getAttribute("data-direction-value");

    if (value === props.settings.direction) {
      props.setSettings((prev) => {
        return { ...prev, direction: "none" };
      });
      return;
    }

    props.setSettings((prev) => {
      return { ...prev, direction: value };
    });
  }

  useEffect(() => {
    const directionButtons = document.getElementsByClassName(css.direction);

    for (let index = 0; index < directionButtons.length; index++) {
      const element = directionButtons.item(index);

      if (element?.classList.contains(css.selected)) {
        element?.classList.remove(css.selected);
      }

      if (element?.getAttribute("data-direction-value") === props.settings.direction) {
        element?.classList.add(css.selected);
      }
    }

    const positionButtons = document.getElementsByClassName(css.position);

    for (let index = 0; index < positionButtons.length; index++) {
      const element = positionButtons.item(index);

      if (element?.classList.contains(css.selected)) {
        element?.classList.remove(css.selected);
      }

      if (element?.getAttribute("data-position-value") === props.settings.position) {
        element?.classList.add(css.selected);
      }
    }
  }, [props.settings.direction, props.settings.position]);

  return (
    <div className={css.controller}>
      <div />
      <button className={css.direction} data-direction-value="tb" onClick={(e) => updateDirection(e)}>
        <GFIcon>expand_more</GFIcon>
      </button>
      <div />
      <button className={css.direction} data-direction-value="lr" onClick={(e) => updateDirection(e)}>
        <GFIcon>chevron_right</GFIcon>
      </button>
      <div className={css.center}>
        <button className={css.position} data-position-value="tl" onClick={(e) => updatePosition(e)} />
        <button className={css.position} data-position-value="tc" onClick={(e) => updatePosition(e)} />
        <button className={css.position} data-position-value="tr" onClick={(e) => updatePosition(e)} />
        <button className={css.position} data-position-value="cl" onClick={(e) => updatePosition(e)} />
        <button className={css.position} data-position-value="cc" onClick={(e) => updatePosition(e)} />
        <button className={css.position} data-position-value="cr" onClick={(e) => updatePosition(e)} />
        <button className={css.position} data-position-value="bl" onClick={(e) => updatePosition(e)} />
        <button className={css.position} data-position-value="bc" onClick={(e) => updatePosition(e)} />
        <button className={css.position} data-position-value="br" onClick={(e) => updatePosition(e)} />
      </div>
      <button className={css.direction} data-direction-value="rl" onClick={(e) => updateDirection(e)}>
        <GFIcon>chevron_left</GFIcon>
      </button>
      <div />
      <button className={css.direction} data-direction-value="bt" onClick={(e) => updateDirection(e)}>
        <GFIcon>expand_less</GFIcon>
      </button>
      <div />
    </div>
  );
}
