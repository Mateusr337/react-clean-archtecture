import { AppColors } from "@/domain/colors";
import styled from "styled-components";

export const Container = styled.button`
  width: fit-content;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  color: ${AppColors.primaryDark};
  background-color: transparent;

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;