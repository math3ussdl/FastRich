import React from 'react';
import ReactDOM from 'react-dom';
import { cx, css } from 'emotion';

export const Button = React.forwardRef(
  ({ className, active, reversed, ...props }: any, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          color: #fff;
          padding: 5px 5px 5px 5px;
          background-color: transparent;
          border: 0;
          display: flex;
          align-self: center;
          justify-self: center;
          vertical-align: middle;

          margin-left: 6px;

          &:focus {
            outline: none;
            box-shadow: none;
          }

          &:hover {
            cursor: pointer;
            color: #fffa;
          }
          color: ${reversed
            ? active
              ? 'white'
              : '#aaa'
            : active
            ? 'black'
            : '#fff'};
        `
      )}
    />
  )
);

export const Menu = React.forwardRef(({ className, ...props }: any, ref) => (
  <div
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        position: relative;
        display: flex;

        bottom: -95%;
        right: -59.5%;

        background-color: #aaa;
        width: 295px;
        height: 40px;
        border-radius: 0.8rem;
        transform: rotate3d(1deg);
        box-shadow: 0 1.4rem 3.5rem rgba(0, 0, 0, 0.2);

        transition: 0.8s;
        transition-property: width, border-radius;

        @media screen and (max-width: 768px) {
          right: -25%;
        }
      `
    )}
  />
));

export const Portal = ({ children }: any) => {
  return ReactDOM.createPortal(children, document.body);
};

export const Toolbar = React.forwardRef(({ className, ...props }: any, ref) => (
  <Menu {...props} ref={ref} className={cx(className)} />
));
