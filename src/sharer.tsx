"use client";

import "./style.css";

import React, { cloneElement, memo, useCallback, useMemo } from "react";

import { Backdrop } from "./components/backdrop";
import { IconList } from "./components/icon/list";
import { Portal } from "./components/portal";
import { SocialIcons } from "./components/social-icons";
import { useDisclosure } from "./hooks/use-disclosure";
import type { ReactShareProps } from "./interfaces";

const defaultSites = Object.keys(IconList);

export const ReactShare = memo((props: ReactShareProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const shareData = useMemo(
    () => ({
      text: props.data.text || "",
      title: props.data.title || "Share",
      url:
        props.data.url ||
        (typeof window !== "undefined" && window.location.href) ||
        "",
    }),
    [props.data]
  );

  const handleOnClick = useCallback(async () => {
    if (typeof window !== "undefined" && window.navigator.share && !props.disableNative) {
      try {
        await window.navigator.share(shareData);
        props.onClick?.("native");
      } catch (e) {
        if ((e as Error).name !== 'AbortError') {
           console.warn(e);
           onOpen();
        }
      }
    } else {
      onOpen();
    }
  }, [shareData, props.disableNative, props.onClick, onOpen]);

  return (
    <>
      {/* Overrides Children element's `onClick` event */}
      {cloneElement(props.children as React.ReactElement, {
        ...(props.children as React.ReactElement).props,
        onClick: handleOnClick,
      })}

      {/* Share Component */}
      {isOpen && (
        <Portal>
          <Backdrop onClose={onClose}>
            <SocialIcons
              onClose={onClose}
              sites={props.sites || defaultSites}
              data={shareData as Required<typeof shareData>}
              closeText={props.closeText}
              onClick={props.onClick}
              dark={props.dark}
              scrollable={props.scrollable}
              showLabels={props.showLabels}
              copySuccessText={props.copySuccessText}
            />
          </Backdrop>
        </Portal>
      )}
    </>
  );
});
