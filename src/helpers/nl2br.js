import React from "react";

export default function nl2br(text = null) {
  if (!text) {
    return text;
  }

  text = text.toString();

  if (!text?.length) {
    return text;
  }

  return text.split('\n').map((item, key) => {
    return <span key={key}>{item}<br /></span>
  });
}