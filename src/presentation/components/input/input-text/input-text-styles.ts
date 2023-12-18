import { AppColors } from "@/domain/colors";
import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid ${AppColors.primaryLight};
  line-height: 40px;
  border-radius: 4px;
  padding: 0 5px;

  &:focus {
    outline-color: ${AppColors.primaryLight};
  }

  &::placeholder {
    padding: 0 2px;
  }
`;
