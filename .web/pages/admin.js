/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getRefValue, getRefValues, isTrue } from "$/utils/state"
import { Calendar as LucideCalendar, CalendarOff as LucideCalendarOff, ChevronLeft as LucideChevronLeft, ChevronRight as LucideChevronRight, Pencil as LucidePencil, Phone as LucidePhone, Scissors as LucideScissors, Trash as LucideTrash, User as LucideUser, UserCheck as LucideUserCheck, X as LucideX } from "lucide-react"
import dynamic from "next/dynamic"
import NextHead from "next/head"
import { jsx } from "@emotion/react"

const Moment = dynamic(() => import('react-moment'), { ssr: false });


export function Input_ef448e319296942db4c478d519989941 () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)





  
  return (
    jsx("input",{className:"w-full px-4 py-2 mt-4 rounded-lg border",defaultValue:reflex___state____state__app___states___state____barber_state.editing_item_name,name:"name",placeholder:"Nombre del barbero"},)

  )
}

export function Form_a2668eeee88a7a6601615b1e5ed83676 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_20f7596e805a8b8f90dc89e53fec6451 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.add_service", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (true) {
            $form.reset()
        }
    })
    




  
  return (
    jsx(
"form",
{onSubmit:handleSubmit_20f7596e805a8b8f90dc89e53fec6451},
jsx(
"div",
{className:"flex flex-col sm:flex-row gap-2 sm:gap-0"},
jsx("input",{className:"flex-grow px-4 py-2 rounded-lg sm:rounded-r-none border border-gray-300 focus:ring-2 focus:ring-blue-500",name:"name",placeholder:"Nombre del servicio"},)
,jsx("input",{className:"w-full sm:w-28 px-4 py-2 rounded-lg sm:rounded-none border-y sm:border-y border-x sm:border-x-0 border-gray-300 focus:ring-2 focus:ring-blue-500",name:"price",placeholder:"Precio",type:"number"},)
,jsx(
"button",
{className:"px-6 py-2 bg-blue-600 text-white rounded-lg sm:rounded-l-none font-medium hover:bg-blue-700",type:"submit"},
"Agregar"
,),),)
  )
}

export function Div_9b26cf768cfa7a5c640c69c628907cb3 () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    jsx(
"div",
{className:"flex flex-col gap-2"},
reflex___state____state__app___states___state____barber_state.services.map((service,index_434fed1c733076e2)=>(jsx(
"div",
{className:"flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg",key:index_434fed1c733076e2},
jsx(
"p",
{className:"font-medium"},
(service["name"]+" - $"+service["price"])
,),jsx(
"div",
{className:"flex items-center gap-2"},
jsx(
"button",
{className:"p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full",onClick:((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.open_edit_service_dialog", ({ ["service"] : service }), ({  })))], args, ({  }))))},
jsx(LucidePencil,{className:"w-4 h-4"},)
,),jsx(
"button",
{className:"p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full",onClick:((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.delete_service", ({ ["service_id"] : service["id"] }), ({  })))], args, ({  }))))},
jsx(LucideTrash,{className:"w-4 h-4"},)
,),),))),)
  )
}

export function Fragment_12066f4685b4b7e9be2eff8167230ab4 () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)





  
  return (
    jsx(
Fragment,
{},
(reflex___state____state__app___states___state____barber_state.show_edit_barber_dialog ? (jsx(
Fragment,
{},
jsx(
"div",
{},
jsx(
"div",
{className:"fixed inset-0 z-50 flex items-center justify-center p-4"},
jsx(
"div",
{className:"bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"},
jsx(
"h3",
{className:"text-xl font-semibold"},
"Editar Barbero"
,),jsx(Form_a95dc94aed8459b371cc339b581835fa,{},)
,),),jsx(Div_c3ae72ebe77fdb36c48f8edaba7f0aa1,{},)
,),)) : (jsx(Fragment,{},)
)),)
  )
}

export function Form_5939e8b72837965500784d639fbfefa8 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_816df61b9c9cdd979a9e0b16d3d084e7 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.save_service_edit", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    




  
  return (
    jsx(
"form",
{onSubmit:handleSubmit_816df61b9c9cdd979a9e0b16d3d084e7},
jsx(Input_2b4787974d58641f9bc560c64727dc47,{},)
,jsx(Input_8c1f2be919f7b21f0c20a276568a3a28,{},)
,jsx(
"div",
{className:"flex justify-end gap-4 mt-4"},
jsx(Button_e9103df4ff84eeb5c28bb028a5a2ed7c,{},)
,jsx(
"button",
{className:"px-4 py-2 bg-blue-600 text-white rounded-lg",type:"submit"},
"Guardar"
,),),)
  )
}

export function Div_e9ae8d3d0c9ba8a6c1aeb92db81a6707 () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    jsx(
"div",
{className:"grid grid-cols-3 sm:grid-cols-4 gap-3"},
reflex___state____state__app___states___state____barber_state.all_possible_times.map((time,index_dea88847dfc93efc)=>(jsx(
"button",
{className:(reflex___state____state__app___states___state____barber_state.availability_selected_times.includes(time) ? "w-full py-2 px-2 rounded-lg bg-blue-600 text-white font-semibold shadow-md" : "w-full py-2 px-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-800 font-medium transition-colors"),key:index_dea88847dfc93efc,onClick:((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.toggle_availability_time", ({ ["time"] : time }), ({  })))], args, ({  }))))},
jsx(
Moment,
{format:"hh:mm A",parse:"HH:mm"},
time
,),))),)
  )
}

export function Div_ed122fdd6868e40b51a2199a3236da5d () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)





  
  return (
    jsx(
"div",
{className:"grid grid-cols-7 gap-2 mb-2"},
reflex___state____state__app___states___state____barber_state.week_days.map((day,index_465ddece405fc848)=>(jsx(
"div",
{className:"text-center font-medium text-sm text-gray-500",key:index_465ddece405fc848},
day
,))),)
  )
}

export function Div_effeb071a3a8a4c33f3355636f92bb83 () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    jsx(
"div",
{className:"flex flex-col gap-6"},
reflex___state____state__app___states___state____barber_state.filtered_appointments.map((appointment,index_db8781948d2837b0)=>(jsx(
"div",
{className:"bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300",key:index_db8781948d2837b0},
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

export function Select_f031fc2373ad4f06ff554be19de2662b () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_84597323f052f6da55527789923126a3 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.handle_availability_barber_change", ({ ["barber_id"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
"select",
{className:"w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white",onChange:on_change_84597323f052f6da55527789923126a3,value:reflex___state____state__app___states___state____barber_state.availability_selected_barber_id},
reflex___state____state__app___states___state____barber_state.barbers.map((barber,index_3ac2dbd64cb0d9ec)=>(jsx(
"option",
{key:index_3ac2dbd64cb0d9ec,value:barber["id"]},
barber["name"]
,))),)
  )
}

export function Div_9d5dc6c4a3c85f45b73ce9ee3680146a () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    jsx(
"div",
{className:"flex flex-col gap-2"},
reflex___state____state__app___states___state____barber_state.barbers.map((barber,index_e3a5729d98c911af)=>(jsx(
"div",
{className:"flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg",key:index_e3a5729d98c911af},
jsx(
"p",
{className:"font-medium"},
barber["name"]
,),jsx(
"div",
{className:"flex items-center gap-2"},
jsx(
"button",
{className:"p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full",onClick:((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.open_edit_barber_dialog", ({ ["barber"] : barber }), ({  })))], args, ({  }))))},
jsx(LucidePencil,{className:"w-4 h-4"},)
,),jsx(
"button",
{className:"p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full",onClick:((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.delete_barber", ({ ["barber_id"] : barber["id"] }), ({  })))], args, ({  }))))},
jsx(LucideTrash,{className:"w-4 h-4"},)
,),),))),)
  )
}

export function Button_6a57e89901a48b4d802108bdfb9233d9 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_4d1195792cd8fb349de64d41a69ee466 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.change_month", ({ ["delta"] : 1 }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
"button",
{className:"p-2 rounded-md hover:bg-gray-100",onClick:on_click_4d1195792cd8fb349de64d41a69ee466,type:"button"},
jsx(LucideChevronRight,{},)
,)
  )
}

export function Button_d4bc67048442ecbfbc79d48aae68ccc2 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_e2918d51109d1900bacad485bfb89936 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.clear_filters", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
"button",
{className:"px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 font-medium transition-colors",onClick:on_click_e2918d51109d1900bacad485bfb89936},
"Limpiar Filtros"
,)
  )
}

export function Form_fe525aa00b3be4dc0d1ba21d1cfc0407 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_06dac09a707e6a91d71d04c375c476f6 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.add_barber", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (true) {
            $form.reset()
        }
    })
    




  
  return (
    jsx(
"form",
{onSubmit:handleSubmit_06dac09a707e6a91d71d04c375c476f6},
jsx(
"div",
{className:"flex flex-col sm:flex-row gap-2 sm:gap-0"},
jsx("input",{className:"flex-grow px-4 py-2 rounded-lg sm:rounded-r-none border border-gray-300 focus:ring-2 focus:ring-blue-500",name:"name",placeholder:"Nombre del nuevo barbero"},)
,jsx(
"button",
{className:"px-6 py-2 bg-blue-600 text-white rounded-lg sm:rounded-l-none font-medium hover:bg-blue-700",type:"submit"},
"Agregar"
,),),)
  )
}

export function Div_c3ae72ebe77fdb36c48f8edaba7f0aa1 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_0ae27cb837d943d571c88dfa1388075b = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.close_edit_dialogs", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx("div",{className:"fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",onClick:on_click_0ae27cb837d943d571c88dfa1388075b},)

  )
}

export function Input_99c71083c428b1411d2e6664900b9c9a () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_99be9a78ba52403cae52c682bea78780 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.set_filter_name", ({ ["name"] : _e["target"]["value"] }), ({ ["debounce"] : 300 })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx("input",{className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500",defaultValue:reflex___state____state__app___states___state____barber_state.filter_name,onChange:on_change_99be9a78ba52403cae52c682bea78780,placeholder:"Nombre del cliente"},)

  )
}

export function Form_a95dc94aed8459b371cc339b581835fa () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_16f3997b4b72faed75ccdec8402eeda0 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.save_barber_edit", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    




  
  return (
    jsx(
"form",
{onSubmit:handleSubmit_16f3997b4b72faed75ccdec8402eeda0},
jsx(Input_ef448e319296942db4c478d519989941,{},)
,jsx(
"div",
{className:"flex justify-end gap-4 mt-4"},
jsx(Button_e9103df4ff84eeb5c28bb028a5a2ed7c,{},)
,jsx(
"button",
{className:"px-4 py-2 bg-blue-600 text-white rounded-lg",type:"submit"},
"Guardar"
,),),)
  )
}

export function Button_e9103df4ff84eeb5c28bb028a5a2ed7c () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_0ae27cb837d943d571c88dfa1388075b = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.close_edit_dialogs", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
"button",
{className:"px-4 py-2 bg-gray-200 rounded-lg",onClick:on_click_0ae27cb837d943d571c88dfa1388075b,type:"button"},
"Cancelar"
,)
  )
}

export function Div_bc92485e83583c1d670b9f85d4a79a2c () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    jsx(
"div",
{className:"flex flex-col gap-2"},
reflex___state____state__app___states___state____barber_state.admin_calendar_weeks.map((week,index_09bde730a8683120)=>(jsx(
"div",
{className:"grid grid-cols-7 gap-2",key:index_09bde730a8683120},
week.map((day_data,index_992282aad79abab0)=>(jsx(
Fragment,
{key:index_992282aad79abab0},
(isTrue(day_data["is_in_month"]) ? (jsx(
Fragment,
{},
jsx(
"button",
{className:(isTrue(day_data["is_disabled"]) ? "p-2 rounded-full w-10 h-10 flex items-center justify-center text-gray-300 cursor-not-allowed" : (isTrue(day_data["is_selected"]) ? "p-2 rounded-full bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-bold shadow-lg" : (isTrue(day_data["is_today"]) ? "p-2 rounded-full bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center font-semibold" : "p-2 rounded-full hover:bg-gray-100 w-10 h-10 flex items-center justify-center transition-colors"))),disabled:day_data["is_disabled"],onClick:((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.handle_availability_date_change", ({ ["date_str"] : day_data["date_str"] }), ({  })))], args, ({  })))),type:"button"},
day_data["day"]
,),)) : (jsx(
Fragment,
{},
jsx("div",{className:"p-2 w-10 h-10"},)
,))),))),))),)
  )
}

export function Select_93483f12967050f594034ddc2fd83b3f () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_0649d64e563154f3596fe8470b90f4dc = useCallback(((_e) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.set_filter_service", ({ ["service"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
"select",
{className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white",defaultValue:reflex___state____state__app___states___state____barber_state.filter_service,key:("filter-service-"+reflex___state____state__app___states___state____barber_state.filter_service),onChange:on_change_0649d64e563154f3596fe8470b90f4dc},
jsx(
"option",
{value:""},
"Todos los servicios"
,),reflex___state____state__app___states___state____barber_state.services.map((service,index_e12211c9b1e5319a)=>(jsx(
"option",
{key:index_e12211c9b1e5319a,value:service["name"]},
service["name"]
,))),)
  )
}

export function Fragment_0eb5f756314f8a0cbf0c2c9af82ec06b () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)





  
  return (
    jsx(
Fragment,
{},
(reflex___state____state__app___states___state____barber_state.show_edit_service_dialog ? (jsx(
Fragment,
{},
jsx(
"div",
{},
jsx(
"div",
{className:"fixed inset-0 z-50 flex items-center justify-center p-4"},
jsx(
"div",
{className:"bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"},
jsx(
"h3",
{className:"text-xl font-semibold"},
"Editar Servicio"
,),jsx(Form_5939e8b72837965500784d639fbfefa8,{},)
,),),jsx(Div_c3ae72ebe77fdb36c48f8edaba7f0aa1,{},)
,),)) : (jsx(Fragment,{},)
)),)
  )
}

export function Input_8c1f2be919f7b21f0c20a276568a3a28 () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)





  
  return (
    jsx("input",{className:"w-full px-4 py-2 mt-2 rounded-lg border",defaultValue:(JSON.stringify(reflex___state____state__app___states___state____barber_state.editing_item_price)),name:"price",placeholder:"Precio",type:"number"},)

  )
}

export function H4_fc5f94c25e627dd913fb7a8b80f210b9 () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)





  
  return (
    jsx(
"h4",
{className:"font-semibold mb-4 text-center text-gray-700"},
("Horarios para "+reflex___state____state__app___states___state____barber_state.availability_selected_date)
,)
  )
}

export function H3_08c94965a27fedb77161ab9bac7c626a () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)





  
  return (
    jsx(
"h3",
{className:"font-semibold text-lg w-32 text-center"},
reflex___state____state__app___states___state____barber_state.display_month_str
,)
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

export function Button_70a48297308ae33ca05188f23feac1ce () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_bbd51f1c91224877654c5e8e3e62e38f = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.change_month", ({ ["delta"] : -1 }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
"button",
{className:"p-2 rounded-md hover:bg-gray-100",onClick:on_click_bbd51f1c91224877654c5e8e3e62e38f,type:"button"},
jsx(LucideChevronLeft,{},)
,)
  )
}

export function Fragment_730c4abcd1ea71fc1bee4f95463f8b82 () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)





  
  return (
    jsx(
Fragment,
{},
(!((reflex___state____state__app___states___state____barber_state.availability_selected_date === "")) ? (jsx(
Fragment,
{},
jsx(
"div",
{className:"w-full md:w-1/2 p-4 md:p-8 border-l border-gray-200"},
jsx(H4_fc5f94c25e627dd913fb7a8b80f210b9,{},)
,jsx(Div_e9ae8d3d0c9ba8a6c1aeb92db81a6707,{},)
,jsx(Button_889dac06855832dfe5e86cdbc0fc1240,{},)
,),)) : (jsx(Fragment,{},)
)),)
  )
}

export function Input_2b4787974d58641f9bc560c64727dc47 () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)





  
  return (
    jsx("input",{className:"w-full px-4 py-2 mt-4 rounded-lg border",defaultValue:reflex___state____state__app___states___state____barber_state.editing_item_name,name:"name",placeholder:"Nombre del servicio"},)

  )
}

export function Fragment_010d6b57b695d6134fbe1c8a7d1367cd () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)





  
  return (
    jsx(
Fragment,
{},
((reflex___state____state__app___states___state____barber_state.filtered_appointments.length > 0) ? (jsx(
Fragment,
{},
jsx(Div_effeb071a3a8a4c33f3355636f92bb83,{},)
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
"No hay citas que coincidan con la b\u00fasqueda."
,),),))),)
  )
}

export function Input_ba98916629164daf1969aaa95ee042ca () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_6e6beed521f8cd369a1627becaa5e397 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.set_filter_date", ({ ["date"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx("input",{className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500",defaultValue:reflex___state____state__app___states___state____barber_state.filter_date,onChange:on_change_6e6beed521f8cd369a1627becaa5e397,type:"date"},)

  )
}

export function Input_cfd6b755dff351b98c16c4c76f5b68d7 () {
  
  const reflex___state____state__app___states___state____barber_state = useContext(StateContexts.reflex___state____state__app___states___state____barber_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_a00271367302bfd43fc743b869c93862 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.set_filter_phone", ({ ["phone"] : _e["target"]["value"] }), ({ ["debounce"] : 300 })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx("input",{className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500",defaultValue:reflex___state____state__app___states___state____barber_state.filter_phone,onChange:on_change_a00271367302bfd43fc743b869c93862,placeholder:"Tel\u00e9fono",type:"tel"},)

  )
}

export function Button_889dac06855832dfe5e86cdbc0fc1240 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_ebd86994b7a63982a913a38003445164 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___states___state____barber_state.save_availability", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
"button",
{className:"w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all",onClick:on_click_ebd86994b7a63982a913a38003445164},
"Guardar Disponibilidad"
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
jsx(Fragment_12066f4685b4b7e9be2eff8167230ab4,{},)
,jsx(Fragment_0eb5f756314f8a0cbf0c2c9af82ec06b,{},)
,jsx(
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
{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"},
jsx(
"div",
{className:"w-full bg-white p-6 rounded-xl shadow-md border border-gray-100"},
jsx(
"h2",
{className:"text-2xl font-bold text-gray-800 mb-4 text-left"},
"Gestionar Barberos"
,),jsx(Form_fe525aa00b3be4dc0d1ba21d1cfc0407,{},)
,jsx("div",{className:"my-6 border-t border-gray-200"},)
,jsx(Div_9d5dc6c4a3c85f45b73ce9ee3680146a,{},)
,),jsx(
"div",
{className:"w-full bg-white p-6 rounded-xl shadow-md border border-gray-100"},
jsx(
"h2",
{className:"text-2xl font-bold text-gray-800 mb-4 text-left"},
"Gestionar Servicios"
,),jsx(Form_a2668eeee88a7a6601615b1e5ed83676,{},)
,jsx("div",{className:"my-6 border-t border-gray-200"},)
,jsx(Div_9b26cf768cfa7a5c640c69c628907cb3,{},)
,),),jsx(
"div",
{className:"w-full bg-white p-6 rounded-xl shadow-md border border-gray-100 mt-6 mb-8"},
jsx(
"h2",
{className:"text-2xl font-bold text-gray-800 mb-4 text-left"},
"Gestionar Disponibilidad"
,),jsx(
"div",
{className:"mb-4"},
jsx(Select_f031fc2373ad4f06ff554be19de2662b,{},)
,),jsx(
"div",
{className:"flex flex-col md:flex-row gap-8"},
jsx(
"div",
{className:"w-full md:w-1/2"},
jsx(
"div",
{className:"flex items-center justify-between mb-4"},
jsx(Button_70a48297308ae33ca05188f23feac1ce,{},)
,jsx(H3_08c94965a27fedb77161ab9bac7c626a,{},)
,jsx(Button_6a57e89901a48b4d802108bdfb9233d9,{},)
,),jsx(Div_ed122fdd6868e40b51a2199a3236da5d,{},)
,jsx(Div_bc92485e83583c1d670b9f85d4a79a2c,{},)
,),jsx(Fragment_730c4abcd1ea71fc1bee4f95463f8b82,{},)
,),),jsx(
"div",
{className:"w-full bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8"},
jsx(
"h3",
{className:"text-xl font-bold text-gray-800 mb-4"},
"Filtrar Citas"
,),jsx(
"div",
{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"},
jsx(Input_99c71083c428b1411d2e6664900b9c9a,{},)
,jsx(Input_cfd6b755dff351b98c16c4c76f5b68d7,{},)
,jsx(Input_ba98916629164daf1969aaa95ee042ca,{},)
,jsx(Select_93483f12967050f594034ddc2fd83b3f,{},)
,),jsx(Button_d4bc67048442ecbfbc79d48aae68ccc2,{},)
,),jsx(
"div",
{className:"w-full max-w-3xl"},
jsx(
"h2",
{className:"text-2xl font-bold text-gray-800 mb-6 text-center"},
"Pr\u00f3ximas Citas"
,),jsx(Fragment_010d6b57b695d6134fbe1c8a7d1367cd,{},)
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
