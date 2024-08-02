import React from "react";
import cx from "classnames";
import styles from "./styles/ImageAndTextBlock.module.css";
import Button from "./Button";
import BodyText from "./BodyText";

type Props = {
  children: React.ReactNode;
  bgColor: string;
  headerText: string;
  bgImage: string;
  right?: boolean;
  buttonShown?: boolean;
  id?: string;
  imgId?: string;
  href?: string;
  imgClassname?: string;
};

const ImageAndTextBlock: React.FC<Props> = ({
  bgColor,
  headerText,
  bgImage,
  id,
  buttonShown = true,
  right = false,
  children,
  imgId,
  href,
  imgClassname = "",
}) => {
  return (
    <div className={cx("flex flex-col md:flex-row")} id={id}>
      <div
        className={cx(
          "w-full overflow-hidden relative h-[350px] md:h-auto md:w-[40%]",
          right ? "md:order-2" : ""
        )}
      >
        <img
          src={bgImage}
          alt="@TODO"
          id={imgId}
          className={cx("absolute object-cover w-full h-full", imgClassname)}
        />
      </div>

      <div
        className={cx(
          "text-white flex flex-col px-8 py-16 md:py-12 md:px-16 md:w-[60%]"
        )}
        style={{ backgroundColor: bgColor }}
      >
        {headerText && <h1 className="text-3xl mt-0">{headerText}</h1>}
        <BodyText>{children}</BodyText>
        {buttonShown ? (
          <Button href={href} className="w-full md:w-[200px] mt-12">
            Learn More
          </Button>
        ) : (
          ``
        )}
      </div>
    </div>
  );
};

export default ImageAndTextBlock;
