import { Path } from "@consts/path";
import React from "react";
import { Link } from "react-router-dom";

// import WebApp from "@twa-dev/sdk";

export const Account = () => {
  //   const { first_name, last_name, username, photo_url } =
  //     WebApp.initDataUnsafe.user;
  return (
    <div>
      <p>Мой аккаунт</p>
      <br />
      <Link to={Path.TO_HOME}>Вернуться назад</Link>
    </div>
  );
};
