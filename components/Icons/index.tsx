import { mdiEmail, mdiGithub, mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";

const iconSize = 1.5;

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
