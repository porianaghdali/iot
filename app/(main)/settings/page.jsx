import Card from "./components/card";
import AreasHeader from "./settingHeader";
export default function Setting() {
  const list=[
   { title:"پنل پیامکی",id:1,img:"/images/icons/settings/sms.png",path:"/settings/sms"},
   { title:" ایمیل",id:2,img:"/images/icons/settings/email.png",path:"/settings/email"},
   { title:" بات",id:3,img:"/images/icons/settings/bot.png",path:"/settings/bot"},
   { title:" زمان سرور",id:4,img:"/images/icons/settings/server.png",path:"/settings/server"},
   { title:" به‌روز رسانی",id:5,img:"/images/icons/settings/update.png",path:"/settings/update"},
   { title:" پایگاه داده",id:6,img:"/images/icons/settings/data.png",path:"/settings/data"},
   { title:" مدیریت شبکه",id:7,img:"/images/icons/settings/network.png",path:"/settings/network"},
   { title:" ورود دو عاملی",id:8,img:"/images/icons/settings/protect.png",path:"/settings/protect"},
   { title:" امنیت برنامه",id:9,img:"/images/icons/settings/security.png",path:"/settings/security"},


  ]
  return (
    <div className="w-full bg-background-main h-[calc(100vh-64px)] overflow-auto ">
      <AreasHeader />
      <div className="p-4 flex gap-1.5 w-full ">
        <div className="flex gap-1.5 w-full flex-wrap">
        {list.map((item) => {
          return <Card key={item.id} title={item.title} img={item.img} link={item.path}/>
})}
        
         
   
          
        </div>
      </div>
    </div>
  );
}
