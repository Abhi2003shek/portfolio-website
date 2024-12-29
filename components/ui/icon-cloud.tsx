"use client";

import { useEffect, useState, useMemo } from "react";
import { Cloud, fetchSimpleIcons, ICloud, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const isLightTheme = theme === "fantasy";
  const isDarkTheme = theme === "night";

  const bgHex = isLightTheme ? "#f3f2ef" : "#080510";
  const fallbackHex = isLightTheme ? "#6e6e73" : "#ffffff";
  const iconColor = isDarkTheme ? "#ffffff" : "#000000";

  const minContrastRatio = isDarkTheme ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
    iconColor,
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        setTheme("fantasy");
      }
    }
  }, []);

  useEffect(() => {
    if (iconSlugs.length) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return [];
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "fantasy"),
    );
  }, [data, theme]);

  if (data === null || theme === null) {
    return null;
  }

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}
