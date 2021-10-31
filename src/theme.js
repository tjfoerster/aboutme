import { createGlobalStyle } from "styled-components";
import './custom.scss';

export const colors = {
    primary: "#44e996",
    secondary: "#80acac",
    warning: "#FAD85D",
    info: "#23BDD9",
    danger: "#FF4743",
    light1: "#eee",
    light2: "#ccc",
    dark1: "#111",
    dark2: "#333",
}

export const lightTheme = {
    body: colors.light1,
    fontColor: colors.dark1,
};

export const darkTheme = {
    body: colors.dark1,
    fontColor: colors.light1,
};

export const GlobalStyles = createGlobalStyle`
    :root {
        --swiper-theme-color: ${colors.primary};

        --bs-primary: ${colors.primary};
    }

    body {
        background-color: ${(props) => props.theme.body};
    }
`;