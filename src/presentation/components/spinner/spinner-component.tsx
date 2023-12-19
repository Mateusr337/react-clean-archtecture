import { AppColors } from "@/domain/colors";
import React from "react";
import { Circles } from "react-loader-spinner";

export default function Spinner(): React.ReactElement {
  return (
    <Circles
      height='50'
      width='50'
      color={AppColors.primaryLight}
      ariaLabel='loading'
    />
  );
}
