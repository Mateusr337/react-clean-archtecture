import { AppColors } from "@/domain/colors";
import styled from "styled-components";

export const Container = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentPage = styled.div`
  width: 100%;
  padding: 0 30dvw;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${AppColors.primary};
  border-top: 20px solid ${AppColors.primaryDark};
  color: ${AppColors.textConstraint};
`;

export const Footer = styled.footer`
  background-color: ${AppColors.primaryDark};
  height: 48px;
`;
