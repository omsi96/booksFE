import { useState } from "react";
import { Card, CookieImage, Paragraph } from "../styles";
import { Redirect, useParams } from "react-router-dom";

const CookieDetailsView = ({ cookies, deleteCookie }) => {
  const { cookieSlug } = useParams();
  let cookie = cookies.find((cookie) => cookie.slug === cookieSlug);
  if (!cookie) return <Redirect to="/cookies" />;
  console.log(cookieSlug);
  console.log(cookie);
  return (
    <div style={{ display: "flex" }}>
      <img width="50%" src={cookie.img} alt="" />
      <div style={{ display: "block" }}>
        <h4 className="h4">{cookie.name}</h4>
        <Paragraph className="cookie-price">{cookie.price}</Paragraph>
        <button onClick={() => deleteCookie(cookie.id)}>🗑</button>
      </div>
    </div>
  );
};

export default CookieDetailsView;
