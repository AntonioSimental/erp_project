import SectionFlex from "@/src/components/SectionFlex";
import Slidebar from "@/src/components/Slidebar";

export default function LayoutRh({ children }) {
  return (
    <div style={{"display":"flex"}}>
      <Slidebar />
      <SectionFlex bg="#2a2a2a">
        {children}
      </SectionFlex>
    </div>
  );
}