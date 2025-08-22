import React from "react";

import WebApp from "@twa-dev/sdk";
import { Link } from "react-router-dom";
import { Path } from "@consts/path";

export const Chats = () => {
  return (
    <div>
      <p>Список чатов и тд</p>
      <p>
        {WebApp.initData}
        _______
        {WebApp.initDataUnsafe}
      </p>

      <p>{WebApp?.initData}</p>
      <br />
      <Link to={Path.TO_HOME}>Вернуться назад</Link>
    </div>
  );
};
