"use client";

import { Icon } from '@iconify/react';

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export default function NavToggle({
  isOpen,
  toggle,
}: Props) {
  return (
    <div className="fixed top-5 left-5 z-50">
      <button className="btn glass btn-circle" onClick={toggle} aria-label="Toggle Navigation">
        <Icon
          icon={
            isOpen
              ? "ix:navigation"
              : "ix:navigation-filled"
          }
          className="size-6"
        />
      </button>
    </div>
  );
}
