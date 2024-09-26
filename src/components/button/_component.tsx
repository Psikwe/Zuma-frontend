import classNames from "classnames";
import { IButton } from "../../core/utilities/interface";

export const Button = ({ ...prop }: IButton) => {
  prop.loading ??= false;
  prop.disabled ??= false;

  return (
    <>
      <button
        title={prop.title}
        disabled={prop.disabled}
        onClick={prop.onClick}
        type={prop.type ?? "button"}
        data-te-ripple-init
        data-te-ripple-color="light"
        className={classNames(
          "mtn-button",
          prop.className,
          {
            "bg-[#fc0] hover:bg-red-500 text-black hover:text-white":
              !prop.className?.includes(" bg-"),
          },
          { "mtn-button__disabled": prop.disabled },
          { "cursor-progress": prop.loading }
        )}
        {...prop.attr}
      >
        {prop.loading ? (
          <span className="dots-cont">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
          </span>
        ) : (
          prop.label
        )}
      </button>
    </>
  );
};
