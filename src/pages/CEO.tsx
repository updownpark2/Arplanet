import CEOIntroduce from "../components/CEO/CEOIntroduce";
import { useCeo } from "../hooks/useCeo";

export default function CEO() {
  const { ceoData } = useCeo();
  return <>{ceoData && <CEOIntroduce ceoData={ceoData} />}</>;
}
