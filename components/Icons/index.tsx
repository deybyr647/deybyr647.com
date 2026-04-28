import { mdiEmail, mdiFileDocument, mdiGithub, mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";

const iconSize = 1.5;

export const LinkedinIcon = () => (
  <a
    href={"https://www.linkedin.com/in/deyby-rodriguez/"}
    target={"_blank"}
    rel={"noreferrer noopener"}
  >
    <Icon
      path={mdiLinkedin}
      title={"Deyby on LinkedIn"}
      size={iconSize}
      className={"icon"}
    />
  </a>
);

export const GithubIcon = () => (
  <a
    href={"https://www.github.com/deybyr647"}
    target={"_blank"}
    rel={"noreferrer noopener"}
  >
    <Icon
      path={mdiGithub}
      title={"Deyby on GitHub"}
      size={iconSize}
      className={"icon"}
    />
  </a>
);

export const EmailIcon = () => (
  <a
    href={"mailto:deybyr647@gmail.com?subject=Hey%20Deyby!"}
    target={"_blank"}
    rel={"noopener noreferrer"}
  >
    <Icon
      path={mdiEmail}
      title={"Email Deyby"}
      size={iconSize}
      className={"icon"}
    />
  </a>
);

export const FileIcon = () => (
  <Icon
    path={mdiFileDocument}
    title={"See Deyby's Resume"}
    size={iconSize}
    className={"icon"}
  />
);
