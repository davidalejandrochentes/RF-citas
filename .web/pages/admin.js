/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event, isTrue } from "$/utils/state"
import { Calendar as LucideCalendar, CalendarOff as LucideCalendarOff, Phone as LucidePhone, Scissors as LucideScissors, User as LucideUser, UserCheck as LucideUserCheck, X as LucideX } from "lucide-react"
import dynamic from "next/dynamic"
import NextHead from "next/head"
import { jsx } from "@emotion/react"

const Moment = dynamic(() => import('react-moment'), { ssr: false });


export function Fragment_20997e94c9dd39dddfd466cc5aad91dd () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)





  
  return (
    jsx(
Fragment,
{},
((reflex___state____state__app___states___state____barber_state.sorted_appointments.length > 0) ? (jsx(
Fragment,
{},
jsx(Div_208c1dc0ca5f0933b4bb5f1215e2c93b,{},)
,)) : (jsx(
Fragment,
{},
jsx(
"div",
{className:"flex flex-col items-center justify-center bg-gray-50 p-10 rounded-xl border border-dashed border-gray-200"},
jsx(LucideCalendarOff,{className:"w-16 h-16 text-gray-300"},)
,jsx(
"p",
{className:"text-gray-500 mt-4"},
"No hay citas agendadas."
,),),))),)
  )
}

export function Div_208c1dc0ca5f0933b4bb5f1215e2c93b () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    jsx(
"div",
{className:"flex flex-col gap-6"},
reflex___state____state__app___states___state____barber_state.sorted_appointments.map((appointment,index_7b3b5022ab4152e9)=>(jsx(
"div",
{className:"bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300",key:index_7b3b5022ab4152e9},
jsx(
"div",
{},
jsx(
"div",
{className:"flex justify-between items-center"},
jsx(
"div",
{className:"flex items-center gap-3"},
jsx(LucideUser,{className:"w-5 h-5 text-blue-500"},)
,jsx(
"p",
{className:"font-semibold text-lg text-gray-800"},
appointment["name"]
,),),jsx(
Fragment,
{},
(reflex___state____state__app___states___auth_state____auth_state.is_logged_in ? (jsx(
Fragment,
{},
jsx(
"button",
{className:"text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors",onClick:((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.delete_appointment", ({ ["appointment_id"] : appointment["id"] }), ({  })))], args, ({  }))))},
jsx(LucideX,{className:"w-4 h-4"},)
,),)) : (jsx(
Fragment,
{},
jsx("div",{},)
,))),),),jsx("div",{className:"my-4 border-t border-gray-100"},)
,jsx(
"div",
{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 text-center sm:text-left"},
jsx(
"div",
{className:"flex items-center gap-2"},
jsx(LucideCalendar,{className:"w-4 h-4 text-gray-500"},)
,jsx(
"span",
{className:"text-sm text-gray-600"},
(appointment["date"]+" a las ")
,),jsx(
Moment,
{className:"text-sm text-gray-600",format:"hh:mm A",parse:"HH:mm"},
appointment["time"]
,),),jsx(
"div",
{className:"flex items-center gap-2"},
jsx(LucideScissors,{className:"w-4 h-4 text-gray-500"},)
,jsx(
"p",
{className:"text-sm text-gray-600"},
appointment["service"]
,),),jsx(
"div",
{className:"flex items-center gap-2"},
jsx(LucideUserCheck,{className:"w-4 h-4 text-gray-500"},)
,jsx(
"p",
{className:"text-sm text-gray-600"},
("con "+appointment["barber"])
,),),jsx(
"div",
{className:"flex items-center gap-2"},
jsx(LucidePhone,{className:"w-4 h-4 text-gray-500"},)
,jsx(
"p",
{className:"text-sm text-gray-600"},
appointment["phone"]
,),),),),))),)
  )
}

export function Button_832887a0ad0a4c2b5ef6432dcbf1466d () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_0b460a343085608d2862c7ce59f711d4 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___states___auth_state____auth_state.logout", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
"button",
{className:"px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-colors",onClick:on_click_0b460a343085608d2862c7ce59f711d4},
"Cerrar Sesi\u00f3n"
,)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
"main",
{className:"min-h-screen bg-gray-50 font-['Inter']"},
jsx(
"div",
{className:"container mx-auto flex flex-col items-center p-4 md:p-8"},
jsx(
"div",
{className:"w-full flex justify-between items-center mb-10"},
jsx(
"h1",
{className:"text-4xl font-extrabold tracking-tight text-gray-800"},
"Panel de Administrador"
,),jsx(Button_832887a0ad0a4c2b5ef6432dcbf1466d,{},)
,),jsx(
"div",
{className:"w-full max-w-3xl mt-12"},
jsx(
"h2",
{className:"text-2xl font-bold text-gray-800 mb-6 text-center"},
"Pr\u00f3ximas Citas"
,),jsx(Fragment_20997e94c9dd39dddfd466cc5aad91dd,{},)
,),),),jsx(
NextHead,
{},
jsx(
"title",
{},
"Panel de Administrador"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,),)
  )
}
