import siIcon from "../../assets/brand/si-icon.png";

/**
 * App icon for SI Agent — square logo used in sidebar and small contexts.
 * Previously rendered the upstream Hermes icon; now uses the SI brand icon.
 * The component name is kept as HermesLogo for minimal diff with upstream imports.
 */
function HermesLogo({ size = 32 }: { size?: number }): React.JSX.Element {
  return (
    <img
      src={siIcon}
      width={size}
      height={size}
      className="rounded-xl"
      alt="SI Agent"
    />
  );
}

export default HermesLogo;
