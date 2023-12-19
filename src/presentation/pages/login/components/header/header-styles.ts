import { AppColors } from "@/domain/colors";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${AppColors.primary};
  border-top: 20px solid ${AppColors.primaryDark};
  color: ${AppColors.textConstraint};
`;
