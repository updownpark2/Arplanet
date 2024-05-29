export type TextSize = "small" | "medium" | "large";
export type TextWeiht = "thin" | "semithin" | "medium" | "thick";
export type Color = "white" | "lightgray" | "gray" | "darkgray" | "black";
export type ViewSize = "phone" | "pc";
//"white" | "#eeeee" | "#ccc" | "#616161" |"black";

interface Theme {
  color: {
    [key in Color]: string;
  };
  text: {
    size: {
      [key in TextSize]: string;
    };
    weight: { [key in TextWeiht]: string };
  };
  viewSize: {
    [key in ViewSize]: string;
  };
}

export const theme: Theme = {
  color: {
    white: "white",
    lightgray: "#c0c0c0",
    gray: "#ccc",
    darkgray: "#616161",
    black: "black",
  },
  text: {
    size: {
      small: "12px",
      medium: "18px",
      large: "24px",
    },
    weight: {
      thin: "100",
      semithin: "300",
      medium: "400",
      thick: "600",
    },
  },
  viewSize: {
    phone: "700px",
    pc: "1080px",
  },
};
