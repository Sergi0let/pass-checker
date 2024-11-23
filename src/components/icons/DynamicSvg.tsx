import * as ImportedIcons from "./index";

const Icons = ImportedIcons as { [key: string]: React.ComponentType };

type DynamicSvgProps = {
  name: keyof typeof Icons;
  className?: string;
};

const DynamicSvg = ({ name, className }: DynamicSvgProps) => {
  const IconComponent = Icons[name] as React.FC<{ className?: string }>;
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={className} />;
};

export default DynamicSvg;
