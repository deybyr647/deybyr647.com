import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";

const config = {
  iconSize: 1.5,
};

const { iconSize } = config;
export const LinkedinIcon = () => (
  <Icon
    path={mdiLinkedin}
    title={"Deyby on LinkedIn"}
    size={iconSize}
    className={"icon"}
  />
);

export const GithubIcon = () => (
  <Icon
    path={mdiGithub}
    title={"Deyby on GitHub"}
    size={iconSize}
    className={"icon"}
  />
);

export const EmailIcon = () => (
  <Icon
    path={mdiEmail}
    title={"Email Deyby"}
    size={iconSize}
    className={"icon"}
  />
);
