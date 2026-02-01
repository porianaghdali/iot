import Card from "./components/card";
import AreasHeader from "./areasHeader";
export default function Areas() {
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <AreasHeader />
      <div className="p-4 flex gap-1.5 w-full ">
        <div className="grid grid-cols-3 gap-1.5 w-full">
        
            <Card  status={true}/>
            <Card  status={false}/>
            <Card  status={true}/>
            <Card  status={false}/>
            <Card  status={true}/>
   
          
        </div>
      </div>
    </div>
  );
}
