import { ReactNode } from "react";

export interface ShareData {
  text?: string;
  title?: string;
  url?: string;
}

export interface ReactShareProps {
  children: ReactNode;
  closeText?: string | ReactNode;
  data: ShareData;
  sites?: string[];
  onClick?: (name: string) => void;
  disableNative?: boolean;
  dark?: boolean;
  scrollable?: boolean;
  showLabels?: boolean;
  copySuccessText?: string;
}

export interface SocialIconsProps {
  onClose: () => void;
  closeText?: string | ReactNode;
  sites: string[];
  data: Required<ShareData>;
  onClick?: (name: string) => void;
  dark?: boolean;
  scrollable?: boolean;
  showLabels?: boolean;
  copySuccessText?: string;
}

export interface IconProps {
  onClose: () => void;
  name: string;
  data: Required<ShareData>;
  onClick?: (name: string) => void;
  dark?: boolean;
  showLabel?: boolean;
  copySuccessText?: string;
}

export interface IconItem {
  path: ReactNode;
  e: (url: string, text: string, title: string) => void | Promise<void>;
  color: string;
  viewBox?: string;
  label?: string;
}
