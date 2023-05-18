import OrderIcon from "../../public/icons/OrderIcon";
import TravelIcon from "../../public/icons/TravelIcon";
import UserIcon from "../../public/icons/UserIcon";

export const Buttons = [
  { name: "Хянах самбар", path: "/", icon: <TravelIcon /> },
  { name: "Аялалууд", path: "/travels/1", icon: <TravelIcon /> },
  { name: "Түүхүүд", path: "/stories/1", icon: <OrderIcon /> },
  { name: "Хэрэглэгчид", path: "/users/1", icon: <UserIcon /> },
];

export const activeClass =
  "flex justify-center items-center text-mycolor text-2xl text-2xl bg-slate-100 rounded-l-[50px] w-10/12 h-16 m-7";

export const inActiveClass =
  "flex justify-center items-center text-white text-2xl text-2xl bg-mycolor rounded-l-3xl w-10/12 h-16 m-7 hover:bg-slate-100 text-red-100";
export const activeTop =
  "bg-mycolor h-8 w-[180px] rounded-br-full text-mycolor";
export const inActive = "bg-mycolor h-8 w-8  text-mycolor decoration-none";
export const activeBottom = "bg-mycolor h-8 w-8 rounded-tr-full text-mycolor ";

export const province = [
  "Улаанбаатар",
  "Архангай",
  "Баян-Өлгий",
  "Баянхонгор",
  "Булган",
  "Говь-Алтай",
  "Говьсүмбэр	",
  "Дархан-Уул	",
  "Дорноговь",
  "Дорнод",
  "Дундговь",
  "Завхан",
  "Орхон",
  "Өвөрхангай",
  "Өмнөговь",
  "Сүхбаатар",
  "Сэлэнгэ",
  "Төв",
  "Увс",
  "Ховд",
  "Хөвсгөл",
  "Хэнтий",
];
export const category = ["lake", "history", "mountain"];
