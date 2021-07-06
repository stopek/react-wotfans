import { motion } from "framer-motion";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const IconPlaceholder = styled.div`
  border: 2px solid white;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: white;
    width: 25px;
    height: 25px;
  }
`;

const TextPlaceholder = styled.div`
  border-radius: 5px;
  width: 200px;
  line-height: 1;
  padding: 10px 15px;
  flex: 1;
  border: 2px solid white;
  color: white;
  font-weight: 700;

  span {
    bottom: -1px;
    position: relative;
  }
`;

const LiItem = styled(motion.li)`
  margin: 0 0 20px 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const MenuItem = ({ translation, icon, href, route, ...props }) => {
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();

    return !!route ? history.push(route) : window.open(href, '_blank');
  }

  return (
    <LiItem
      onClick={handleClick}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.85 }}
      href={!!route ? route : href}
      target={`_blank`}
      {...props}
      as={`a`}
    >
      <IconPlaceholder>{icon}</IconPlaceholder>
      {!props?.no_title && (
        <TextPlaceholder>
          <span>
            <FormattedMessage id={translation} />
          </span>
        </TextPlaceholder>
      )}
    </LiItem>
  );
};
