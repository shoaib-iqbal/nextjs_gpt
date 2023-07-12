import React from "react";
import Dialog from "./Dialog";
import { useTranslation } from "next-i18next";
import { authEnabled } from "../utils/env-helper";

export default function HelpDialog({
  show,
  close,
}: {
  show: boolean;
  close: () => void;
}) {
  const { t } = useTranslation("help");

  return (
    <Dialog
      header={`${t("welcome-to-AutoGPT-Next-Web")} 🤖`}
      isShown={show}
      close={close}
    >
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <p>
          <strong>AutoGPT</strong> {t("usage")} 🚀
        </p>
      </div>
    </Dialog>
  );
}
