import * as React from "react";
import clsx from "clsx";
import { styled } from "@mui/system";
import { useSwitch } from "@mui/core/SwitchUnstyled";

const SwitchRoot = styled("span")`
  display: inline-block;
  position: relative;
  width: 62px;
  height: 34px;
  padding: 7px;
`;

const SwitchInput = styled("input")`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`;

const SwitchThumb = styled("span")(
    ({ theme }) => `
  position: absolute;
  display: block;
  background-color: ${theme.palette.mode === "dark" ? "#003892" : "#001e3c"};
  width: 32px;
  height: 32px;
  border-radius: 16px;
  top: 1px;
  left: 7px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;

    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        "#fff"
    )}" d="M7 8c0 .551-.449 1-1 1-.551 0-1-.449-1-1s.449-1 1-1c.551 0 1 .449 1 1zm17 4c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-16-4c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2zm2.901 4.393v-.882c.011-1.208.215-2.1.614-2.675.398-.575.999-.862 1.801-.862.738 0 1.288.17 1.648.509.361.34.571.886.63 1.64h2.406c-.128-1.305-.604-2.318-1.428-3.04s-1.909-1.083-3.257-1.083c-.973 0-1.828.229-2.563.686s-1.3 1.114-1.696 1.969c-.396.856-.593 1.845-.593 2.968v.714c0 1.76.429 3.143 1.287 4.151.858 1.008 2.036 1.512 3.533 1.512 1.369 0 2.472-.361 3.309-1.083.837-.722 1.301-1.711 1.392-2.968h-2.406c-.054.711-.263 1.237-.63 1.576s-.921.509-1.665.509c-.823 0-1.427-.292-1.809-.874-.382-.582-.573-1.505-.573-2.767z"/></svg>') center center no-repeat;
  }

  &.focusVisible {
    background-color: #79B;
  }

  &.checked {
    transform: translateX(16px);
    
    &:before {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        "#fff"
    )}" d="M8 8c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1 1 .449 1 1zm16 4c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-15-4c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2zm8.352-2h-7.352v12h2.472v-4.904h4.385v-1.995h-4.385v-3.098h4.879v-2.003z"/></svg>');
    }
  }
`
);

const SwitchTrack = styled("span")(
    ({ theme }) => `
  background-color: ${theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: block;
`
);

function MUISwitch(props) {
    const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

    const stateClasses = {
        checked,
        disabled,
        focusVisible,
    };




    return (
        <SwitchRoot className={clsx(stateClasses)}>
            <SwitchTrack>
                <SwitchThumb className={clsx(stateClasses)} />
            </SwitchTrack>
            <SwitchInput {...getInputProps()} aria-label="Demo switch" />
        </SwitchRoot>
    );
}

// export default function UseSwitchesCustom() {
//     return <MUISwitch  />;
// }
export default MUISwitch