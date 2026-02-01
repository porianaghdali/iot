import EmailHeader from "./emailHeader";
import EmailPanel from "./components/emailPanel";
export default function Email() {
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <EmailHeader />
      <div className=" flex gap-1.5 w-full border-t border-border-muted">
     
      </div>
      <div className="py-6 px-4">
      <EmailPanel />
      </div>
    </div>
  );
}
