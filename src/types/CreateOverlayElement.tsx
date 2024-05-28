interface Props {
  isOpen: boolean;
  close: () => void;
  exit: () => void;
}

export type CreateOverlayElement = (props: Props) => React.ReactNode;
