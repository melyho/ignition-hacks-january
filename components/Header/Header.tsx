import NavLinks from "./NavLinks";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Header() {
  return (
    <header>
      <nav>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "black",
            padding: "3rem",
            width: "100%",
            paddingBottom: "1rem",
          }}
        >
          <NavLinks />
          <SocialMediaLinks />
        </div>
      </nav>
    </header>
  );
}
