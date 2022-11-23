import React, { InputHTMLAttributes, useCallback } from "react";
import "./styles.css";

export const TextField: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.minLength = 11;
    e.currentTarget.maxLength = 14;

    let value = e.currentTarget.value;
    value = value.replace(/\D+/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})/, "$1-$2");
    value = value.replace(/(-\d{2})\d+?$/, "$1");
    e.currentTarget.value = value;
  }, []);

  const handleClickOutside = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (e.currentTarget.value.length <= 11) {
        <>
          <p>digiqjkhf</p>
        </>;
        console.log("UEeeeeeeeeeeeeeeeepaaaaaaaaaa");
      }
    },
    []
  );

  return (
    <div className="label-float">
      <input
        {...props}
        id="input"
        type="text"
        onKeyUp={handleKeyUp}
        onBlur={handleClickOutside}
      />
      <label className="place-label">Digite seu CPF</label>
    </div>
  );
};
